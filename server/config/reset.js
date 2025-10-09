import { pool } from "./database.js";
import recipeData from '../data/data.js';

const createRecipesTable = async () => {
    const tableQuery = `
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE recipes (
            id TEXT PRIMARY KEY,
            img_url TEXT NOT NULL,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            description TEXT,
            meal_type TEXT NOT NULL,
            course TEXT NOT NULL,
            diet TEXT[],
            cuisine TEXT NOT NULL,
            servings INTEGER NOT NULL,
            calories_per_serving INTEGER NOT NULL,
            prep_time_in_min INTEGER NOT NULL,
            cook_time_in_min INTEGER NOT NULL,
            ingredients TEXT[] NOT NULL,
            steps TEXT[] NOT NULL
        );
    `;
    try {
        await pool.query(tableQuery);
        console.log("🎉 Recipes table created/reseted successfully.");
    } catch (err) {
        console.error("⚠️ Error creating recipes table:", err);
    }
};

const seedRecipesTable = async () => {
    await createRecipesTable();
    recipeData.forEach((recipe) => {
        const insertQuery = {
            text: `INSERT INTO recipes (
                id, img_url, title, author, created_at, description, meal_type, course, diet, cuisine, servings, calories_per_serving, prep_time_in_min, cook_time_in_min, ingredients, steps
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
            )`,
        };

        const values = [
            recipe.id,
            recipe.imgUrl,
            recipe.title,
            recipe.author,
            recipe.createdAt,
            recipe.description || null,
            recipe.mealType,
            recipe.course,
            recipe.diet || null,
            recipe.cuisine,
            recipe.servings,
            recipe.caloriesPerServing,
            recipe.prepTimeInMin,
            recipe.cookTimeInMin,
            recipe.ingredients,
            recipe.steps
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error("⚠️ Error inserting recipes:", err);
                return;
            }
            console.log("🎉 Recipes added successfully.");
        });
    });
};

seedRecipesTable();
