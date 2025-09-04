# Perfume Ingredient Analyzer - Standalone Version 2.0

This is a standalone HTML/CSS/JavaScript version of the Perfume Ingredient Analyzer that can be deployed to GitHub Pages or embedded in websites like Google Sites.

## Features

- **Complete ingredient database** with 154+ fragrance ingredients
- **Three fragrance types**: Summer, Winter, and Date fragrances
- **Scientific scoring system** based on chemical composition
- **Interactive ingredient selection** with number input fields (1-100 range) and validation
- **Dynamic radar chart visualization** showing 8-axis fragrance character analysis with auto-scaling
- **Performance metrics**: Projection, Longevity, and Sillage calculations
- **Dark theme** matching the original Flask application

## File Structure

```
perfume-analyzer-standalone/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Styling and dark theme
├── js/
│   ├── ingredients_data.js # All ingredient data and calculations
│   └── script.js           # Main application logic
└── README.md               # This file
```

## Quick Start

1. **Local Testing**: Open `index.html` in any modern web browser
2. **GitHub Pages**: Upload all files to a GitHub repository and enable Pages
3. **Google Sites**: Upload files to a hosting service and embed via iframe

## Deployment Options

### Option 1: GitHub Pages

1. Create a new GitHub repository
2. Upload all files from `perfume-analyzer-standalone/` to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose "main"
5. Your app will be available at `https://yourusername.github.io/repository-name/`

### Option 2: Google Sites Embedding

Since Google Sites doesn't support direct file uploads, you'll need to:

1. Host the files on GitHub Pages (see Option 1)
2. In Google Sites, insert an embed block
3. Use an iframe with your GitHub Pages URL:
   ```html
   <iframe src="https://yourusername.github.io/repository-name/" 
           width="100%" height="800px" frameborder="0">
   </iframe>
   ```

### Option 3: Direct File Hosting

Upload the files to any web hosting service that supports static files:
- Netlify (drag and drop deployment)
- Vercel
- Firebase Hosting
- Any traditional web hosting provider

## Usage Instructions

1. **Select Fragrance Type**: Choose Summer, Winter, or Date from the dropdown
2. **Enter Ingredients**: Type ingredient names separated by commas
3. **Set Percentages**: Enter percentage values (1-100) in the number input fields
4. **Analyze**: Click "Analyze Ingredients" to get detailed results
5. **View Results**: See scores, performance metrics, and radar chart

### Example Recipes

Click on the fragrance type links in the welcome section to load optimized example recipes:
- **Summer**: Bergamot, Lemon, Marine Notes, Jasmine, Vetiver, White Musk...
- **Winter**: Cinnamon, Amber, Vanilla, Oud, Sandalwood, Tonka Bean...
- **Date**: Rose, Jasmine, Tuberose, Amber, Musk, Patchouli...

## Technical Details

### Data Sources
- **154 ingredients** with detailed descriptions
- **Chemical composition data** for scientific calculations
- **Fragrance type scoring** based on seasonal suitability
- **8-category profile system**: Citrus, Animalic, Woody, Spicy, Floral, Fruity, Sweet, Green

### Calculations
- **Fragrance Type Score**: Compatibility with Summer/Winter/Date preferences
- **Projection**: How well the fragrance projects (based on molecular weight)
- **Longevity**: How long the fragrance lasts (based on chemical structure)
- **Sillage**: The fragrance trail strength (individual ingredient ratings)

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses Bootstrap 5 and Chart.js via CDN

## Customization

### Modifying Ingredients
Edit `js/ingredients_data.js` to:
- Add new ingredients to the `getAllIngredients()` function
- Update scoring in `getSummerScores()`, `getWinterScores()`, `getDateScores()`
- Modify sillage scores in `getSillageScores()`

### Styling Changes
Edit `css/styles.css` to customize:
- Color scheme (currently optimized for dark theme)
- Layout and spacing
- Component styling

### Functional Changes
Edit `js/script.js` to modify:
- Calculation algorithms
- UI behavior
- Chart appearance

## Troubleshooting

### Common Issues

**Ingredients not loading**: Check browser console for JavaScript errors

**Charts not displaying**: Ensure Chart.js CDN is accessible and JavaScript is enabled

**Styling issues**: Verify Bootstrap CDN is loading properly

**Mobile display**: App is responsive but works best on desktop/tablet

## Support

This is a standalone conversion of the Flask-based Perfume Ingredient Analyzer. For technical issues:

1. Check browser developer console for errors
2. Ensure all files are in correct relative paths
3. Verify CDN resources are loading (Bootstrap, Chart.js)
4. Test with a simple HTTP server for local development

## License

This project contains fragrance ingredient data and scoring algorithms for educational and personal use.