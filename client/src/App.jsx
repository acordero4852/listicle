import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { Navbar } from "@components";
import { Home, Recipe, NotFound } from "@pages";

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/recipes');
            const data = await response.json();
            console.log(data);
            setRecipes(data);
        };

        fetchRecipes();
    }, []);


    let elements = useRoutes([
        {
            path: "/",
            element: <Home data={recipes} />,
        },
        {
            path: "/recipe/:id",
            element: <Recipe data={recipes} />,
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ]);

    return (
        <>
            <header className="px-6 py-3 border-b border-gray-300">
                <Navbar />
            </header>
            <main className="px-6 py-3">
                {elements}
            </main>
        </>
    );
}

export default App;
