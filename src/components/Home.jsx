import React from "react";
import { Card } from "react-bootstrap";
import Products from "./Products";

export default function Home() {
	return (
		<div>
			<Card className="bg-dark text-white border-0 ">
				<img src="https://picsum.photos/200/300" width="500" />
				<Card.ImgOverlay>
					<Card.Title className="display-3 fw-bolder mb-0">
						New Products That you dont need
					</Card.Title>
					<Card.Text className="display-6 ">
						Check out our products and waist your $$$$$$$$$$$$
					</Card.Text>
				</Card.ImgOverlay>
			</Card>
			<Products />
		</div>
	);
}
