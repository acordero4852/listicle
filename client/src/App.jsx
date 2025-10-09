import { useRoutes } from "react-router-dom";
import { Navbar } from "@components";
import { Home, Recipe, NotFound } from "@pages";

function App() {
    let elements = useRoutes([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/recipe/:id",
            element: <Recipe/>,
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
