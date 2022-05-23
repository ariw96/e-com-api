import React, { useEffect, useState } from "react";

import {Button,Card} from "react-bootstrap";


const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	let compoundMounted = true;
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const json = await response.json();
				if (compoundMounted) {
					setData(json);
					setFilter(json);
					setLoading(false);
					compoundMounted = false;
				}
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
		console.table(filter);
		console.table("filter");
	}, []);
	const ShowProducts = () => {
	return(
		<>
		{filter.map((item) => {
			return (
				<Card className="h-100 text-center p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>
				
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.category}</Card.Title>
				 
				  <Button variant="primary">Add To Cart</Button>
				</Card.Body>
			  </Card>
			);
		})}
		</>
	)
	}
	return (
		<div>
			<div className="container my-5 py-4">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Our Products </h1>
						<hr />
					</div>
				</div>
				<div className="d-flex justify-content-center mb-5 me-2">
					<Button variant="outline-secondary" className="me-2">
						Men's
					</Button>{" "}
					<Button variant="outline-secondary" className="me-2">
						Women's
					</Button>{" "}
					<Button variant="outline-secondary" className="me-2">
						Jewlry
					</Button>{" "}
					<Button variant="outline-secondary" className="me-2">
						Electronic
					</Button>{" "}
				</div>
				<div className="row justify-content-center">
					{loading ? "loading..." : <ShowProducts  />}
				</div>
			</div>
			
		</div>
	);
};

export default Products;
