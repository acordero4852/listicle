import { pool } from "./database.js";
import recipeData from '../data/data.js';

const createRecipesTable = async () => {
    const tableQuery = `
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE recipes (
            id TEXT PRIMARY KEY,
            imgUrl TEXT NOT NULL,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            createdAt TIMESTAMPTZ DEFAULT NOW(),
            description TEXT,
            mealType TEXT NOT NULL,
            course TEXT NOT NULL,
            diet TEXT[],
            cuisine TEXT NOT NULL,
            servings INTEGER NOT NULL,
            caloriesPerServing INTEGER NOT NULL,
            prepTimeInMin INTEGER NOT NULL,
            cookTimeInMin INTEGER NOT NULL,
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
                id, imgUrl, title, author, createdAt, description, mealType, course, diet, cuisine, servings, caloriesPerServing, prepTimeInMin, cookTimeInMin, ingredients, steps
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
