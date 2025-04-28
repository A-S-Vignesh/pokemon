// routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./sections/Home";
import PokemonDetail from "./sections/PokemonDetail";
import Pokemon from "./sections/Pokemon";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemon",
        element: <Pokemon />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
    ],
  },
]);

export default appRouter;
