import express from 'express';
import recipeData from '../data/data.js';
import RecipesController from '../controllers/recipes.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(recipeData);
});

export default router;
