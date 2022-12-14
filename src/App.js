import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Animes from "./components/Animes";
import Detalhe from "./components/Detalhe"
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar />
       <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Animes" element={<Animes/>}/>
                <Route path="/Detalhe/:id" element={<Detalhe/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
