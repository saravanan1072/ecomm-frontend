import React from 'react'
import Carousel from 'nuka-carousel'
import './carousel.css'
const Carosel=(props)=>{
    const {data}=props;
   // console.log(data)
    return(
            <div className='Carousel'>
            <Carousel  className='pic'  autoplay={true} autoplayInterval={3000} autoplayReverse={true} >
               
                {data.map((item, index) => {
            return (
              <div className="childrens" key={index}>
                <img className="img-size" 
                //onClick={() => handleNavigation(item, index)}
                 src={item.image} alt="images" />
                </div>
                )
            })}

            </Carousel>
            </div>
    )
}
export default Carosel;
