// Perfume Ingredient Analyzer - Standalone JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded, starting ingredient analyzer initialization");
    
    /**
     * Sanitize a string to prevent XSS attacks
     * @param {string} str - The string to sanitize
     * @returns {string} - The sanitized string
     */
    function sanitizeString(str) {
        if (!str) return '';
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.textContent;
    }

    // DOM Elements
    const fragranceTypeSelect = document.getElementById('fragrance-type');
    const totalMlInput = document.getElementById('total-ml');
    const ingredientInput = document.getElementById('ingredient-input');
    const percentageSlidersContainer = document.getElementById('percentage-sliders');
    const totalPercentageDisplay = document.getElementById('total-percentage');
    const noIngredientsMessage = document.getElementById('no-ingredients-message');
    const analyzeBtn = document.getElementById('analyze-btn');
    const clearBtn = document.getElementById('clear-btn');
    const showIngredientsBtn = document.getElementById('show-ingredients-btn');
    const hideIngredientsBtn = document.getElementById('hide-ingredients-btn');
    const resultsSection = document.getElementById('results-section');
    const scoreDisplay = document.getElementById('score-display');
    const scoreMessage = document.getElementById('score-message');
    const ingredientsUsed = document.getElementById('ingredients-used');
    const projectionScoreDisplay = document.getElementById('projection-score');
    const longevityScoreDisplay = document.getElementById('longevity-score');
    const sillageScoreDisplay = document.getElementById('sillage-score');
    const ingredientDetailsTable = document.getElementById('ingredient-details-table');
    const errorMessage = document.getElementById('error-message');
    const ingredientsListSection = document.getElementById('ingredients-list-section');
    const topNotesElement = document.getElementById('top-notes');
    const heartNotesElement = document.getElementById('heart-notes');
    const baseNotesElement = document.getElementById('base-notes');
    
    // Tracking variables
    let currentIngredients = [];
    let ingredientPercentages = {};
    let totalPercentage = 0;
    let radarChart = null;
    
    // Example fragrance recipes
    const exampleFragrances = {
        summer: [
            'Bergamot', 'Lemon', 'Marine Notes', 'Mint', 'Neroli',
            'Jasmine', 'Green Apple', 'Lily', 'Melon', 'Orange Blossom',
            'Vetiver', 'White Musk', 'Oakmoss'
        ],
        winter: [
            'Cinnamon', 'Black Pepper', 'Nutmeg', 'Cardamom', 'Clove',
            'Amber', 'Vanilla', 'Leather', 'Oud', 'Frankincense',
            'Sandalwood', 'Cedarwood', 'Tonka Bean'
        ],
        date: [
            'Bergamot', 'Pink Grapefruit', 'Black Pepper',
            'Rose', 'Jasmine', 'Tuberose', 'Fig',
            'Amber', 'Vanilla', 'Musk', 'Patchouli', 'Oud'
        ]
    };
    
    // Optimized percentages for example fragrances
    const optimizedPercentages = {
        summer: {
            'Bergamot': 12, 'Lemon': 8, 'Marine Notes': 10, 'Mint': 5, 'Neroli': 10,
            'Jasmine': 8, 'Green Apple': 6, 'Lily': 7, 'Melon': 5, 'Orange Blossom': 8,
            'Vetiver': 7, 'White Musk': 10, 'Oakmoss': 4
        },
        winter: {
            'Cinnamon': 8, 'Black Pepper': 5, 'Nutmeg': 4, 'Cardamom': 6, 'Clove': 5,
            'Amber': 15, 'Vanilla': 14, 'Leather': 8, 'Oud': 9, 'Frankincense': 8,
            'Sandalwood': 10, 'Cedarwood': 4, 'Tonka Bean': 4
        },
        date: {
            'Bergamot': 6, 'Pink Grapefruit': 5, 'Black Pepper': 4, 'Rose': 10,
            'Jasmine': 12, 'Tuberose': 8, 'Fig': 8, 'Amber': 12, 'Vanilla': 10,
            'Musk': 13, 'Patchouli': 6, 'Oud': 6
        }
    };
    
    // Event Listeners
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeText);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAll);
    }
    
    if (showIngredientsBtn) {
        showIngredientsBtn.addEventListener('click', showIngredientsList);
    }
    
    if (hideIngredientsBtn) {
        hideIngredientsBtn.addEventListener('click', hideIngredientsList);
    }
    
    // Set up ingredient input event listeners
    if (ingredientInput) {
        ingredientInput.addEventListener('change', updateIngredientSliders);
        ingredientInput.addEventListener('blur', updateIngredientSliders);
    }
    
    // Set up total ml input event listener
    if (totalMlInput) {
        totalMlInput.addEventListener('change', handleTotalMlChange);
        totalMlInput.addEventListener('input', handleTotalMlChange);
    }
    
    // Add event listeners for fragrance type examples
    document.querySelectorAll('.fragrance-type-example').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const fragranceType = e.target.closest('.fragrance-type-example').dataset.type;
            loadExampleFragrance(fragranceType);
        });
    });
    
    // Initialize ingredient list
    initializeIngredientLists();
    
    // Initialize ingredient profiles from local data
    window.ingredientProfiles = getIngredientProfiles();
    console.log("Successfully loaded ingredient profiles from local data");
    
    /**
     * Initialize the ingredient lists categorized by note type
     */
    function initializeIngredientLists() {
        const ingredients = getAllIngredients();
        console.log(`Got ${ingredients.length} ingredients from local data`);
        
        // Clear existing lists
        topNotesElement.innerHTML = '';
        heartNotesElement.innerHTML = '';
        baseNotesElement.innerHTML = '';
        
        // Process ingredients into their categories based on the original structure
        // Top notes: first 59 ingredients
        // Heart notes: next 46 ingredients  
        // Base notes: remaining 49 ingredients
        const topNotes = ingredients.slice(0, 59);
        const heartNotes = ingredients.slice(59, 105);
        const baseNotes = ingredients.slice(105);
        
        console.log(`Split ingredients: ${topNotes.length} top notes, ${heartNotes.length} heart notes, ${baseNotes.length} base notes`);
        
        // Populate the lists
        populateIngredientList(topNotesElement, topNotes);
        populateIngredientList(heartNotesElement, heartNotes);
        populateIngredientList(baseNotesElement, baseNotes);
        
        // Add search functionality
        setupSearchFunctionality();
    }
    
    /**
     * Set up search functionality for ingredient lists
     */
    function setupSearchFunctionality() {
        const searchInputs = [
            { input: document.getElementById('top-notes-search'), list: topNotesElement },
            { input: document.getElementById('heart-notes-search'), list: heartNotesElement },
            { input: document.getElementById('base-notes-search'), list: baseNotesElement }
        ];
        
        searchInputs.forEach(({ input, list }) => {
            if (input) {
                input.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    const items = list.querySelectorAll('.ingredient-item');
                    
                    items.forEach(item => {
                        const ingredientName = item.dataset.ingredient.toLowerCase();
                        if (ingredientName.includes(searchTerm)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            }
        });
    }
    
    /**
     * Populate an ingredient list element with items
     */
    function populateIngredientList(element, ingredients) {
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.className = 'list-group-item ingredient-item';
            li.dataset.ingredient = ingredient[0];
            
            // Create the ingredient name element
            const nameSpan = document.createElement('span');
            nameSpan.className = 'ingredient-name';
            nameSpan.textContent = ingredient[0];
            
            // Create the info tooltip container
            const tooltipContainer = document.createElement('span');
            tooltipContainer.className = 'tooltip-container';
            
            // Create the info icon
            const infoIcon = document.createElement('span');
            infoIcon.className = 'ingredient-info';
            infoIcon.innerHTML = '<i class="bi bi-info-circle"></i>';
            
            // Create the tooltip text
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            tooltipText.textContent = ingredient[1];
            
            // Assemble the elements
            tooltipContainer.appendChild(infoIcon);
            tooltipContainer.appendChild(tooltipText);
            
            li.appendChild(nameSpan);
            li.appendChild(tooltipContainer);
            
            // Add tooltip positioning based on mouse position
            infoIcon.addEventListener('mouseenter', (e) => {
                const tooltip = tooltipContainer.querySelector('.tooltip-text');
                positionTooltip(e, tooltip);
            });
            
            infoIcon.addEventListener('mousemove', (e) => {
                const tooltip = tooltipContainer.querySelector('.tooltip-text');
                positionTooltip(e, tooltip);
            });
            
            infoIcon.addEventListener('mouseleave', () => {
                const tooltip = tooltipContainer.querySelector('.tooltip-text');
                tooltip.style.display = 'none';
            });
            
            tooltipText.addEventListener('mouseleave', () => {
                tooltipText.style.display = 'none';
            });
            
            // Add click event to add ingredient to input
            li.addEventListener('click', (event) => {
                if (event.target.closest('.tooltip-container')) {
                    return;
                }
                
                const scrollPosition = {
                    top: window.scrollY,
                    ingredient: ingredientInput.scrollTop,
                    container: event.target.closest('.ingredients-container').scrollTop
                };
                
                addIngredientToInput(ingredient[0]);
                
                event.preventDefault();
                event.stopPropagation();
                
                setTimeout(() => {
                    window.scrollTo({ top: scrollPosition.top });
                    ingredientInput.scrollTop = scrollPosition.ingredient;
                    
                    const container = event.target.closest('.ingredients-container');
                    if (container) {
                        container.scrollTop = scrollPosition.container;
                    }
                }, 10);
            });
            
            element.appendChild(li);
        });
    }
    
    /**
     * Helper function to position tooltip
     */
    function positionTooltip(e, tooltip) {
        const ingredientItem = e.target.closest('.ingredient-item');
        if (!ingredientItem) return;
        
        const itemRect = ingredientItem.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let leftPosition = itemRect.right + 10;
        let topPosition = itemRect.top;
        
        tooltip.style.visibility = 'hidden';
        tooltip.style.display = 'block';
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.visibility = 'visible';
        
        if (leftPosition + tooltipRect.width > viewportWidth - 10) {
            leftPosition = itemRect.left - tooltipRect.width - 10;
            if (leftPosition < 10) {
                leftPosition = viewportWidth - tooltipRect.width - 10;
            }
        }
        
        if (topPosition + tooltipRect.height > viewportHeight - 10) {
            topPosition = viewportHeight - tooltipRect.height - 10;
        }
        if (topPosition < 10) {
            topPosition = 10;
        }
        
        tooltip.style.left = leftPosition + 'px';
        tooltip.style.top = topPosition + 'px';
    }
    
    /**
     * Update the ingredient sliders based on the input field
     */
    function updateIngredientSliders() {
        const ingredientsText = ingredientInput.value.trim();
        if (!ingredientsText) {
            percentageSlidersContainer.innerHTML = '';
            if (noIngredientsMessage) {
                noIngredientsMessage.style.display = 'block';
            }
            totalPercentage = 0;
            updateTotalPercentageDisplay();
            return;
        }
        
        if (noIngredientsMessage) {
            noIngredientsMessage.style.display = 'none';
        }
        
        currentIngredients = ingredientsText
            .split(',')
            .map(ing => ing.trim())
            .filter(ing => ing.length > 0);
        
        // Initialize percentages for new ingredients
        currentIngredients.forEach(ingredient => {
            if (!ingredientPercentages[ingredient]) {
                const fragranceType = fragranceTypeSelect.value;
                if (fragranceType && optimizedPercentages[fragranceType] && optimizedPercentages[fragranceType][ingredient]) {
                    ingredientPercentages[ingredient] = optimizedPercentages[fragranceType][ingredient];
                } else {
                    ingredientPercentages[ingredient] = Math.floor(100 / currentIngredients.length);
                }
            }
        });
        
        // Remove percentages for ingredients no longer in the list
        Object.keys(ingredientPercentages).forEach(ingredient => {
            if (!currentIngredients.includes(ingredient)) {
                delete ingredientPercentages[ingredient];
            }
        });
        
        createPercentageSliders();
        updateTotalPercentageDisplay();
    }
    
    /**
     * Create percentage input fields for each ingredient
     */
    function createPercentageSliders() {
        percentageSlidersContainer.innerHTML = '';
        
        currentIngredients.forEach(ingredient => {
            const inputContainer = document.createElement('div');
            inputContainer.className = 'mb-3';
            
            const percentage = Math.max(1, ingredientPercentages[ingredient] || 1);
            
            inputContainer.innerHTML = `
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label class="form-label mb-0">${sanitizeString(ingredient)}:</label>
                    <span class="badge bg-secondary">${percentage}%</span>
                </div>
                <input type="number" class="form-control" min="1" max="100" step="1" value="${percentage}" 
                       placeholder="Enter 1-100" data-ingredient="${sanitizeString(ingredient)}" id="input-${sanitizeString(ingredient)}">
            `;
            
            const input = inputContainer.querySelector('.form-control');
            const badge = inputContainer.querySelector('.badge');
            
            const validateAndUpdate = (e) => {
                let newValue = parseInt(e.target.value);
                
                // Validate range
                if (isNaN(newValue) || newValue < 1) {
                    newValue = 1;
                    e.target.value = newValue;
                    e.target.style.borderColor = '#dc3545';
                } else if (newValue > 100) {
                    newValue = 100;
                    e.target.value = newValue;
                    e.target.style.borderColor = '#dc3545';
                } else {
                    e.target.style.borderColor = '';
                }
                
                ingredientPercentages[ingredient] = newValue;
                badge.textContent = `${newValue}%`;
                updateTotalPercentageDisplay();
            };
            
            input.addEventListener('input', validateAndUpdate);
            input.addEventListener('change', validateAndUpdate);
            input.addEventListener('blur', validateAndUpdate);
            
            percentageSlidersContainer.appendChild(inputContainer);
        });
    }
    
    /**
     * Update the total percentage display
     */
    function updateTotalPercentageDisplay() {
        totalPercentage = Object.values(ingredientPercentages).reduce((sum, val) => sum + val, 0);
        
        if (totalPercentageDisplay) {
            totalPercentageDisplay.textContent = `${totalPercentage}%`;
            
            if (totalPercentage > 100) {
                totalPercentageDisplay.className = 'badge bg-danger';
            } else if (totalPercentage < 95) {
                totalPercentageDisplay.className = 'badge bg-warning';
            } else {
                totalPercentageDisplay.className = 'badge bg-success';
            }
        }
    }
    
    /**
     * Handle total ml input changes
     */
    function handleTotalMlChange() {
        // Recalculate ml amounts if results are showing
        if (resultsSection && !resultsSection.classList.contains('d-none')) {
            updateIngredientDetailsTable();
        }
    }
    
    /**
     * Add an ingredient to the input field
     */
    function addIngredientToInput(ingredientName) {
        const currentValue = ingredientInput.value.trim();
        let newValue;
        
        if (!currentValue) {
            newValue = ingredientName;
        } else {
            const ingredients = currentValue.split(',').map(ing => ing.trim());
            if (!ingredients.includes(ingredientName)) {
                ingredients.push(ingredientName);
                newValue = ingredients.join(', ');
            } else {
                return; // Ingredient already exists
            }
        }
        
        ingredientInput.value = newValue;
        updateIngredientSliders();
    }
    
    /**
     * Load an example fragrance
     */
    function loadExampleFragrance(fragranceType) {
        console.log(`Loading example fragrance: ${fragranceType}`);
        
        // Set the fragrance type
        fragranceTypeSelect.value = fragranceType;
        
        // Get the ingredients for this fragrance type
        const ingredients = exampleFragrances[fragranceType];
        if (!ingredients) {
            console.error(`No example ingredients found for fragrance type: ${fragranceType}`);
            return;
        }
        
        // Set the ingredients in the input field
        ingredientInput.value = ingredients.join(', ');
        
        // Update sliders with optimized percentages
        ingredientPercentages = { ...optimizedPercentages[fragranceType] };
        
        // Update the UI
        updateIngredientSliders();
        
        // Auto-analyze
        setTimeout(() => {
            analyzeText();
        }, 100);
    }
    
    /**
     * Clear all inputs and results
     */
    function clearAll() {
        ingredientInput.value = '';
        currentIngredients = [];
        ingredientPercentages = {};
        totalPercentage = 0;
        
        percentageSlidersContainer.innerHTML = '';
        if (noIngredientsMessage) {
            noIngredientsMessage.style.display = 'block';
        }
        
        updateTotalPercentageDisplay();
        hideResults();
        hideError();
    }
    
    /**
     * Show ingredients list
     */
    function showIngredientsList() {
        console.log("Show ingredients list button clicked");
        ingredientsListSection.classList.remove('d-none');
        console.log("Ingredients list section display set to:", getComputedStyle(ingredientsListSection).display);
    }
    
    /**
     * Hide ingredients list
     */
    function hideIngredientsList() {
        console.log("Hide ingredients list button clicked");
        ingredientsListSection.classList.add('d-none');
        console.log("Ingredients list section display set to:", getComputedStyle(ingredientsListSection).display);
        console.log("Ingredients list section class list:", ingredientsListSection.classList);
    }
    
    /**
     * Analyze the ingredients using local data
     */
    function analyzeText() {
        hideError();
        
        if (currentIngredients.length === 0) {
            showError("Please enter some ingredients first.");
            return;
        }
        
        if (totalPercentage === 0) {
            showError("Please set percentages for your ingredients.");
            return;
        }
        
        try {
            const fragranceType = fragranceTypeSelect.value;
            const totalMl = parseInt(totalMlInput.value) || 10;
            const concentrationType = document.getElementById('concentration-type').value;
            
            console.log("ANALYZING INGREDIENTS LOCALLY");
            console.log("Fragrance Type:", fragranceType);
            console.log("Ingredients:", currentIngredients);
            console.log("Percentages:", ingredientPercentages);
            
            // Calculate scores using local functions
            const fragranceScore = calculateScore(fragranceType, currentIngredients, ingredientPercentages);
            const averageScores = calculateAverageScores(currentIngredients, ingredientPercentages);
            
            // Calculate concentration multiplier
            const concentrationMultipliers = {
                'EDC': 0.6,
                'EDT': 0.8,
                'EDP': 1.0,
                'Parfum': 1.3
            };
            
            const concentrationMultiplier = concentrationMultipliers[concentrationType] || 1.0;
            
            // Apply concentration multiplier to performance scores
            const projectionScore = Math.min(10, averageScores.projection * concentrationMultiplier);
            const longevityScore = Math.min(10, averageScores.longevity * concentrationMultiplier);
            const sillageScore = Math.min(10, averageScores.sillage * concentrationMultiplier);
            
            // Calculate combined score with fragrance type weighted more heavily
            const combinedScore = ((fragranceScore * 2) + projectionScore + longevityScore) / 4;
            
            console.log("SCORE CALCULATION DEBUG:");
            console.log("Fragrance Type Score (0-10):", fragranceScore.toFixed(2));
            console.log("Projection Score (0-10):", projectionScore.toFixed(2));
            console.log("Longevity Score (0-10):", longevityScore.toFixed(2));
            console.log("Sillage Score (0-10):", sillageScore.toFixed(2));
            console.log("Concentration Type:", concentrationType);
            console.log("Combined Score Formula: ((" + fragranceScore.toFixed(2) + " * 2) + " + projectionScore.toFixed(2) + " + " + longevityScore.toFixed(2) + ") / 4");
            console.log("Combined Score:", combinedScore.toFixed(4));
            
            // Debug individual sillage scores
            const sillageScores = getSillageScores();
            currentIngredients.forEach(ingredient => {
                const sillageValue = sillageScores[ingredient] || 5.0;
                console.log(`DEBUG: Ingredient "${ingredient}", Sillage Value: ${sillageValue}, Score: ${sillageValue.toFixed(1)}`);
            });
            
            // Prepare analysis data
            const analysisData = {
                score: combinedScore,
                message: getScoreMessage(fragranceScore),
                avg_projection: projectionScore,
                avg_longevity: longevityScore,
                avg_sillage: sillageScore,
                concentration_type: concentrationType,
                ingredients: currentIngredients,
                ingredient_percentages: ingredientPercentages,
                ingredient_count: currentIngredients.length,
                projection_longevity: {},
                has_deduction: totalPercentage > 100
            };
            
            // Calculate individual ingredient projection/longevity
            currentIngredients.forEach(ingredient => {
                analysisData.projection_longevity[ingredient] = {
                    projection: calculateProjectionScore(ingredient),
                    longevity: calculateLongevityScore(ingredient)
                };
            });
            
            displayResults(analysisData);
            
        } catch (error) {
            console.error("Error during analysis:", error);
            showError("An error occurred during analysis. Please try again.");
        }
    }
    
    /**
     * Display analysis results
     */
    function displayResults(data) {
        console.log("Displaying results:", data);
        
        // Update score display
        scoreDisplay.textContent = data.score.toFixed(1);
        scoreMessage.textContent = data.message;
        
        // Update performance metrics
        projectionScoreDisplay.textContent = data.avg_projection.toFixed(1);
        longevityScoreDisplay.textContent = data.avg_longevity.toFixed(1);
        sillageScoreDisplay.textContent = data.avg_sillage.toFixed(1);
        
        // Display ingredients used
        displayIngredientsUsed(data.ingredients, data.ingredient_percentages);
        
        // Update ingredient details table
        updateIngredientDetailsTable();
        
        // Create radar chart
        createRadarChart(data);
        
        // Show results section
        resultsSection.classList.remove('d-none');
    }
    
    /**
     * Display ingredients used as badges
     */
    function displayIngredientsUsed(ingredients, percentages) {
        ingredientsUsed.innerHTML = '';
        
        ingredients.forEach(ingredient => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-primary me-2 mb-2';
            badge.style.fontSize = '1.1em';
            badge.style.padding = '0.6rem 1rem';
            badge.textContent = `${ingredient} (${percentages[ingredient]}%)`;
            ingredientsUsed.appendChild(badge);
        });
    }
    
    /**
     * Update the ingredient details table
     */
    function updateIngredientDetailsTable() {
        const totalMl = parseInt(totalMlInput.value) || 10;
        ingredientDetailsTable.innerHTML = '';
        
        currentIngredients.forEach(ingredient => {
            const percentage = ingredientPercentages[ingredient] || 0;
            const ml = ((percentage / 100) * totalMl).toFixed(2);
            const projection = calculateProjectionScore(ingredient);
            const longevity = calculateLongevityScore(ingredient);
            const sillage = calculateSillageScore(ingredient);
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sanitizeString(ingredient)}</td>
                <td>${percentage}%</td>
                <td>${ml}</td>
                <td>${projection.toFixed(1)}</td>
                <td>${longevity.toFixed(1)}</td>
                <td>${sillage.toFixed(1)}</td>
            `;
            ingredientDetailsTable.appendChild(row);
        });
    }
    
    /**
     * Create radar chart for fragrance profile
     */
    function createRadarChart(data) {
        console.log("Creating radar chart with data:", data);
        
        const canvas = document.getElementById('fragrance-radar-chart');
        if (!canvas) {
            console.error("Canvas element not found for radar chart");
            return;
        }
        
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error("Chart.js not loaded");
            return;
        }
        
        console.log("Canvas found, Chart.js loaded, proceeding with chart creation");
        
        // Destroy existing chart if it exists
        if (radarChart) {
            radarChart.destroy();
        }
        
        // Calculate fragrance profile from ingredient profiles
        const profiles = getIngredientProfiles();
        console.log("Using ingredient profiles:", Object.keys(profiles).length + " ingredients");
        
        const categoryTotals = {
            citrus: 0, animalic: 0, woody: 0, spicy: 0,
            floral: 0, fruity: 0, sweet: 0, herbal: 0
        };
        
        let totalWeight = 0;
        
        data.ingredients.forEach(ingredient => {
            const percentage = data.ingredient_percentages[ingredient] || 0;
            const weight = percentage / 100;
            const profile = profiles[ingredient];
            
            if (profile) {
                Object.keys(categoryTotals).forEach(category => {
                    const value = profile[category] || 0;
                    categoryTotals[category] += value * weight;
                });
                totalWeight += weight;
            }
        });
        
        // Normalize the totals
        const normalizedProfile = [];
        const labels = ['Citrus', 'Animalic', 'Woody', 'Spicy', 'Floral', 'Fruity', 'Sweet', 'Green'];
        const categories = ['citrus', 'animalic', 'woody', 'spicy', 'floral', 'fruity', 'sweet', 'herbal'];
        
        categories.forEach(category => {
            const normalizedValue = totalWeight > 0 ? categoryTotals[category] / totalWeight : 0;
            normalizedProfile.push(normalizedValue);
        });
        
        // Calculate dynamic maximum for chart scaling
        const maxProfileValue = Math.max(...normalizedProfile);
        const chartMaxValue = Math.max(3, Math.ceil(maxProfileValue * 1.2));
        const stepSize = Math.max(0.5, chartMaxValue / 5);
        
        console.log("Creating Chart.js radar chart with config:", {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Fragrance Profile',
                    data: normalizedProfile,
                    fill: true,
                    backgroundColor: 'rgba(13, 110, 253, 0.2)',
                    borderColor: 'rgba(13, 110, 253, 0.8)',
                    pointBackgroundColor: 'rgba(13, 110, 253, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(13, 110, 253, 1)',
                    borderWidth: 2,
                    pointRadius: 4
                }]
            }
        });
        
        radarChart = new Chart(canvas, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Fragrance Profile',
                    data: normalizedProfile,
                    fill: true,
                    backgroundColor: 'rgba(13, 110, 253, 0.2)',
                    borderColor: 'rgba(13, 110, 253, 0.8)',
                    pointBackgroundColor: 'rgba(13, 110, 253, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(13, 110, 253, 1)',
                    borderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(13, 110, 253, 0.8)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.r.toFixed(1);
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: chartMaxValue,
                        ticks: {
                            stepSize: stepSize,
                            color: '#6c757d',
                            backdropColor: 'transparent',
                            display: false
                        },
                        grid: {
                            color: 'rgba(108, 117, 125, 0.3)'
                        },
                        angleLines: {
                            color: 'rgba(108, 117, 125, 0.3)'
                        },
                        pointLabels: {
                            color: '#f8f9fa',
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
        
        console.log("Radar chart created successfully!");
    }
    
    /**
     * Show error message
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('d-none');
    }
    
    /**
     * Hide error message
     */
    function hideError() {
        errorMessage.classList.add('d-none');
    }
    
    /**
     * Hide results section
     */
    function hideResults() {
        resultsSection.classList.add('d-none');
    }
});