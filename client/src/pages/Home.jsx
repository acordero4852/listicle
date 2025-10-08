import { RecipeCard } from "@components";

function Home({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Discover and share simple, delicious recipes.
            </h1>
            <p className="mb-6 text-gray-700">
                Browse our curated list of easy-to-follow recipes for every occasion. Find your next favorite dish or share your own creations!
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.length > 0 ? (
                    data.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p className="text-gray-500">No recipes available.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
