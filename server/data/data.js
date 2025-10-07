import crypto from 'crypto';

/*
type Course = "Appetizer" | "Beverage" | "Dessert" | "Entrée" | "Snack";
type Diet =
    | "Dairy-Free"
    | "Gluten-Free"
    | "Halal"
    | "Keto"
    | "Kosher"
    | "Nut-Free"
    | "Paleo"
    | "Pescatarian"
    | "Vegan"
    | "Vegetarian";
type MealType = "Breakfast" | "Brunch" | "Dinner" | "Lunch" | "Supper";
type Cuisine =
    | "Afghan"
    | "Albanian"
    | "American"
    | "Argentinian"
    | "Armenian"
    | "Australian"
    | "Azerbaijani"
    | "Bangladeshi"
    | "Belgian"
    | "Bolivian"
    | "Brazilian"
    | "Bulgarian"
    | "Cameroonian"
    | "Caribbean"
    | "Chilean"
    | "Chinese"
    | "Colombian"
    | "Costa Rican"
    | "Croatian"
    | "Cuban"
    | "Czech"
    | "Danish"
    | "Dutch"
    | "Ecuadorian"
    | "Egyptian"
    | "Ethiopian"
    | "Filipino"
    | "Finnish"
    | "French"
    | "Georgian"
    | "German"
    | "Greek"
    | "Guatemalan"
    | "Hawaiian"
    | "Honduran"
    | "Hungarian"
    | "Icelandic"
    | "Indian"
    | "Indonesian"
    | "Israeli"
    | "Italian"
    | "Japanese"
    | "Kazakh"
    | "Kenyan"
    | "Korean"
    | "Lebanese"
    | "Malaysian"
    | "Mediterranean"
    | "Mexican"
    | "Mongolian"
    | "Moroccan"
    | "Nepalese"
    | "New Zealand"
    | "Nicaraguan"
    | "Norwegian"
    | "Pakistani"
    | "Peruvian"
    | "Persian"
    | "Polish"
    | "Portuguese"
    | "Puerto Rican"
    | "Romanian"
    | "Russian"
    | "Salvadoran"
    | "Serbian"
    | "Slovak"
    | "Slovenian"
    | "Somali"
    | "South African"
    | "Spanish"
    | "Sri Lankan"
    | "Sudanese"
    | "Swedish"
    | "Swiss"
    | "Syrian"
    | "Tanzanian"
    | "Thai"
    | "Turkish"
    | "Ukrainian"
    | "Uzbek"
    | "Venezuelan"
    | "Vietnamese";

interface Recipe {
    id: string;
    imgUrl: string;
    title: string;
    author: string;
    createdAt: Date;
    description: string;
    mealType: MealType;
    course: Course;
    diet?: Diet[];
    cuisine: string;
    servings: number;
    caloriesPerServing: number;
    prepTimeInMin: number;
    cookTimeInMin: number;
    ingredients: string[];
    steps: string[];
}

type Recipes = Recipe[];
*/

const recipesWithoutIDAndTime = [
    {
        imgUrl: "",
        title: "Classic Margherita Pizza",
        author: "Giulia Romano",
        description: "A traditional Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
        mealType: "Dinner",
        course: "Entrée",
        diet: ["Vegetarian"],
        cuisine: "Italian",
        servings: 4,
        caloriesPerServing: 300,
        prepTimeInMin: 20,
        cookTimeInMin: 15,
        ingredients: [
            "1 pizza dough (about 12-inch)",
            "1/2 cup tomato sauce",
            "8 oz fresh mozzarella, sliced",
            "1/4 cup fresh basil leaves",
            "1 tbsp olive oil",
            "1/2 tsp salt"
        ],
        steps: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough.",
            "Spread tomato sauce over dough.",
            "Add mozzarella slices.",
            "Bake for 12-15 minutes.",
            "Top with basil and drizzle olive oil."
        ]
    },
    {
        imgUrl: "",
        title: "Chicken Tikka Masala",
        author: "Priya Deshmukh",
        description: "Tender chicken pieces simmered in a creamy spiced tomato sauce.",
        mealType: "Dinner",
        course: "Entrée",
        diet: ["Gluten-Free", "Halal"],
        cuisine: "Indian",
        servings: 4,
        caloriesPerServing: 400,
        prepTimeInMin: 30,
        cookTimeInMin: 40,
        ingredients: [
            "1 lb chicken breast, cubed",
            "1/2 cup yogurt",
            "2 tbsp garam masala",
            "1 cup tomato puree",
            "1/2 cup cream",
            "1 medium onion, chopped",
            "2 cloves garlic, minced",
            "1 inch ginger, grated",
            "1 tsp mixed spices (cumin, coriander, paprika)"
        ],
        steps: [
            "Marinate chicken in yogurt and spices.",
            "Grill or sauté chicken.",
            "Cook onions, garlic, and ginger.",
            "Add tomato puree and cream.",
            "Simmer chicken in sauce."
        ]
    },
    {
        imgUrl: "",
        title: "Vegan Pad Thai",
        author: "Somsak Charoen",
        description: "A plant-based version of the classic Thai noodle dish.",
        mealType: "Lunch",
        course: "Entrée",
        diet: ["Vegan", "Nut-Free"],
        cuisine: "Thai",
        servings: 3,
        caloriesPerServing: 350,
        prepTimeInMin: 15,
        cookTimeInMin: 15,
        ingredients: [
            "8 oz rice noodles",
            "8 oz firm tofu, cubed",
            "1 cup bean sprouts",
            "2 green onions, sliced",
            "1/3 cup Pad Thai sauce",
            "1 lime, cut into wedges",
            "2 tbsp vegetable oil"
        ],
        steps: [
            "Soak rice noodles.",
            "Stir-fry tofu until golden.",
            "Add noodles and sauce.",
            "Mix in bean sprouts and green onions.",
            "Serve with lime wedges."
        ]
    },
    {
        imgUrl: "",
        title: "French Crêpes",
        author: "Luc Moreau",
        description: "Thin, delicate pancakes perfect for sweet or savory fillings.",
        mealType: "Breakfast",
        course: "Dessert",
        diet: ["Vegetarian"],
        cuisine: "French",
        servings: 6,
        caloriesPerServing: 120,
        prepTimeInMin: 10,
        cookTimeInMin: 20,
        ingredients: [
            "1 cup flour",
            "2 large eggs",
            "1 1/2 cups milk",
            "2 tbsp butter",
            "1/4 tsp salt"
        ],
        steps: [
            "Mix flour, eggs, milk, and salt.",
            "Heat butter in a pan.",
            "Pour batter and swirl to coat.",
            "Cook until golden, flip and cook other side.",
            "Fill and serve."
        ]
    },
    {
        imgUrl: "",
        title: "Guacamole",
        author: "Marisol Herrera",
        description: "A creamy avocado dip with lime, cilantro, and tomatoes.",
        mealType: "Brunch",
        course: "Appetizer",
        diet: ["Vegan", "Gluten-Free"],
        cuisine: "Mexican",
        servings: 4,
        caloriesPerServing: 150,
        prepTimeInMin: 10,
        cookTimeInMin: 0,
        ingredients: [
            "2 large avocados",
            "2 tbsp lime juice",
            "1 medium tomato, diced",
            "1/4 cup onion, finely chopped",
            "2 tbsp cilantro, chopped",
            "1/2 tsp salt"
        ],
        steps: [
            "Mash avocados.",
            "Mix in lime juice, tomatoes, onion, and cilantro.",
            "Season with salt.",
            "Serve immediately."
        ]
    },
    {
        imgUrl: "",
        title: "Greek Salad",
        author: "Nikos Papadakis",
        description: "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
        mealType: "Lunch",
        course: "Appetizer",
        diet: ["Vegetarian", "Gluten-Free"],
        cuisine: "Greek",
        servings: 4,
        caloriesPerServing: 180,
        prepTimeInMin: 15,
        cookTimeInMin: 0,
        ingredients: [
            "2 medium tomatoes, chopped",
            "1 cucumber, sliced",
            "1/2 red onion, sliced",
            "1/2 cup Kalamata olives",
            "1/2 cup feta cheese, crumbled",
            "2 tbsp olive oil",
            "1 tsp dried oregano"
        ],
        steps: [
            "Chop vegetables.",
            "Combine in a bowl.",
            "Add olives and feta.",
            "Drizzle with olive oil and sprinkle oregano."
        ]
    },
    {
        imgUrl: "",
        title: "Japanese Miso Soup",
        author: "Yuki Takahashi",
        description: "A light soup with tofu, seaweed, and green onions in miso broth.",
        mealType: "Lunch",
        course: "Appetizer",
        diet: ["Vegetarian", "Gluten-Free"],
        cuisine: "Japanese",
        servings: 4,
        caloriesPerServing: 60,
        prepTimeInMin: 5,
        cookTimeInMin: 10,
        ingredients: [
            "3 tbsp miso paste",
            "4 cups dashi broth",
            "4 oz tofu, cubed",
            "2 tbsp wakame seaweed",
            "2 green onions, sliced"
        ],
        steps: [
            "Heat dashi broth.",
            "Add tofu and seaweed.",
            "Stir in miso paste.",
            "Garnish with green onions."
        ]
    },
    {
        imgUrl: "",
        title: "Moroccan Couscous",
        author: "Amina El Idrissi",
        description: "Fluffy couscous with vegetables and aromatic spices.",
        mealType: "Dinner",
        course: "Entrée",
        diet: ["Vegetarian"],
        cuisine: "Moroccan",
        servings: 5,
        caloriesPerServing: 250,
        prepTimeInMin: 20,
        cookTimeInMin: 25,
        ingredients: [
            "1 1/2 cups couscous",
            "2 carrots, sliced",
            "1 zucchini, chopped",
            "1 cup chickpeas, cooked",
            "1 medium onion, chopped",
            "2 tsp ras el hanout",
            "2 cups vegetable broth"
        ],
        steps: [
            "Cook vegetables in broth with spices.",
            "Steam couscous.",
            "Combine couscous and vegetables.",
            "Serve warm."
        ]
    },
    {
        imgUrl: "",
        title: "Pão de Queijo (Brazilian Cheese Bread)",
        author: "Felipe Souza",
        description: "Chewy, cheesy gluten-free bread balls made with tapioca flour.",
        mealType: "Breakfast",
        course: "Snack",
        diet: ["Gluten-Free", "Vegetarian"],
        cuisine: "Brazilian",
        servings: 12,
        caloriesPerServing: 90,
        prepTimeInMin: 15,
        cookTimeInMin: 20,
        ingredients: [
            "2 cups tapioca flour",
            "2 large eggs",
            "1 cup milk",
            "1 cup Parmesan cheese, grated",
            "1/4 cup butter, melted",
            "1/2 tsp salt"
        ],
        steps: [
            "Mix all ingredients.",
            "Shape into balls.",
            "Bake until golden."
        ]
    },
    {
        imgUrl: "",
        title: "Vietnamese Iced Coffee",
        author: "Minh Tran",
        description: "Strong coffee sweetened with condensed milk and served over ice.",
        mealType: "Breakfast",
        course: "Beverage",
        cuisine: "Vietnamese",
        servings: 2,
        caloriesPerServing: 140,
        prepTimeInMin: 5,
        cookTimeInMin: 0,
        ingredients: [
            "2 tbsp Vietnamese ground coffee",
            "1 cup hot water",
            "3 tbsp sweetened condensed milk",
            "1 cup ice"
        ],
        steps: [
            "Brew coffee using a phin filter.",
            "Add condensed milk to glass.",
            "Pour coffee over milk.",
            "Stir and add ice."
        ]
    }
];

const recipeData = [];

recipesWithoutIDAndTime.forEach((recipe) => {
    let id = crypto.randomUUID().replace(/-/g, "");
    let createdAt = new Date();
    recipeData.push({ id, ...recipe, createdAt });
});

export default recipeData;
