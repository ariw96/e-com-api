import React, { useEffect, useState } from "react";
import {Button,Card, Container, Spinner} from "react-bootstrap";
import axios from "axios";
import ShowSpinner from "./ShowSpinner";
import ShowProducts from "./ShowProducts";

const Products = () => {
	const api = "https://fakestoreapi.com/products";
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	let compoundMounted = true;
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try { 
				const response = await axios.get(api);
				if (compoundMounted) {
					setData(response.data);
					setFilter(response.data);
					setLoading(false);
					compoundMounted = false;
				}
			} catch (error) {
				console.log(error);
			}

			
		};
		getProducts();
		console.table(filter);
	}, []);
	
	
	
	return (
		<div>
			<Container bg="dark">

			<div className=" my-5 py-4" >
				<div className="">
					<div className="">
						<h1 className="display-7 fw-bolder text-center">Our Products </h1>
						<hr />
					</div>
				</div>
				<div className="d-flex justify-content-center mb-5 me-2">
					<Button onClick={()=>setFilter(data)} 
					variant="outline-secondary" className="me-2">
						All
					</Button>{" "}
					<Button onClick={()=>setFilter(data.filter(item=>item.category==="men's clothing"))}
					variant="outline-secondary" className="me-2">
						Men's
					</Button>{" "}
					<Button onClick={()=>setFilter(data.filter(item=>item.category==="women's clothing"))}
					 variant="outline-secondary" className="me-2">
						Women's
					</Button>{" "}
					<Button onClick={()=>setFilter(data.filter(item=>item.category==="jewelery"))}
					 variant="outline-secondary" className="me-2">
						Jewelery
					</Button>{" "}
					<Button onClick={()=>setFilter(data.filter(item=>item.category==="electronics"))}
					variant="outline-secondary" className="me-2">
						Electronic
					</Button>{" "}
				</div>
				<div className="row justify-content-center">
					{loading ? <ShowSpinner/> : <ShowProducts data={filter}/>}
	
				</div>
			</div>
			
						</Container>
		</div>
	);
};

export default Products;
