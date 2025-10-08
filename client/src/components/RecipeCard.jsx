import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div className="recipe-card border rounded-lg p-4 max-w-xs bg-white shadow">
                <img src={recipe.imgurl} alt={recipe.title} className="w-full rounded-lg mb-3" />
                <h2 className="text-lg font-semibold mb-1">{recipe.title}</h2>
                <p className="mb-2">By {recipe.author}</p>
                <p className="mb-2">{recipe.description}</p>
                <div className="text-sm mb-2">
                    <span>{recipe.mealtype}</span> | <span>{recipe.course}</span> | <span>{recipe.cuisine}</span>
                </div>
                <div className="text-sm mb-2">
                    <span>Servings: {recipe.servings}</span> | <span>{recipe.caloriesperserving} cal/serving</span>
                </div>
                <div className="text-sm mb-2">
                    <span>Prep: {recipe.preptimeinmin} min</span> | <span>Cook: {recipe.cooktimeinmin} min</span>
                </div>
                <div className="text-sm mb-2">
                    Diet: {recipe.diet && recipe.diet.join(", ")}
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;
