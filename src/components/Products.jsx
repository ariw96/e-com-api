import React, { useEffect, useState } from "react";
import { Button } from "bootstrap";


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
					console.table(json);
					console.table(filter);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);

	return (
		<div>
			<div className="container my-5 py-4">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Our Products </h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? "loading..." : "Loaded"}
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
			</div>
		</div>
	);
};

export default Products;
