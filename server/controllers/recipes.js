import { pool } from "../config/database.js";

const getRecipes = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM recipes';
        const result = await pool.query(selectQuery);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const selectQuery = 'SELECT * FROM recipes WHERE id = $1';
        const result = await pool.query(selectQuery, [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

export default { getRecipes, getRecipeById };
