import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css' 
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState,useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  const api = "https://fakestoreapi.com/products";
	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

	let compoundMounted = true;
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				if (compoundMounted) {
				const response = await axios.get(api);
					setData(response.data);
					compoundMounted = false;
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		console.table(data);
		getProducts();
	}, []);
  return (
 <>
   <Router>
    <NavBar />
    {/* <Cart/> */}
  
 < Routes>

  <Route path="home" element={<Home/>} />
  <Route path="products" element={<Products data={data} />} />
  {/* <Route  path="products:id" element={<Product data={data}/>} /> */}

  </Routes>
   </Router>
  
 </>
  );
}

export default App;
