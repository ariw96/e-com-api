import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css' 
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  return (
 <>
   <Router>
    <NavBar />
  
    <Product/>
 < Routes>

  <Route path="home" element={<Home/>} />
  <Route path="products" element={<Products/>} />
  <Route  path=":id" element={<Product/>} />

  </Routes>
   </Router>
  
 </>
  );
}

export default App;
