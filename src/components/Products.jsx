import React, {  useState,useContext } from "react";
import { Button, Container, } from "react-bootstrap";
import { ProductContext } from "./ProductContext";

import ShowProducts from "./ShowProducts";

const Products = (props) => {
	const [filter, setFilter] = useState([]);
	const [data, setData] = useContext(ProductContext);
	

	return (
		<div>
		
			<Container bg="dark">
				<div className=" my-5 py-4">
					<div className="">
						<div className="">
							<h1 className="display-7 fw-bolder text-center">Our Products </h1>
							<hr />
						</div>
					</div>
					<div className="d-flex justify-content-center mb-5 me-2">
						<Button
							onClick={() => setFilter(data)}
							variant="outline-secondary"
							className="me-2"
						>
							All
						</Button>{" "}
						<Button
							onClick={() =>
								setFilter(
									data.filter((item) => item.category === "men's clothing")
								)
							}
							variant="outline-secondary"
							className="me-2"
						>
							Men's
						</Button>{" "}
						<Button
							onClick={() =>
								setFilter(
									data.filter((item) => item.category === "women's clothing")
								)
							}
							variant="outline-secondary"
							className="me-2"
						>
							Women's
						</Button>{" "}
						<Button
							onClick={() =>
								setFilter(data.filter((item) => item.category === "jewelery"))
							}
							variant="outline-secondary"
							className="me-2"
						>
							Jewelery
						</Button>{" "}
						<Button
							onClick={() =>
								setFilter(
									data.filter((item) => item.category === "electronics")
								)
							}
							variant="outline-secondary"
							className="me-2"
						>
							Electronic
						</Button>{" "}
					</div>
					<div className="row justify-content-center">
						<ShowProducts filter={filter}  />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Products;
