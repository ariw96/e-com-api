import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css' 
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Products from "./components/Products";


function App() {
  return (
 <>
  <NavBar />
  <Home/>
  <Products/>
 </>
  );
}

export default App;
