import express from 'express';
import recipesRouter from './routes/recipes.js';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Listicle API" });
})

const PORT = process.env.PORT || 3001;

app.use('/recipes', recipesRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
