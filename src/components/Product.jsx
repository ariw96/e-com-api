import React,{useState,useContext} from "react";
import { ProductContext } from "./ProductContext";
import {NavLink} from "react-router-dom";
import {Button,Card, Stack} from "react-bootstrap";

function Product(props) {
  const [data, setData] = useContext(ProductContext);
  
 console.log(data[20][0]);
  return (
    <Stack>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${data[20][0].image}`}/>
    <Card.Body>
      <Card.Title>{data[20][0].title}</Card.Title>
      <Card.Title>{data[20][0].price}$   {data[20][0].rating.rate} stars</Card.Title>
      <Card.Text>
      {data[20][0].description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Stack>
  )
}

export default Product