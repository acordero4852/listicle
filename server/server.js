import express from 'express';
import recipesRouter from './routes/recipes.js';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use('/recipes', recipesRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Listicle API" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
