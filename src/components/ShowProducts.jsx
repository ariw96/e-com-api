import React from "react";
import { Card ,Button,Stack} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { useState } from "react";
const ShowProducts = ({data,filter}) => {
	const [id, setId] = useState(0);
const [cart, setCart] = useState([]);
const addToCart = (item) => {
const exist = cart.find((i) => i.id === item.id);
if (exist) {
  exist.count += 1;
} else {
  setCart([...cart, { ...item, count: 1 }]);
	console.log(cart)
};
}	

	return(
		<>
			<Stack  direction="horizontal" gap={3}>
			<Card className="bg-dark text-white border-0 ">
			<img src={`${data[id].image}`} width="180" height='180'/>
			</Card>
				<Card.Body>
					<Card.Title>{`${data[id].title}`}</Card.Title>
					<Card.Text>
					{`${data[id].description}`}
					</Card.Text>
					<Button variant="primary" className="mx-4">Buy Now</Button>
					<Button variant="secondary">Go to Cart</Button>
				</Card.Body>
			</Stack>
		{filter.map((item) => {
			console.log(item);
			return (
				
				<Card className="h-100 text-center  p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>	
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.category}</Card.Title>
				  <Button variant="info"  >Add To Cart </Button>
                
				  <Button className="mx-2" variant="warning" value={item.id} onClick={()=>setId(item.id-1)}>Details </Button>
                  
				</Card.Body>
			  </Card>
			);
		})}
		</>
	)
	}
    export default ShowProducts;