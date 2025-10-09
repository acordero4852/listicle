import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const [recipe, setRecipe] = useState({
        id: "",
        img_url: "",
        title: "",
        author: "",
        created_at: null,
        description: "",
        meal_type: "",
        course: "",
        diet: [],
        cuisine: "",
        servings: null,
        calories_per_serving: null,
        prep_time_in_min: null,
        cook_time_in_min: null,
        ingredients: [],
        steps: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setError(null);
                const response = await fetch(`/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error loading recipe: {error}</p>}
            {!loading && !error && recipe && (
                <div>
                    <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
                    <p className="text-gray-600 mb-1">By {recipe.author}</p>
                    {recipe.created_at && (
                        <p className="text-gray-400 text-sm mb-2">
                            {new Date(recipe.created_at).toLocaleDateString()}
                        </p>
                    )}
                    {recipe.img_url && (
                        <img
                            src={recipe.img_url}
                            alt={recipe.title}
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                    )}
                    <p className="mb-4">{recipe.description}</p>
                    <div className="mb-4">
                        <span className="font-semibold">Meal Type:</span> {recipe.meal_type}
                        <span className="ml-4 font-semibold">Course:</span> {recipe.course}
                        <span className="ml-4 font-semibold">Cuisine:</span> {recipe.cuisine}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">Diet:</span> {recipe.diet.join(', ')}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">Servings:</span> {recipe.servings}
                        <span className="ml-4 font-semibold">Calories/Serving:</span> {recipe.calories_per_serving}
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">Prep Time:</span> {recipe.prep_time_in_min} min
                        <span className="ml-4 font-semibold">Cook Time:</span> {recipe.cook_time_in_min} min
                    </div>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside mb-6">
                        {recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        {recipe.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default Recipe;
