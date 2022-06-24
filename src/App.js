import './App.css';
import Home from "./pages/home"
import About from "./pages/about"

import {Routes, Route} from "react-router-dom"
import Command from './pages/command';
import Uzbekistan from "./pages/uzbekistan";
import World from "./pages/world"
import Technology from "./pages/technology";

function App() {
  return (
    <div className="App">
    
        {/* <Home/> */}

        <Routes>
          <Route path="/" index  element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="command" element={<Command/>}/>
          <Route path="uzbekistan" element={<Uzbekistan/>}/>
          <Route path="world" element={<World/>}/>
          <Route path="technology" element={<Technology/>}/>
        </Routes>
    </div>
  );
}

export default App;
