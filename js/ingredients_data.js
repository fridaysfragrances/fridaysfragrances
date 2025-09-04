/**
 * Perfume Ingredient Analyzer - Data Module
 * Contains all ingredient data, scoring algorithms, and chemical composition data
 * Converted from Python data structures for standalone client-side operation
 */

// ===== INGREDIENT DATABASE =====
function getAllIngredients() {
    return [
        // Top Notes (59 ingredients)
        ["Aldehydes", "Soapy, airy, effervescent synthetic sparkle."],
        ["Aquatic Accord", "Watery, breezy, ocean-like synthetic freshness."],
        ["Basil", "Herbal, spicy-green, slightly anise-like sharpness."],
        ["Bergamot", "Bright, citrusy, slightly bitter with floral undertones."],
        ["Black Pepper", "Spicy, warm, and woody with a sharp pungency."],
        ["Blue Lotus", "Cool, watery floral with slight anise undertones."],
        ["Bubblegum", "Sweet, fruity, and playful artificial candy scent."],
        ["Camphor", "Medicinal, sharp cooling sensation with mintiness."],
        ["Chamomile", "Sweet, herbal apple-like scent with calming properties."],
        ["Champagne", "Effervescent, bright, slightly yeasty celebration."],
        ["Clary Sage", "Herbaceous, nutty-musky with slight tobacco aspects."],
        ["Coriander", "Warm, spicy-sweet with unusual citrusy freshness."],
        ["Cotton", "Clean, soft, laundry-like fresh powderiness."],
        ["Cotton Candy", "Sweet, airy, spun sugar warmth with vanilla facets."],
        ["Crisp Apple", "Bright, sweet-tart and juicy green freshness."],
        ["Cucumber", "Cool, watery, green and slightly sweet."],
        ["Dew Drops", "Fresh, moist, clean morning garden freshness."],
        ["Elemi", "Fresh, lemony-piney resin with spicy peppery notes."],
        ["Eucalyptus", "Sharp, camphorous, cooling medicinal freshness."],
        ["Frozen Lemon", "Icy, sharp citrus with frosty brilliance."],
        ["Fresh Air", "Crisp, clean, breezy scent of open air."],
        ["Gin", "Juniper-forward, herbaceous with piney depth."],
        ["Ginger", "Spicy, pungent, slightly sweet root freshness."],
        ["Grapefruit", "Bitter, fresh citrus with juicy brightness."],
        ["Green Apple", "Tart, sharp, juicy and intense fruitiness."],
        ["Green Tea", "Earthy, calm, slightly sweet green freshness."],
        ["Ice Accord", "Cool, crystalline, transparent freshness with airy purity."],
        ["Juniper", "Dry, piney, gin-like aromatic with resinous depth."],
        ["Juniper Berry", "Sharp, piney, slightly sweet mountain air."],
        ["Kaffir Lime Leaf", "Intense, vibrant, aromatic citrus leaf zest."],
        ["Lemon", "Sharp, zesty, clean citrus brightness."],
        ["Lime", "Tart, green citrus with sparkling sharpness."],
        ["Linen", "Crisp, breezy fabric scent, freshly laundered."],
        ["Lychee", "Sweet, bright, tropical fruit with subtle rose nuance."],
        ["Mandarin", "Sweet, soft citrus with mild sparkle."],
        ["Marine Notes", "Salty sea breeze with aquatic sharpness."],
        ["Melon", "Watery, sweet, and refreshing fruity crispness."],
        ["Menthol", "Intense, icy-cold, medicinal mint brightness."],
        ["Meyer Lemon", "Sweeter, more floral lemon with subtle mandarin notes."],
        ["Mint", "Fresh, green, icy herbal cooling scent."],
        ["Morning Dew", "Soft, delicate watery freshness of daybreak."],
        ["Mountain Air", "Crisp, airy, green scent of high elevation clarity."],
        ["Ozone", "Electric, sharp, metallic clean air after lightning."],
        ["Orange Blossom", "Bright, floral citrus with honeyed nuance."],
        ["Peppermint", "Cool, sweet mint with herbal bite."],
        ["Petitgrain", "Bitter, green, woody-citrus freshness."],
        ["Pink Grapefruit", "Sweet-tart, bright citrus with juicy sweetness."],
        ["Rain", "Wet, dewy, earthy scent after rainfall."],
        ["Sea Breeze", "Fresh ocean air with salty tang."],
        ["Snow", "Cool, soft, airy scent with icy freshness."],
        ["Starfruit", "Crisp, tart, tropical with green apple notes."],
        ["Tea Leaf", "Dry, herbal, leafy aroma with bitterness."],
        ["Watermelon", "Juicy, fresh, sweet and fruity aroma."],

        // Heart Notes (46 ingredients)
        ["Apple", "Crisp, juicy fruit with clean sweetness."],
        ["Apple Pie", "Warm spiced apple with buttery pastry comfort."],
        ["Blackberry", "Sweet-tart, jammy berry with wild forest undertones."],
        ["Blackcurrant", "Fruity, tart and green with depth."],
        ["Blueberry", "Sweet, subtle, jammy with soft fruity allure."],
        ["Blueberry Pie", "Sweet, baked blueberries with warm vanilla crust."],
        ["Bourbon", "Warm, oaky, slightly sweet with vanilla and caramel."],
        ["Cherry", "Sweet, juicy, slightly tart red fruit fullness."],
        ["Cherry Blossom", "Light, airy floral with subtle sweetness."],
        ["Coconut", "Creamy, tropical, nutty with suntan lotion nostalgia."],
        ["Coffee", "Rich, roasted, slightly bitter comforting warmth."],
        ["Cypress", "Fresh, resinous, evergreen woodsy character."],
        ["Fig", "Green, milky fruit with creamy warmth."],
        ["Frangipani", "Tropical, sweet, exotic white floral creaminess."],
        ["Freesia", "Fruity-floral, light and airy sweetness."],
        ["Gardenia", "Rich, heady white floral with creamy sweetness."],
        ["Geranium", "Green floral with minty, rosy facets."],
        ["Gingerbread", "Warm, spicy-sweet with molasses richness."],
        ["Green Banana", "Fresh, fruity with waxy green peel sharpness."],
        ["Hyacinth", "Green, aquatic floral with strong freshness."],
        ["Iris", "Dry, powdery, buttery floral elegance."],
        ["Jasmine", "Lush, sweet white floral with exotic warmth."],
        ["Lavender", "Clean, herbal floral with calming sharpness."],
        ["Lily", "Fresh, waxy, substantial white floral elegance."],
        ["Lily of the Valley", "Fresh, green floral with delicate sweetness."],
        ["Magnolia", "Lemon-tinged creamy floral with softness."],
        ["Marigold", "Herbaceous, bright, slightly spicy pungent bloom."],
        ["Mimosa", "Warm, sweet floral with honeyed softness."],
        ["Narcissus", "Green-floral with rich, animalic undertones."],
        ["Neroli", "Bitter orange flower, bright and floral."],
        ["Orange", "Sweet, juicy citrus without the bitter zest."],
        ["Orchid", "Exotic, subtle, creamy floral with vanilla softness."],
        ["Peach", "Juicy, velvety fruit with soft sweetness."],
        ["Peony", "Delicate, light floral with fresh greenness."],
        ["Pineapple", "Tropical, juicy fruit with fresh tang."],
        ["Plum", "Sweet, rich fruit with subtle tartness."],
        ["Pomegranate", "Tart, fruity, exotic with subtle berry tannic bite."],
        ["Raspberry", "Sweet, juicy berry with playful brightness."],
        ["Red Apple", "Sweet, juicy, ripe and rounded fruit fullness."],
        ["Rose", "Romantic, rich floral with velvety softness."],
        ["Rum", "Sweet, sugary, slightly woody with molasses depth."],
        ["Strawberry", "Sweet, juicy red fruit with subtle green facets."],
        ["Sunflower", "Light, clean, subtle nuttiness with honey aspects."],
        ["Tiare Flower", "Creamy, exotic, with coconut-like aspects."],
        ["Tuberose", "Creamy, heady white floral with intensity."],
        ["Violet", "Powdery, sweet, candy-like floral scent."],
        ["Ylang-Ylang", "Sweet, exotic, banana-like floral richness."],

        // Base Notes (49 ingredients)
        ["Amber", "Warm, resinous, sweet golden richness."],
        ["Ambergris", "Salty, musky, marine and earthy depth."],
        ["Ambrette", "Musky, sweet with wine-like richness."],
        ["Ambroxan", "Clean, warm, woody amber with no sweetness."],
        ["Anise", "Sweet, spicy, licorice-like aroma with zest."],
        ["Balsam", "Rich, sweet, pine-like with vanilla warmth."],
        ["Benzoin", "Sweet, warm resin with vanilla tone."],
        ["Birch Tar", "Smoky, leathery, creosote-like intensity."],
        ["Black Tea", "Tannic, dry, with slightly smoky sophistication."],
        ["Caramel", "Sweet, burnt sugar richness with buttery warmth."],
        ["Cardamom", "Warm, spicy, slightly sweet herbal edge."],
        ["Cashmere Wood", "Soft, warm, musky wood with coziness."],
        ["Castoreum", "Leathery, animalic, warm with sensual depth."],
        ["Cedarwood", "Dry, sharp, pencil-shaving-like woody aroma."],
        ["Chocolate", "Rich, sweet, cocoa warmth with slight bitterness."],
        ["Chocolate Brownie", "Warm, sweet, gooey chocolate dessert scent."],
        ["Civet", "Animalic, musky, urinous with a strange addictive quality."],
        ["Cinnamon", "Warm, spicy, sweet and slightly woody."],
        ["Cocoa", "Dry, dusty, less sweet dark chocolate intensity."],
        ["Cognac", "Rich, fruity, woody warmth with dried fruits."],
        ["Dark Chocolate", "Bitter, sophisticated cocoa with less sweetness."],
        ["Frankincense", "Resinous, citrusy incense with holy smokiness."],
        ["Hazelnut", "Rich, nutty sweetness with warmth and depth."],
        ["Honey", "Sweet, animalic, floral syrup-like depth."],
        ["Incense", "Smoky, spiritual, resinous, warm aroma."],
        ["Iso E Super", "Velvety, woody, transparent and skin-like."],
        ["Labdanum", "Warm, resinous ambery scent with animalic facets."],
        ["Leather", "Smoky, animalic, rich suede-like aroma."],
        ["Maple Syrup", "Sweet, rich, golden with cozy warmth."],
        ["Milk", "Soft, lactonic, slightly sweet comforting creaminess."],
        ["Moss", "Damp, earthy green with woody softness."],
        ["Musk", "Animalic, warm, skin-like and sensual."],
        ["Myrrh", "Dark, resinous, medicinal with balsamic sweetness."],
        ["Nutmeg", "Warm, spicy, dry and woody."],
        ["Oakmoss", "Earthy, forest-floor, slightly leathery green."],
        ["Oud", "Resinous, smoky, intensely woody aroma."],
        ["Palo Santo", "Sweet, woody, incense-like with minty facets."],
        ["Patchouli", "Earthy, rich, musky with chocolate hints."],
        ["Praline", "Sweet nutty caramelized sugar with hazelnut richness."],
        ["Rosewood", "Floral, woody, slightly spicy with rose overtones."],
        ["Saffron", "Warm, leathery, spicy with sweet twist."],
        ["Sandalwood", "Creamy, soft, sweet woody richness."],
        ["Smoked Vanilla", "Sweet, smoky, caramelized depth with campfire notes."],
        ["Styrax", "Spicy, sweet, incense-like with balsamic qualities."],
        ["Suede", "Soft, warm animal skin with velvety texture."],
        ["Toffee", "Rich, buttery, caramelized sweetness with richness."],
        ["Tonka Bean", "Sweet, nutty, almond-like with vanilla tones."],
        ["Tobacco", "Sweet, dry, earthy leaf with warmth."],
        ["Vanilla", "Warm, sweet, creamy comforting richness."],
        ["Vetiver", "Earthy, smoky grass with dry sharpness."],
        ["White Musk", "Clean, soft, slightly powdery skin scent."]
    ];
}

// ===== FRAGRANCE TYPE SCORING INDEXES =====
function getSummerScores() {
    return {
        // Top Notes
        "Aldehydes": 8.000,
        "Aquatic Accord": 9.000,
        "Basil": 7.500,
        "bergamot": 9.200,
        "Bergamot": 9.200,
        "Black Pepper": 6.500,
        "Blue Lotus": 8.500,
        "Bubblegum": 7.000,
        "Camphor": 7.500,
        "Chamomile": 8.000,
        "Champagne": 9.000,
        "Coriander": 7.500,
        "Cotton": 8.500,
        "Cotton Candy": 6.500,
        "Crisp Apple": 8.500,
        "Cucumber": 9.000,
        "Dew Drops": 9.500,
        "Eucalyptus": 7.000,
        "Frozen Lemon": 9.500,
        "Fresh Air": 10.000,
        "Gin": 8.000,
        "Ginger": 7.500,
        "Grapefruit": 9.000,
        "Green Apple": 8.800,
        "Green Tea": 9.000,
        "Ice Accord": 9.500,
        "Juniper": 7.000,
        "Juniper Berry": 7.500,
        "Kaffir Lime Leaf": 9.000,
        "Lemon": 9.000,
        "Lime": 9.000,
        "Linen": 8.500,
        "Lychee": 8.500,
        "Mandarin": 9.000,
        "Marine Notes": 9.500,
        "Melon": 9.200,
        "Menthol": 8.500,
        "Meyer Lemon": 9.000,
        "Mint": 9.000,
        "Morning Dew": 9.500,
        "Mountain Air": 9.800,
        "Ozone": 9.000,
        "Orange Blossom": 8.000,
        "Peppermint": 8.500,
        "Petitgrain": 8.000,
        "Pink Grapefruit": 9.200,
        "Rain": 9.500,
        "Sea Breeze": 9.500,
        "Snow": 6.000,
        "Starfruit": 9.000,
        "Tea Leaf": 7.000,
        "Watermelon": 9.000,
        
        // Heart Notes
        "Apple": 8.500,
        "Apple Pie": 5.500,
        "Blackberry": 8.000,
        "Blackcurrant": 8.000,
        "Blueberry": 8.000,
        "Blueberry Pie": 5.000,
        "Bourbon": 4.000,
        "Cherry": 7.500,
        "Cherry Blossom": 9.000,
        "Coconut": 8.000,
        "Coffee": 4.000,
        "Cypress": 8.000,
        "Fig": 8.000,
        "Frangipani": 8.500,
        "Freesia": 8.500,
        "Gardenia": 8.000,
        "Geranium": 7.500,
        "Gingerbread": 4.000,
        "Green Banana": 7.500,
        "Hyacinth": 8.000,
        "Iris": 7.000,
        "Jasmine": 8.500,
        "Lavender": 8.500,
        "Lily": 8.500,
        "Lily of the Valley": 9.000,
        "Magnolia": 8.500,
        "Marigold": 7.500,
        "Mimosa": 7.500,
        "Narcissus": 7.500,
        "Neroli": 9.000,
        "Orange": 9.200,
        "Orchid": 8.000,
        "Peach": 9.000,
        "Peony": 8.500,
        "Pineapple": 9.000,
        "Plum": 7.000,
        "Pomegranate": 8.000,
        "Raspberry": 8.000,
        "Red Apple": 8.500,
        "Rose": 8.500,
        "Rum": 5.000,
        "Strawberry": 8.500,
        "Sunflower": 8.000,
        "Tiare Flower": 8.500,
        "Tuberose": 7.000,
        "Violet": 7.500,
        "Ylang-Ylang": 7.000,
        
        // Base Notes
        "Amber": 5.000,
        "Ambergris": 9.000,
        "Ambrette": 7.000,
        "Ambroxan": 7.500,
        "Anise": 6.500,
        "Balsam": 5.500,
        "Benzoin": 4.500,
        "Birch Tar": 3.000,
        "Black Tea": 7.000,
        "Caramel": 4.000,
        "Cardamom": 7.000,
        "Cashmere Wood": 5.000,
        "Castoreum": 4.000,
        "Cedarwood": 7.500,
        "Chocolate": 3.000,
        "Chocolate Brownie": 2.500,
        "Civet": 3.000,
        "Cinnamon": 4.000,
        "Cocoa": 3.000,
        "Cognac": 3.500,
        "Dark Chocolate": 2.500,
        "Frankincense": 6.500,
        "Hazelnut": 4.500,
        "Honey": 3.500,
        "Incense": 5.000,
        "Iso E Super": 8.000,
        "Labdanum": 5.000,
        "Leather": 3.000,
        "Maple Syrup": 4.000,
        "Milk": 5.000,
        "Moss": 7.000,
        "Musk": 6.500,
        "Myrrh": 5.000,
        "Nutmeg": 4.500,
        "Oakmoss": 6.500,
        "Oud": 2.000,
        "Palo Santo": 5.500,
        "Patchouli": 4.500,
        "Praline": 3.500,
        "Rosewood": 7.000,
        "Saffron": 7.000,
        "Sandalwood": 6.000,
        "Smoked Vanilla": 4.000,
        "Styrax": 5.000,
        "Suede": 4.000,
        "Toffee": 3.500,
        "Tonka Bean": 3.500,
        "Tobacco": 3.000,
        "Vanilla": 5.500,
        "Vetiver": 7.500,
        "White Musk": 8.000
    };
}

function getWinterScores() {
    return {
        // Top Notes
        "Aldehydes": 5.000,
        "Aquatic Accord": 3.000,
        "Basil": 4.500,
        "bergamot": 4.200,
        "Bergamot": 4.200,
        "Black Pepper": 8.500,
        "Blue Lotus": 5.000,
        "Bubblegum": 3.000,
        "Camphor": 7.000,
        "Chamomile": 5.500,
        "Champagne": 5.000,
        "Coriander": 7.000,
        "Cotton": 3.500,
        "Cotton Candy": 3.000,
        "Crisp Apple": 5.000,
        "Cucumber": 3.000,
        "Dew Drops": 3.500,
        "Eucalyptus": 5.500,
        "Frozen Lemon": 4.500,
        "Fresh Air": 3.000,
        "Gin": 7.000,
        "Ginger": 8.000,
        "Grapefruit": 4.000,
        "Green Apple": 4.000,
        "Green Tea": 4.500,
        "Ice Accord": 6.000,
        "Juniper": 7.500,
        "Juniper Berry": 8.000,
        "Kaffir Lime Leaf": 5.000,
        "Lemon": 3.500,
        "Lime": 3.000,
        "Linen": 3.500,
        "Lychee": 4.000,
        "Mandarin": 4.000,
        "Marine Notes": 2.500,
        "Melon": 3.500,
        "Menthol": 6.500,
        "Meyer Lemon": 4.000,
        "Mint": 5.000,
        "Morning Dew": 3.000,
        "Mountain Air": 4.000,
        "Ozone": 5.000,
        "Orange Blossom": 6.000,
        "Peppermint": 6.000,
        "Petitgrain": 5.000,
        "Pink Grapefruit": 4.000,
        "Rain": 3.000,
        "Sea Breeze": 2.500,
        "Snow": 5.500,
        "Starfruit": 3.500,
        "Tea Leaf": 4.500,
        "Watermelon": 2.500,
        
        // Heart Notes
        "Apple": 6.000,
        "Apple Pie": 9.500,
        "Blackberry": 6.500,
        "Blackcurrant": 6.500,
        "Blueberry": 6.500,
        "Blueberry Pie": 9.500,
        "Bourbon": 9.000,
        "Cherry": 6.000,
        "Cherry Blossom": 5.000,
        "Coconut": 4.500,
        "Coffee": 9.500,
        "Cypress": 6.500,
        "Fig": 7.000,
        "Frangipani": 5.000,
        "Freesia": 4.500,
        "Gardenia": 6.000,
        "Geranium": 5.500,
        "Gingerbread": 9.500,
        "Green Banana": 3.000,
        "Hyacinth": 4.000,
        "Iris": 7.500,
        "Jasmine": 7.000,
        "Lavender": 7.000,
        "Lily": 5.000,
        "Lily of the Valley": 4.500,
        "Magnolia": 5.000,
        "Marigold": 5.500,
        "Mimosa": 5.000,
        "Narcissus": 5.500,
        "Neroli": 5.500,
        "Orange": 5.000,
        "Orchid": 6.500,
        "Peach": 5.500,
        "Peony": 4.500,
        "Pineapple": 5.000,
        "Plum": 7.500,
        "Pomegranate": 6.500,
        "Raspberry": 6.000,
        "Red Apple": 6.500,
        "Rose": 7.500,
        "Rum": 9.000,
        "Strawberry": 5.500,
        "Sunflower": 4.500,
        "Tiare Flower": 5.000,
        "Tuberose": 6.000,
        "Violet": 6.500,
        "Ylang-Ylang": 6.500,
        
        // Base Notes
        "Amber": 9.500,
        "Ambergris": 8.000,
        "Ambrette": 8.000,
        "Ambroxan": 8.500,
        "Anise": 6.500,
        "Balsam": 9.000,
        "Benzoin": 9.000,
        "Birch Tar": 9.500,
        "Black Tea": 9.000,
        "Caramel": 9.000,
        "Cardamom": 8.000,
        "Cashmere Wood": 8.500,
        "Castoreum": 9.500,
        "Cedarwood": 7.000,
        "Chocolate": 9.000,
        "Chocolate Brownie": 9.500,
        "Civet": 8.500,
        "Cinnamon": 9.000,
        "Cocoa": 9.500,
        "Cognac": 9.500,
        "Dark Chocolate": 10.000,
        "Frankincense": 9.000,
        "Hazelnut": 9.000,
        "Honey": 8.500,
        "Incense": 9.000,
        "Iso E Super": 8.000,
        "Labdanum": 9.000,
        "Leather": 9.000,
        "Maple Syrup": 9.000,
        "Milk": 7.500,
        "Moss": 7.500,
        "Musk": 8.000,
        "Myrrh": 9.000,
        "Nutmeg": 8.500,
        "Oakmoss": 8.000,
        "Oud": 10.000,
        "Palo Santo": 9.000,
        "Patchouli": 9.000,
        "Praline": 9.500,
        "Rosewood": 8.000,
        "Saffron": 8.500,
        "Sandalwood": 8.500,
        "Smoked Vanilla": 9.500,
        "Styrax": 9.000,
        "Suede": 9.000,
        "Toffee": 9.500,
        "Tonka Bean": 9.000,
        "Tobacco": 9.000,
        "Vanilla": 9.500,
        "Vetiver": 8.000,
        "White Musk": 7.000
    };
}

function getDateScores() {
    return {
        // Top Notes
        "Aldehydes": 7.300,
        "Aquatic Accord": 4.000,
        "Basil": 6.000,
        "bergamot": 6.800,
        "Bergamot": 6.800,
        "Black Pepper": 8.000,
        "Blue Lotus": 7.500,
        "Bubblegum": 3.500,
        "Camphor": 5.000,
        "Chamomile": 6.500,
        "Champagne": 8.000,
        "Coriander": 7.000,
        "Cotton": 4.000,
        "Cotton Candy": 4.000,
        "Crisp Apple": 5.000,
        "Cucumber": 3.500,
        "Dew Drops": 4.500,
        "Eucalyptus": 4.500,
        "Frozen Lemon": 5.000,
        "Fresh Air": 3.000,
        "Gin": 8.000,
        "Ginger": 8.000,
        "Grapefruit": 5.000,
        "Green Apple": 5.500,
        "Green Tea": 5.000,
        "Ice Accord": 5.000,
        "Juniper": 6.500,
        "Juniper Berry": 7.500,
        "Kaffir Lime Leaf": 6.000,
        "Lemon": 4.500,
        "Lime": 4.000,
        "Linen": 4.000,
        "Lychee": 7.000,
        "Mandarin": 6.000,
        "Marine Notes": 3.500,
        "Melon": 5.000,
        "Menthol": 5.500,
        "Meyer Lemon": 5.500,
        "Mint": 5.500,
        "Morning Dew": 5.000,
        "Mountain Air": 4.000,
        "Ozone": 5.000,
        "Orange Blossom": 7.500,
        "Peppermint": 6.000,
        "Petitgrain": 7.000,
        "Pink Grapefruit": 5.500,
        "Rain": 4.000,
        "Sea Breeze": 3.500,
        "Snow": 3.500,
        "Starfruit": 5.500,
        "Tea Leaf": 5.000,
        "Watermelon": 3.500,
        
        // Heart Notes
        "Apple": 5.000,
        "Apple Pie": 7.500,
        "Blackberry": 7.000,
        "Blackcurrant": 7.000,
        "Blueberry": 7.000,
        "Blueberry Pie": 7.000,
        "Bourbon": 8.000,
        "Cherry": 7.500,
        "Cherry Blossom": 7.000,
        "Coconut": 7.000,
        "Coffee": 7.500,
        "Cypress": 7.000,
        "Fig": 9.000,
        "Frangipani": 8.500,
        "Freesia": 7.500,
        "Gardenia": 8.500,
        "Geranium": 7.000,
        "Gingerbread": 7.000,
        "Green Banana": 4.000,
        "Hyacinth": 6.500,
        "Iris": 8.000,
        "Jasmine": 9.200,
        "Lavender": 8.000,
        "Lily": 7.500,
        "Lily of the Valley": 7.000,
        "Magnolia": 7.500,
        "Marigold": 6.000,
        "Mimosa": 6.000,
        "Narcissus": 6.500,
        "Neroli": 8.000,
        "Orange": 6.500,
        "Orchid": 8.000,
        "Peach": 7.000,
        "Peony": 7.000,
        "Pineapple": 7.000,
        "Plum": 8.500,
        "Pomegranate": 7.500,
        "Raspberry": 7.500,
        "Red Apple": 6.000,
        "Rose": 9.000,
        "Rum": 7.000,
        "Strawberry": 7.000,
        "Sunflower": 5.500,
        "Tiare Flower": 8.000,
        "Tuberose": 8.500,
        "Violet": 7.000,
        "Ylang-Ylang": 9.000,
        
        // Base Notes
        "Amber": 9.200,
        "Ambergris": 8.000,
        "Ambrette": 8.500,
        "Ambroxan": 8.000,
        "Anise": 5.500,
        "Balsam": 8.000,
        "Benzoin": 8.500,
        "Birch Tar": 7.500,
        "Black Tea": 7.000,
        "Caramel": 8.000,
        "Cardamom": 8.000,
        "Cashmere Wood": 8.200,
        "Castoreum": 9.000,
        "Cedarwood": 7.500,
        "Chocolate": 9.000,
        "Chocolate Brownie": 9.500,
        "Civet": 9.000,
        "Cinnamon": 9.000,
        "Cocoa": 9.000,
        "Cognac": 8.500,
        "Dark Chocolate": 9.500,
        "Frankincense": 9.000,
        "Hazelnut": 8.000,
        "Honey": 8.500,
        "Incense": 8.500,
        "Iso E Super": 8.000,
        "Labdanum": 8.000,
        "Leather": 9.500,
        "Maple Syrup": 7.500,
        "Milk": 6.500,
        "Moss": 7.000,
        "Musk": 9.000,
        "Myrrh": 9.000,
        "Nutmeg": 8.000,
        "Oakmoss": 7.500,
        "Oud": 9.500,
        "Palo Santo": 8.000,
        "Patchouli": 8.000,
        "Praline": 8.500,
        "Rosewood": 8.000,
        "Saffron": 8.200,
        "Sandalwood": 8.000,
        "Smoked Vanilla": 8.500,
        "Styrax": 8.000,
        "Suede": 9.000,
        "Toffee": 8.000,
        "Tonka Bean": 9.000,
        "Tobacco": 9.000,
        "Vanilla": 9.000,
        "Vetiver": 8.000,
        "White Musk": 8.000
    };
}

// ===== CHEMICAL COMPOSITION DATABASE =====
function getAromachemicalData() {
    return {
        // Top Notes
        "Aldehydes": {
            "primary_aromachemical": "C12 Aldehyde",
            "carbon": 12, "hydrogen": 24, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Aquatic Accord": {
            "primary_aromachemical": "Calone",
            "carbon": 12, "hydrogen": 16, "oxygen": 3, "nitrogen": 0, "sulfur": 0
        },
        "Basil": {
            "primary_aromachemical": "Linalool",
            "carbon": 10, "hydrogen": 18, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Bergamot": {
            "primary_aromachemical": "Linalyl acetate",
            "carbon": 12, "hydrogen": 20, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Black Pepper": {
            "primary_aromachemical": "Piperine",
            "carbon": 17, "hydrogen": 19, "oxygen": 3, "nitrogen": 1, "sulfur": 0
        },
        "Blue Lotus": {
            "primary_aromachemical": "Linalool",
            "carbon": 10, "hydrogen": 18, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Bubblegum": {
            "primary_aromachemical": "Ethyl butyrate",
            "carbon": 6, "hydrogen": 12, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Camphor": {
            "primary_aromachemical": "Camphor",
            "carbon": 10, "hydrogen": 16, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Chamomile": {
            "primary_aromachemical": "Chamazulene",
            "carbon": 14, "hydrogen": 16, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Champagne": {
            "primary_aromachemical": "Ethyl acetate",
            "carbon": 4, "hydrogen": 8, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Coriander": {
            "primary_aromachemical": "Linalool",
            "carbon": 10, "hydrogen": 18, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Cotton": {
            "primary_aromachemical": "Galaxolide",
            "carbon": 18, "hydrogen": 26, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Cotton Candy": {
            "primary_aromachemical": "Ethyl maltol",
            "carbon": 8, "hydrogen": 10, "oxygen": 3, "nitrogen": 0, "sulfur": 0
        },
        "Crisp Apple": {
            "primary_aromachemical": "Hexyl acetate",
            "carbon": 8, "hydrogen": 16, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Cucumber": {
            "primary_aromachemical": "2,6-Nonadienal",
            "carbon": 9, "hydrogen": 14, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Dew Drops": {
            "primary_aromachemical": "Cyclic aliphatic aldehydes",
            "carbon": 8, "hydrogen": 14, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Eucalyptus": {
            "primary_aromachemical": "1,8-Cineole",
            "carbon": 10, "hydrogen": 18, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Frozen Lemon": {
            "primary_aromachemical": "Limonene",
            "carbon": 10, "hydrogen": 16, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Fresh Air": {
            "primary_aromachemical": "Dihydromyrcenol",
            "carbon": 10, "hydrogen": 20, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Gin": {
            "primary_aromachemical": "Alpha-pinene",
            "carbon": 10, "hydrogen": 16, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Ginger": {
            "primary_aromachemical": "Zingiberene",
            "carbon": 15, "hydrogen": 24, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Grapefruit": {
            "primary_aromachemical": "Nootkatone",
            "carbon": 15, "hydrogen": 22, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Green Apple": {
            "primary_aromachemical": "Hexyl acetate",
            "carbon": 8, "hydrogen": 16, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Green Tea": {
            "primary_aromachemical": "Linalool",
            "carbon": 10, "hydrogen": 18, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Ice Accord": {
            "primary_aromachemical": "Menthol",
            "carbon": 10, "hydrogen": 20, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        
        // Heart Notes
        "Jasmine": {
            "primary_aromachemical": "Benzyl acetate",
            "carbon": 9, "hydrogen": 10, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Lavender": {
            "primary_aromachemical": "Linalyl acetate",
            "carbon": 12, "hydrogen": 20, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Rose": {
            "primary_aromachemical": "Phenethyl alcohol",
            "carbon": 8, "hydrogen": 10, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Vanilla": {
            "primary_aromachemical": "Vanillin",
            "carbon": 8, "hydrogen": 8, "oxygen": 3, "nitrogen": 0, "sulfur": 0
        },
        
        // Base Notes
        "Amber": {
            "primary_aromachemical": "Ambroxan",
            "carbon": 16, "hydrogen": 28, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Sandalwood": {
            "primary_aromachemical": "Santalol",
            "carbon": 15, "hydrogen": 24, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Patchouli": {
            "primary_aromachemical": "Patchoulol",
            "carbon": 15, "hydrogen": 26, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        },
        "Musk": {
            "primary_aromachemical": "Galaxolide",
            "carbon": 18, "hydrogen": 26, "oxygen": 0, "nitrogen": 0, "sulfur": 0
        },
        "Oud": {
            "primary_aromachemical": "Gyrinol",
            "carbon": 20, "hydrogen": 32, "oxygen": 2, "nitrogen": 0, "sulfur": 0
        },
        "Vetiver": {
            "primary_aromachemical": "Khusimol",
            "carbon": 15, "hydrogen": 24, "oxygen": 1, "nitrogen": 0, "sulfur": 0
        }
    };
}

// ===== SILLAGE SCORES =====
function getSillageScores() {
    return {
        "Aldehydes": 8.5,
        "Aquatic Accord": 6.0,
        "Basil": 7.5,
        "Bergamot": 7.0,
        "Black Pepper": 8.0,
        "Blue Lotus": 5.5,
        "Bubblegum": 6.5,
        "Camphor": 9.0,
        "Chamomile": 4.5,
        "Champagne": 5.0,
        "Clary Sage": 6.5,
        "Coriander": 7.0,
        "Cotton": 3.5,
        "Cotton Candy": 5.5,
        "Crisp Apple": 6.0,
        "Apple": 6.0,
        "Cucumber": 4.0,
        "Elemi": 6.5,
        "Fig": 6.5,
        "Green Tea": 5.0,
        "Ginger": 7.5,
        "Grapefruit": 7.5,
        "Juniper": 7.5,
        "Juniper Berry": 7.0,
        "Lemon": 8.0,
        "Lime": 7.8,
        "Mandarin": 6.5,
        "Marine Notes": 8.5,
        "Mint": 8.5,
        "Neroli": 7.5,
        "Orange": 6.8,
        "Oregano": 8.0,
        "Ozonic Notes": 7.0,
        "Peach": 6.0,
        "Pear": 5.5,
        "Peppermint": 9.0,
        "Petitgrain": 7.0,
        "Pink Grapefruit": 7.0,
        "Pomelo": 6.5,
        "Raspberry": 5.5,
        "Rhubarb": 6.0,
        "Sage": 7.5,
        "Sea Salt": 6.5,
        "Spearmint": 8.0,
        "Tarragon": 6.5,
        "Thyme": 7.8,
        "Tomato Leaf": 7.0,
        "Violet Leaf": 6.0,
        "Watery Notes": 4.5,
        "White Wine": 5.0,
        "Yuzu": 7.5,
        "Zest": 8.5,
        "Coconut": 6.0,
        "Ambrette": 7.5,
        "Almond": 5.5,
        "Apple Blossom": 4.5,
        "Beeswax": 5.0,
        "Buttered Rum": 7.0,
        "Cappuccino": 6.5,
        "Cardamom": 8.0,
        "Carnation": 7.5,
        "Cherry Blossom": 4.0,
        "Cinnamon": 8.5,
        "Clove": 9.0,
        "Cocoa": 7.0,
        "Coffee": 7.5,
        "Cumin": 9.5,
        "Curry Leaf": 8.5,
        "Dill": 7.0,
        "Eucalyptus": 9.0,
        "Fennel": 7.5,
        "Freesia": 5.5,
        "Gardenia": 7.0,
        "Geranium": 7.5,
        "Green Apple": 6.5,
        "Heliotrope": 6.0,
        "Honey": 6.5,
        "Hyacinth": 6.0,
        "Iris": 5.5,
        "Jasmine": 8.0,
        "Lavender": 7.0,
        "Leather": 8.5,
        "Lilac": 6.5,
        "Lily": 7.0,
        "Lily of the Valley": 5.0,
        "Linden": 5.5,
        "Magnolia": 6.0,
        "Melon": 5.5,
        "Mimosa": 6.5,
        "Nutmeg": 8.0,
        "Orange Blossom": 7.5,
        "Osmanthus": 7.0,
        "Paprika": 8.5,
        "Peony": 5.0,
        "Pine": 8.5,
        "Plum": 6.0,
        "Rose": 7.5,
        "Rosemary": 8.0,
        "Saffron": 9.0,
        "Star Anise": 8.5,
        "Strawberry": 5.5,
        "Tuberose": 9.5,
        "Vanilla": 7.0,
        "Violet": 5.5,
        "White Tea": 4.5,
        "Wisteria": 5.5,
        "Ylang Ylang": 8.5,
        "Amber": 8.5,
        "Ambergris": 9.0,
        "Angelica": 7.5,
        "Benzoin": 7.5,
        "Birch": 8.0,
        "Cedarwood": 8.5,
        "Coumarin": 7.0,
        "Frankincense": 8.5,
        "Labdanum": 8.0,
        "Moss": 7.5,
        "Musk": 8.0,
        "Myrrh": 8.5,
        "Oakmoss": 8.5,
        "Oud": 9.5,
        "Patchouli": 9.0,
        "Suede": 7.5,
        "Sandalwood": 8.0,
        "Smoke": 9.0,
        "Tobacco": 8.5,
        "Tonka Bean": 7.5,
        "Vanilla Bean": 7.0,
        "Vetiver": 8.0,
        "White Musk": 6.5,
        "Wood": 7.5
    };
}

// ===== INGREDIENT PROFILES (8-category fragrance profiles) =====
function getIngredientProfiles() {
    return {
        "Aldehydes": { spicy: 0, woody: 0, fruity: 1, floral: 2, sweet: 1, citrus: 3, animalic: 0, herbal: 0 },
        "Aquatic Accord": { spicy: 0, woody: 0, fruity: 0, floral: 0, sweet: 0, citrus: 2, animalic: 0, herbal: 1 },
        "Basil": { spicy: 2, woody: 0, fruity: 0, floral: 0, sweet: 0, citrus: 1, animalic: 0, herbal: 9 },
        "Bergamot": { spicy: 0, woody: 0, fruity: 2, floral: 1, sweet: 1, citrus: 9, animalic: 0, herbal: 0 },
        "Black Pepper": { spicy: 9, woody: 1, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 0, herbal: 1 },
        "Blue Lotus": { spicy: 0, woody: 0, fruity: 0, floral: 8, sweet: 2, citrus: 0, animalic: 0, herbal: 1 },
        "Bubblegum": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 10, citrus: 1, animalic: 0, herbal: 0 },
        "Camphor": { spicy: 1, woody: 0, fruity: 0, floral: 0, sweet: 0, citrus: 2, animalic: 0, herbal: 8 },
        "Chamomile": { spicy: 0, woody: 0, fruity: 1, floral: 3, sweet: 2, citrus: 0, animalic: 0, herbal: 7 },
        "Champagne": { spicy: 0, woody: 0, fruity: 3, floral: 1, sweet: 3, citrus: 4, animalic: 0, herbal: 0 },
        "Coriander": { spicy: 6, woody: 0, fruity: 1, floral: 0, sweet: 1, citrus: 2, animalic: 0, herbal: 3 },
        "Cotton": { spicy: 0, woody: 0, fruity: 0, floral: 1, sweet: 2, citrus: 0, animalic: 0, herbal: 0 },
        "Cotton Candy": { spicy: 0, woody: 0, fruity: 2, floral: 0, sweet: 10, citrus: 0, animalic: 0, herbal: 0 },
        "Crisp Apple": { spicy: 0, woody: 0, fruity: 9, floral: 0, sweet: 4, citrus: 2, animalic: 0, herbal: 0 },
        "Cucumber": { spicy: 0, woody: 0, fruity: 2, floral: 0, sweet: 1, citrus: 1, animalic: 0, herbal: 3 },
        "Fig": { spicy: 0, woody: 1, fruity: 7, floral: 1, sweet: 6, citrus: 0, animalic: 0, herbal: 2 },
        "Green Tea": { spicy: 0, woody: 0, fruity: 0, floral: 1, sweet: 1, citrus: 2, animalic: 0, herbal: 8 },
        "Ginger": { spicy: 8, woody: 0, fruity: 1, floral: 0, sweet: 1, citrus: 3, animalic: 0, herbal: 2 },
        "Grapefruit": { spicy: 0, woody: 0, fruity: 3, floral: 0, sweet: 2, citrus: 9, animalic: 0, herbal: 0 },
        "Juniper Berry": { spicy: 2, woody: 7, fruity: 0, floral: 0, sweet: 0, citrus: 1, animalic: 0, herbal: 5 },
        "Lemon": { spicy: 0, woody: 0, fruity: 1, floral: 0, sweet: 1, citrus: 10, animalic: 0, herbal: 0 },
        "Lime": { spicy: 0, woody: 0, fruity: 2, floral: 0, sweet: 1, citrus: 9, animalic: 0, herbal: 0 },
        "Mandarin": { spicy: 0, woody: 0, fruity: 4, floral: 1, sweet: 3, citrus: 8, animalic: 0, herbal: 0 },
        "Marine Notes": { spicy: 0, woody: 0, fruity: 0, floral: 0, sweet: 0, citrus: 3, animalic: 1, herbal: 2 },
        "Mint": { spicy: 1, woody: 0, fruity: 0, floral: 0, sweet: 1, citrus: 3, animalic: 0, herbal: 9 },
        "Neroli": { spicy: 0, woody: 0, fruity: 2, floral: 8, sweet: 2, citrus: 4, animalic: 0, herbal: 0 },
        "Orange": { spicy: 0, woody: 0, fruity: 6, floral: 1, sweet: 4, citrus: 8, animalic: 0, herbal: 0 },
        "Peach": { spicy: 0, woody: 0, fruity: 9, floral: 1, sweet: 6, citrus: 1, animalic: 0, herbal: 0 },
        "Pink Grapefruit": { spicy: 0, woody: 0, fruity: 4, floral: 0, sweet: 3, citrus: 9, animalic: 0, herbal: 0 },
        "Apple": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 4, citrus: 2, animalic: 0, herbal: 0 },
        "Blackberry": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 5, citrus: 0, animalic: 0, herbal: 1 },
        "Blackcurrant": { spicy: 0, woody: 0, fruity: 7, floral: 0, sweet: 2, citrus: 1, animalic: 0, herbal: 3 },
        "Blueberry": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 5, citrus: 0, animalic: 0, herbal: 0 },
        "Cherry": { spicy: 0, woody: 0, fruity: 9, floral: 0, sweet: 6, citrus: 0, animalic: 0, herbal: 0 },
        "Coconut": { spicy: 0, woody: 1, fruity: 2, floral: 1, sweet: 8, citrus: 0, animalic: 0, herbal: 0 },
        "Coffee": { spicy: 1, woody: 2, fruity: 0, floral: 0, sweet: 4, citrus: 0, animalic: 0, herbal: 0 },
        "Freesia": { spicy: 0, woody: 0, fruity: 2, floral: 7, sweet: 3, citrus: 1, animalic: 0, herbal: 0 },
        "Gardenia": { spicy: 0, woody: 0, fruity: 1, floral: 9, sweet: 4, citrus: 0, animalic: 0, herbal: 0 },
        "Geranium": { spicy: 1, woody: 0, fruity: 1, floral: 6, sweet: 1, citrus: 2, animalic: 0, herbal: 4 },
        "Hyacinth": { spicy: 0, woody: 0, fruity: 1, floral: 7, sweet: 2, citrus: 1, animalic: 0, herbal: 2 },
        "Iris": { spicy: 0, woody: 1, fruity: 0, floral: 6, sweet: 1, citrus: 0, animalic: 0, herbal: 1 },
        "Jasmine": { spicy: 0, woody: 0, fruity: 1, floral: 10, sweet: 3, citrus: 0, animalic: 1, herbal: 0 },
        "Lavender": { spicy: 0, woody: 0, fruity: 0, floral: 5, sweet: 1, citrus: 1, animalic: 0, herbal: 8 },
        "Lily": { spicy: 0, woody: 0, fruity: 0, floral: 8, sweet: 2, citrus: 0, animalic: 0, herbal: 1 },
        "Lily of the Valley": { spicy: 0, woody: 0, fruity: 0, floral: 7, sweet: 2, citrus: 0, animalic: 0, herbal: 2 },
        "Magnolia": { spicy: 0, woody: 0, fruity: 1, floral: 8, sweet: 3, citrus: 1, animalic: 0, herbal: 0 },
        "Melon": { spicy: 0, woody: 0, fruity: 7, floral: 0, sweet: 4, citrus: 1, animalic: 0, herbal: 0 },
        "Mimosa": { spicy: 0, woody: 1, fruity: 1, floral: 6, sweet: 4, citrus: 0, animalic: 0, herbal: 1 },
        "Orange Blossom": { spicy: 0, woody: 0, fruity: 2, floral: 8, sweet: 3, citrus: 3, animalic: 0, herbal: 0 },
        "Orchid": { spicy: 0, woody: 0, fruity: 1, floral: 7, sweet: 4, citrus: 0, animalic: 0, herbal: 0 },
        "Peony": { spicy: 0, woody: 0, fruity: 1, floral: 6, sweet: 2, citrus: 0, animalic: 0, herbal: 1 },
        "Pineapple": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 5, citrus: 2, animalic: 0, herbal: 0 },
        "Plum": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 6, citrus: 0, animalic: 0, herbal: 0 },
        "Pomegranate": { spicy: 0, woody: 0, fruity: 7, floral: 0, sweet: 4, citrus: 1, animalic: 0, herbal: 0 },
        "Raspberry": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 6, citrus: 0, animalic: 0, herbal: 0 },
        "Rose": { spicy: 0, woody: 0, fruity: 1, floral: 10, sweet: 3, citrus: 0, animalic: 0, herbal: 0 },
        "Strawberry": { spicy: 0, woody: 0, fruity: 8, floral: 0, sweet: 7, citrus: 0, animalic: 0, herbal: 1 },
        "Tuberose": { spicy: 0, woody: 0, fruity: 0, floral: 9, sweet: 2, citrus: 0, animalic: 2, herbal: 0 },
        "Violet": { spicy: 0, woody: 0, fruity: 1, floral: 6, sweet: 5, citrus: 0, animalic: 0, herbal: 0 },
        "Ylang Ylang": { spicy: 0, woody: 0, fruity: 2, floral: 8, sweet: 3, citrus: 0, animalic: 1, herbal: 0 },
        "Amber": { spicy: 1, woody: 4, fruity: 0, floral: 0, sweet: 6, citrus: 0, animalic: 2, herbal: 0 },
        "Ambergris": { spicy: 0, woody: 2, fruity: 0, floral: 0, sweet: 1, citrus: 0, animalic: 8, herbal: 0 },
        "Benzoin": { spicy: 1, woody: 2, fruity: 0, floral: 0, sweet: 7, citrus: 0, animalic: 0, herbal: 0 },
        "Cardamom": { spicy: 8, woody: 1, fruity: 0, floral: 0, sweet: 2, citrus: 1, animalic: 0, herbal: 2 },
        "Cedarwood": { spicy: 0, woody: 9, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 0, herbal: 1 },
        "Cinnamon": { spicy: 9, woody: 2, fruity: 0, floral: 0, sweet: 3, citrus: 0, animalic: 0, herbal: 0 },
        "Frankincense": { spicy: 2, woody: 3, fruity: 0, floral: 0, sweet: 1, citrus: 1, animalic: 0, herbal: 2 },
        "Honey": { spicy: 0, woody: 0, fruity: 2, floral: 2, sweet: 8, citrus: 0, animalic: 1, herbal: 0 },
        "Incense": { spicy: 3, woody: 4, fruity: 0, floral: 0, sweet: 2, citrus: 0, animalic: 1, herbal: 2 },
        "Labdanum": { spicy: 1, woody: 3, fruity: 0, floral: 0, sweet: 3, citrus: 0, animalic: 3, herbal: 1 },
        "Leather": { spicy: 1, woody: 2, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 8, herbal: 0 },
        "Moss": { spicy: 0, woody: 3, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 1, herbal: 6 },
        "Musk": { spicy: 0, woody: 1, fruity: 0, floral: 0, sweet: 2, citrus: 0, animalic: 8, herbal: 0 },
        "Myrrh": { spicy: 2, woody: 4, fruity: 0, floral: 0, sweet: 2, citrus: 0, animalic: 1, herbal: 1 },
        "Nutmeg": { spicy: 7, woody: 2, fruity: 0, floral: 0, sweet: 2, citrus: 0, animalic: 0, herbal: 1 },
        "Oakmoss": { spicy: 0, woody: 4, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 2, herbal: 5 },
        "Oud": { spicy: 1, woody: 8, fruity: 0, floral: 0, sweet: 1, citrus: 0, animalic: 3, herbal: 0 },
        "Patchouli": { spicy: 0, woody: 6, fruity: 0, floral: 0, sweet: 2, citrus: 0, animalic: 2, herbal: 3 },
        "Sandalwood": { spicy: 0, woody: 7, fruity: 0, floral: 0, sweet: 3, citrus: 0, animalic: 0, herbal: 0 },
        "Tobacco": { spicy: 2, woody: 5, fruity: 0, floral: 0, sweet: 3, citrus: 0, animalic: 1, herbal: 2 },
        "Tonka Bean": { spicy: 1, woody: 2, fruity: 0, floral: 0, sweet: 8, citrus: 0, animalic: 0, herbal: 1 },
        "Vanilla": { spicy: 0, woody: 1, fruity: 0, floral: 0, sweet: 10, citrus: 0, animalic: 0, herbal: 0 },
        "Vetiver": { spicy: 0, woody: 6, fruity: 0, floral: 0, sweet: 0, citrus: 0, animalic: 1, herbal: 6 },
        "White Musk": { spicy: 0, woody: 0, fruity: 0, floral: 1, sweet: 3, citrus: 0, animalic: 4, herbal: 0 }
    };
}

// ===== CALCULATION FUNCTIONS =====

/**
 * Calculate fragrance type score based on ingredients and percentages
 */
function calculateScore(fragranceType, ingredients, percentages) {
    if (!ingredients || ingredients.length === 0) {
        return 0.0;
    }
    
    let scoreIndex;
    switch (fragranceType.toLowerCase()) {
        case "summer":
            scoreIndex = getSummerScores();
            break;
        case "winter":
            scoreIndex = getWinterScores();
            break;
        case "date":
            scoreIndex = getDateScores();
            break;
        default:
            return 0.0;
    }
    
    let totalWeightedScore = 0.0;
    let totalWeight = 0.0;
    
    for (let ingredient of ingredients) {
        const cleanIngredient = ingredient.trim();
        const percentage = percentages[cleanIngredient] || 0;
        const score = scoreIndex[cleanIngredient] || 0;
        
        const weightedScore = score * (percentage / 100.0);
        totalWeightedScore += weightedScore;
        totalWeight += percentage / 100.0;
    }
    
    // Adjust score based on weight factor
    const weightFactor = Math.min(1.0, totalWeight);
    const finalScore = totalWeightedScore * weightFactor;
    
    return Math.round(finalScore * 100) / 100;
}

/**
 * Get aromachemical data for an ingredient
 */
function getIngredientChemicalData(ingredientName) {
    const data = getAromachemicalData();
    const normalizedName = ingredientName.trim();
    
    if (data[normalizedName]) {
        return data[normalizedName];
    }
    
    // Default composition for unknown ingredients
    return {
        "primary_aromachemical": "Unknown",
        "carbon": 10, "hydrogen": 16, "oxygen": 1, "nitrogen": 0, "sulfur": 0
    };
}

/**
 * Calculate projection score based on chemical composition
 */
function calculateProjectionScore(ingredientName) {
    const chemData = getIngredientChemicalData(ingredientName);
    
    const weightedCount = (chemData.carbon + chemData.hydrogen * 0.8 + 
                         chemData.oxygen * 1.5 + chemData.nitrogen * 1.2 + 
                         chemData.sulfur * 1.3);
    
    const maxAtoms = 60;
    const minAtoms = 5;
    
    let score = 10 - (weightedCount - minAtoms) * 9 / (maxAtoms - minAtoms);
    score = Math.max(1, Math.min(10, score));
    
    return Math.round(score * 100) / 100;
}

/**
 * Calculate longevity score based on chemical composition
 */
function calculateLongevityScore(ingredientName) {
    const chemData = getIngredientChemicalData(ingredientName);
    
    const weightedCount = (chemData.carbon * 1.5 + chemData.hydrogen * 0.7 + 
                         chemData.oxygen * 1.0 + chemData.nitrogen * 1.1 + 
                         chemData.sulfur * 1.2);
    
    const maxAtoms = 60;
    const minAtoms = 5;
    
    let score = 1 + (weightedCount - minAtoms) * 9 / (maxAtoms - minAtoms);
    score = Math.max(1, Math.min(10, score));
    
    return Math.round(score * 100) / 100;
}

/**
 * Calculate sillage score based on ingredient
 */
function calculateSillageScore(ingredientName) {
    const sillageScores = getSillageScores();
    return sillageScores[ingredientName.trim()] || 5.0;
}

/**
 * Get all ingredient names
 */
function getAllIngredientNames() {
    return getAllIngredients().map(ingredient => ingredient[0]);
}

/**
 * Calculate average scores for a list of ingredients with percentages
 */
function calculateAverageScores(ingredients, percentages) {
    if (!ingredients || ingredients.length === 0) {
        return { projection: 0, longevity: 0, sillage: 0 };
    }
    
    let totalProjection = 0;
    let totalLongevity = 0;
    let totalSillage = 0;
    let totalWeight = 0;
    
    for (let ingredient of ingredients) {
        const percentage = percentages[ingredient] || 0;
        const weight = percentage / 100.0;
        
        totalProjection += calculateProjectionScore(ingredient) * weight;
        totalLongevity += calculateLongevityScore(ingredient) * weight;
        totalSillage += calculateSillageScore(ingredient) * weight;
        totalWeight += weight;
    }
    
    if (totalWeight === 0) {
        return { projection: 0, longevity: 0, sillage: 0 };
    }
    
    return {
        projection: Math.round((totalProjection / totalWeight) * 100) / 100,
        longevity: Math.round((totalLongevity / totalWeight) * 100) / 100,
        sillage: Math.round((totalSillage / totalWeight) * 100) / 100
    };
}

/**
 * Get score message based on score value
 */
function getScoreMessage(score) {
    if (score >= 8.5) {
        return "Excellent! This is a very good fragrance combination.";
    } else if (score >= 7.5) {
        return "Great! This fragrance works well for this type.";
    } else if (score >= 6.5) {
        return "Good! This is a decent fragrance for this type.";
    } else if (score >= 5.5) {
        return "Fair. This fragrance could work but might not be ideal.";
    } else if (score >= 4.0) {
        return "Poor. This fragrance doesn't suit this type very well.";
    } else {
        return "Very Poor. This fragrance is not suitable for this type.";
    }
}