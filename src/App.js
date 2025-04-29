import Header from "./sections/Header";
import PokemonDetail from "./sections/PokemonDetail";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
