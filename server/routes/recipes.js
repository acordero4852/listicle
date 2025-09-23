import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import metadata from '../data/data.js';
import RecipesController from '../controllers/recipes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(metadata);
});

export default router;
