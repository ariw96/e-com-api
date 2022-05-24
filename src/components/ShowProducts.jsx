import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link} from "react-router-dom";
const ShowProducts = ({data}) => {
	return(
		<>
		{data.map((item) => {
			return (
				<Card className="h-100 text-center  p-4 border-secondary me-2 my-2 " key={item.id} style={{ width: '18rem' }}>	
				<Card.Img variant="top" src={`${item.image}`} height='250px' />
				<Card.Body>
				  <Card.Title>{item.category}</Card.Title>
				  <Button variant="info">Add To Cart</Button>
                  <Link to={`:${item.id}`}>
				  <Button className="mx-2" variant="warning">Details</Button>
                      </Link>
				</Card.Body>
			  </Card>
			);
		})}
		</>
	)
	}
    export default ShowProducts;