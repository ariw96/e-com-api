import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import ShowSpinner from './ShowSpinner'
function Product() {
  //   const api = 'https://fakestoreapi.com/products';
  //   const {id} = useParams();
  //   const [product, setProduct] = useState({})
  //   const [loading, setLoading] = useState(false)
    
  //  useEffect(() => {
  //        const getProduct = async () => {
  //             try {
  //               const response = await axios.get(`${api}/${id}`)
  //               setProduct(response.data)
  //               setLoading(false)
  //             } catch (error) {
  //               console.log(error)
  //             }
  //        }
  //        getProduct()
  //       },[])
  //       const ShowProduct = () => {
  //         <div>
  //         <h1>{product.name}</h1>
  //         <h2>rating{product.rating}</h2>
  //         <h3> {product.title}</h3>
  //         <p>{product.description}</p>
  //         <p>{product.price}</p>
  //         <img src={product.image} alt=""/>
  //         </div>
  //       }

  return (
    <div>
      <h1>product</h1>
      {/* <Container>
      {loading ? <ShowSpinner/> : <ShowProduct/>}
      </Container> */}
    </div>
  )
}

export default Product