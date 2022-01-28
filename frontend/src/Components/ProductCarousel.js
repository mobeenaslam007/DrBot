import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Image, Carousel } from "react-bootstrap";
import CarouselImages from './CarouselImages';

console.log(CarouselImages)

function ProductCarousel() {
  
  return (
    <Carousel
      pause="hover"
      style={{
        // backgroundImage: `url("https://i.postimg.cc/gkQ0gqhd/dLB5ai0.jpg")`,
      }}
    >
      {CarouselImages.map((image, index) => (
        <Carousel.Item
          key={index}
          className="product-carousel product-carousel-item-next product-carousel-item-prev product-carousel-item.active"
        >
        
            <Image src={image} alt=""  height="800px" fluid />
            <Carousel.Caption className="product-carousel-caption">
              
            </Carousel.Caption>
          
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel;
