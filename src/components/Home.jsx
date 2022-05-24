import React from 'react'
import { Card } from 'react-bootstrap'
import Products from './Products';


export default function Home() {
  return (
    <div className='hero'>
        <Card className="bg-dark text-white border-0">
  <Card.Img src="https://source.unsplash.com/user/c_v_r/50x50" alt="Card image"  />
  <Card.ImgOverlay>
    <Card.Title className='display-3 fw-bolder mb-0'>New Season Arrivels</Card.Title>
    <Card.Text className='display-6 '>
  Chek out our new season products and get the best deals
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Products />
    </div>
  )
}

