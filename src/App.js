import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css' 
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Products from "./components/Products";

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  return (
 <>
   <Router>
    <NavBar />
  

 < Routes>

  <Route path="products" element={<Products/>} />
  <Route path="home" element={<Home/>} />

  </Routes>
   </Router>
  
 </>
  );
}

export default App;
