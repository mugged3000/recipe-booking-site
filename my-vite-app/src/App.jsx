import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import FooterSection from "./Component/Footer";
import Mainsection from "./pages/Home";
import FoodCard from "./pages/Avaliablefood";
import BurgerCard from "./pages/About";
import ChefCookers from "./pages/Cookers";
import StepByStepInstructions from "./pages/Steps";
import "./App.css";

function App() {
  return (
    <Router>
     
        <Navbar />
        
       
        
          <Routes>
            <Route path="/" element={<Mainsection />} />
            <Route path="/food" element={<FoodCard />} />
            <Route path="/about" element={<BurgerCard />} />
            <Route path="/cookers" element={<ChefCookers />} />
            <Route path="/steps" element={<StepByStepInstructions />} />
          </Routes>
       

       
        <FooterSection />
     
    </Router>
  );
}

export default App;
