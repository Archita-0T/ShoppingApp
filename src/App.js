import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <div className="nav">
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
      </div>

    
    </div>
  );
}

export default App;
