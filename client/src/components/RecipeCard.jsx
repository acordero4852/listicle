import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`} >
            <div>
                <img src={recipe.img_url}/>
                <div>
                    <h2>{recipe.title}</h2>
                    <p>By {recipe.author}</p>
                    <p>{recipe.description}</p>
                    <div>
                        <span>{recipe.meal_type}</span> | <span>{recipe.course}</span> | <span>{recipe.cuisine}</span>
                    </div>
                    <div>
                        <span>Servings: {recipe.servings}</span> | <span>{recipe.calories_per_serving} cal/serving</span>
                    </div>
                    <div>
                        <span>Prep: {recipe.prep_time_in_min} min</span> | <span>Cook: {recipe.cook_time_in_min} min</span>
                    </div>
                    <div>
                        {recipe.diet && "Diet: " + recipe.diet.join(", ")}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;
