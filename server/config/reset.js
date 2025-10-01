import { pool } from "./database.js";
import recipeData from '../data/data.js';

const createRecipesTable = async () => {
    const tableQuery = `
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE recipes (
            id TEXT PRIMARY KEY,
            imgUrl TEXT NOT NULL,
            title TEXT NOT NULL,
            overview TEXT,
            ingredients TEXT[] NOT NULL,
            steps TEXT[] NOT NULL,
            totalTime TEXT,
            servings INTEGER,
            calories INTEGER,
            cuisine TEXT,
            course TEXT,
            dietaryRestrictions TEXT[]
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
            text: `INSERT INTO recipes (id, imgUrl, title, overview, ingredients, steps, totalTime, servings, calories, cuisine, course, dietaryRestrictions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        };

        const values = [
            recipe.id,
            recipe.imgUrl,
            recipe.title,
            recipe.overview || null,
            recipe.ingredients,
            recipe.steps,
            recipe.totalTime || null,
            recipe.servings || null,
            recipe.calories || null,
            recipe.cuisine || null,
            recipe.course || null,
            recipe.dietaryRestrictions || null
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
