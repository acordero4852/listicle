import express from 'express';
import RecipesController from '../controllers/recipes.js';

const router = express.Router();

router.get('/', RecipesController.getRecipes);

router.get('/:id', RecipesController.getRecipeById);

export default router;
