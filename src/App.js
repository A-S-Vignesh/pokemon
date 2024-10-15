import "./App.css";
import Header from "./sections/Header";
import MainBox from "./components/MainBox";
import PokemonDetail from "./sections/PokemonDetail";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}


export default App;
