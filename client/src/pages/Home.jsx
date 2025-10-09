import { useEffect, useState } from "react";
import { RecipeCard } from "@components";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setError(null);
                const response = await fetch('/recipes');
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Discover and share simple, delicious recipes.
            </h1>
            <p className="mb-6 text-gray-700">
                Browse our curated list of easy-to-follow recipes for every occasion. Find your next favorite dish or share your own creations!
            </p>
            {loading && <p>Loading...</p>}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p className="text-gray-500">No recipes available.</p>
                )}
            </div>
            {error && <p className="text-red-500">Error loading recipes: {error}</p>}
        </div>
    );
}

export default Home;
