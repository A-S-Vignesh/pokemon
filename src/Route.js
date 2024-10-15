// routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainBox from "./components/MainBox";
import PokemonDetail from "./sections/PokemonDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBox />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
    ],
  },
]);

export default appRouter;
