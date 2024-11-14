import "./App.css";
import Header from "./sections/Header";
import MainBox from "./components/MainBox";
import PokemonDetail from "./sections/PokemonDetail";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


export default App;
