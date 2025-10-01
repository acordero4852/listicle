import crypto from 'crypto';

const recipeData = [
    {
        imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        title: "Spaghetti Carbonara",
        overview: "Classic Italian pasta dish with creamy egg sauce, pancetta, and parmesan.",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g parmesan cheese",
            "2 cloves garlic",
            "Salt",
            "Black pepper"
        ],
        steps: [
            "Cook spaghetti in salted boiling water until al dente.",
            "Fry pancetta and garlic until crispy.",
            "Beat eggs and mix with grated parmesan.",
            "Drain pasta and combine with pancetta.",
            "Remove from heat, add egg mixture, and toss quickly.",
            "Season with salt and pepper. Serve immediately."
        ],
        totalTime: "30 minutes",
        servings: 2,
        calories: 550,
        cuisine: "Italian",
        course: "Main Course",
        dietaryRestrictions: ["Gluten"]
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
        title: "Vegetarian Tacos",
        overview: "Tasty tacos filled with black beans, corn, and fresh veggies.",
        ingredients: [
            "6 corn tortillas",
            "1 can black beans",
            "1 cup corn kernels",
            "1 avocado",
            "1 tomato",
            "1/4 cup red onion",
            "Cilantro",
            "Lime",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Warm tortillas in a skillet.",
            "Mash black beans and season with salt and pepper.",
            "Dice avocado, tomato, and red onion.",
            "Fill tortillas with beans, corn, and veggies.",
            "Top with cilantro and a squeeze of lime."
        ],
        totalTime: "25 minutes",
        servings: 3,
        calories: 320,
        cuisine: "Mexican",
        course: "Main Course",
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"]
    },
    {

        imgUrl: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0",
        title: "Chicken Caesar Salad",
        overview: "Grilled chicken breast on crisp romaine with Caesar dressing and croutons.",
        ingredients: [
            "2 chicken breasts",
            "1 head romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup croutons",
            "1/4 cup parmesan cheese",
            "Olive oil",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Season and grill chicken breasts until cooked through.",
            "Chop romaine lettuce.",
            "Slice chicken and toss with lettuce, dressing, and croutons.",
            "Top with parmesan cheese and serve."
        ],
        totalTime: "25 minutes",
        servings: 2,
        calories: 400,
        cuisine: "American",
        course: "Main Course",
        dietaryRestrictions: []
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
        title: "Vegan Buddha Bowl",
        overview: "A nourishing bowl with quinoa, roasted veggies, and tahini dressing.",
        ingredients: [
            "1 cup quinoa",
            "1 sweet potato",
            "1 cup broccoli florets",
            "1/2 cup chickpeas",
            "2 tbsp tahini",
            "1 lemon",
            "Olive oil",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Cook quinoa according to package instructions.",
            "Roast sweet potato and broccoli with olive oil, salt, and pepper.",
            "Mix tahini with lemon juice and water for dressing.",
            "Assemble bowl with quinoa, veggies, and chickpeas.",
            "Drizzle with tahini dressing."
        ],
        totalTime: "40 minutes",
        servings: 2,
        calories: 350,
        cuisine: "Fusion",
        course: "Main Course",
        dietaryRestrictions: ["Vegan", "Gluten-Free"]
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        title: "Classic Pancakes",
        overview: "Fluffy pancakes perfect for a weekend breakfast.",
        ingredients: [
            "1 cup flour",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "1/2 tsp baking soda",
            "1 cup milk",
            "1 egg",
            "2 tbsp melted butter",
            "Pinch of salt"
        ],
        steps: [
            "Mix dry ingredients in a bowl.",
            "Whisk wet ingredients separately.",
            "Combine wet and dry ingredients until just mixed.",
            "Heat skillet and pour batter to form pancakes.",
            "Cook until bubbles form, flip, and cook until golden."
        ],
        totalTime: "25 minutes",
        servings: 4,
        calories: 210,
        cuisine: "American",
        course: "Breakfast",
        dietaryRestrictions: ["Vegetarian"]
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        title: "Beef Stir Fry",
        overview: "Quick and easy stir fry with beef and colorful vegetables.",
        ingredients: [
            "200g beef strips",
            "1 bell pepper",
            "1 carrot",
            "1 onion",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 clove garlic",
            "1 tsp ginger"
        ],
        steps: [
            "Slice vegetables and beef.",
            "Heat oil in wok and stir fry beef until browned.",
            "Add vegetables, garlic, and ginger.",
            "Stir fry for 5 minutes.",
            "Add soy sauce and cook for 2 more minutes."
        ],
        totalTime: "20 minutes",
        servings: 2,
        calories: 380,
        cuisine: "Asian",
        course: "Main Course",
        dietaryRestrictions: []
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
        title: "Greek Salad",
        overview: "Refreshing salad with tomatoes, cucumber, feta, and olives.",
        ingredients: [
            "2 tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "1/2 cup feta cheese",
            "1/4 cup kalamata olives",
            "2 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "Oregano"
        ],
        steps: [
            "Chop tomatoes, cucumber, and onion.",
            "Combine in a bowl with olives and feta.",
            "Drizzle with olive oil and vinegar.",
            "Sprinkle with oregano and toss gently."
        ],
        totalTime: "10 minutes",
        servings: 2,
        calories: 220,
        cuisine: "Greek",
        course: "Appetizer",
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"]
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        title: "Shrimp Fried Rice",
        overview: "Savory fried rice with shrimp, peas, and carrots.",
        ingredients: [
            "1 cup cooked rice",
            "100g shrimp",
            "1/2 cup peas",
            "1/2 cup diced carrots",
            "2 eggs",
            "2 tbsp soy sauce",
            "1 tbsp vegetable oil",
            "2 green onions"
        ],
        steps: [
            "Heat oil in pan and scramble eggs.",
            "Add shrimp and cook until pink.",
            "Add vegetables and stir fry for 2 minutes.",
            "Add rice and soy sauce, stir well.",
            "Top with chopped green onions."
        ],
        totalTime: "20 minutes",
        servings: 2,
        calories: 330,
        cuisine: "Chinese",
        course: "Main Course",
        dietaryRestrictions: []
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
        title: "Caprese Skewers",
        overview: "Simple appetizer with mozzarella, tomatoes, and basil.",
        ingredients: [
            "12 cherry tomatoes",
            "12 mozzarella balls",
            "12 basil leaves",
            "2 tbsp balsamic glaze",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Thread tomato, mozzarella, and basil onto skewers.",
            "Arrange on a platter.",
            "Drizzle with balsamic glaze.",
            "Season with salt and pepper."
        ],
        totalTime: "10 minutes",
        servings: 4,
        calories: 120,
        cuisine: "Italian",
        course: "Appetizer",
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"]
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0",
        title: "Chocolate Mug Cake",
        overview: "Quick chocolate cake made in a mug in the microwave.",
        ingredients: [
            "4 tbsp flour",
            "4 tbsp sugar",
            "2 tbsp cocoa powder",
            "1 egg",
            "3 tbsp milk",
            "3 tbsp vegetable oil",
            "1/4 tsp baking powder",
            "Pinch of salt"
        ],
        steps: [
            "Mix all ingredients in a mug.",
            "Microwave on high for 1-2 minutes.",
            "Let cool slightly before eating."
        ],
        totalTime: "7 minutes",
        servings: 1,
        calories: 370,
        cuisine: "American",
        course: "Dessert",
        dietaryRestrictions: ["Vegetarian"]
    }
];

recipeData.forEach(recipe => {
    recipe.id = crypto.randomUUID();
});

export default recipeData;
