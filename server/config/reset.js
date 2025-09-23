import { pool } from "./database.js";
import metadata from '../data/data.js';

const createRecipesTable = async () => {
    const tableQuery = `
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE recipes (
            id SERIAL PRIMARY KEY,
            img_url TEXT NOT NULL,
            title TEXT NOT NULL,
            overview TEXT,
            ingredients TEXT[] NOT NULL,
            steps TEXT[] NOT NULL,
            total_time TEXT,
            servings INTEGER,
            calories INTEGER,
            cuisine TEXT,
            course TEXT,
            dietary_restrictions TEXT[]
        );
    `;
    try {
        await pool.query(tableQuery);
        console.log("🎉 Recipes table created successfully.");
    } catch (err) {
        console.error("⚠️ Error creating recipes table:", err);
    }
};

const seedRecipesTable = async () => {
    await createRecipesTable();
    metadata.forEach((recipe) => {
        const insertQuery = {
            text: `INSERT INTO recipes (id, img_url, title, overview, ingredients, steps, total_time, servings, calories, cuisine, course, dietary_restrictions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        };

        const values = [
            recipe.id,
            recipe.img_url,
            recipe.title,
            recipe.overview || null,
            recipe.ingredients,
            recipe.steps,
            recipe.total_time || null,
            recipe.servings || null,
            recipe.calories || null,
            recipe.cuisine || null,
            recipe.course || null,
            recipe.dietary_restrictions || null
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error("⚠️ Error inserting recipes:", err);
                return;
            }

            console.log("🎉 Recipes added successfully.");
        });
    });
}

seedRecipesTable();
