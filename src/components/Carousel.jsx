import React from 'react'
import imageCard from '../assets/learns.jpg'


function Carousel( {images}) {
  return (
    <>
    
    <div className="carousel w-full">
        {images.map((image, index) => (
          <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" alt={`Image ${index}`} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default Carousel