import React,{useState,useContext} from "react";
import { ProductContext } from "./ProductContext";
import {NavLink} from "react-router-dom";
import {Button,Card, Stack} from "react-bootstrap";

function Product(props) {
  const [data, setData] = useContext(ProductContext);
  return (
    <Stack>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://picsum.photos/200/300" />
    <Card.Body>
      <Card.Title>{data.length}data</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Stack>
  )
}

export default Product