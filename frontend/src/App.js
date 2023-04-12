import "./App.css";

import {BrowserRouter, Routes, Route, Switch, Redirect} from "react-router-dom"
import NavBar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./components/Home.jsx";

function App(){
    return  <div className="App"> 
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/cart" element={<Cart />} />
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
      </div>
    
}

export default App;