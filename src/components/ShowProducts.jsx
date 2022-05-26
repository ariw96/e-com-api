import React from "react";
import { Card ,Button,Stack} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { useState } from "react";
const ShowProducts = ({data,filter}) => {
	const [id, setId] = useState(0);
	
	
	return(
		<>
			
		{filter.map((item) => {
			console.log(item);
			return (
				
				<Card className="h-100 text-center  p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>	
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.category}</Card.Title>
				  <Button variant="info"  >Add To Cart </Button>
                <NavLink to={`product`}>

				  <Button className="mx-2" variant="warning" value={item.id}>Details </Button>
				</NavLink>
                  
				</Card.Body>
			  </Card>
			);
		})}
		</>
	)
	}
    export default ShowProducts;