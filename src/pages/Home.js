import React from 'react';
import iphone from '../images/iphone.png';
import shipping from '../images/shipping.svg';
import support from '../images/support.svg';
import refund from '../images/refund.svg';
import Rating from "../common/Rating";
import { update } from '../utilities/Slice'
import { useDispatch } from "react-redux";
import { ApiCaller } from '../Apicaller/Apicaller';
import { useEffect,useState } from 'react';
import Footer from "../common/Footer";
import Navbar from '../utilities/Navbar';
import Carosel from '../common/Carosal';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home() {
  const [state,setState]=useState([])
  const [product,setProduct]=useState([]);
  const [future,setFuture]=useState([]);
  useEffect(()=>{
    ApiCaller({url:"https://ecombackend-nr3r.onrender.com/homecaro",
    method:"get"
  })
.then((res)=>setState(res.data))
.catch((rej)=>{console.log(rej)})

ApiCaller({url:"https://ecombackend-nr3r.onrender.com/futurecaro",
method:"get"
})
.then((res)=>{
setFuture(res.data)
console.log(res.data)
}
)
.catch((rej)=>{console.log(rej)})

ApiCaller({url:"https://ecombackend-nr3r.onrender.com/home",
method:"get"
})
.then((res)=>setProduct(res.data))
.catch((rej)=>{console.log(rej)})
  },[])
 const dispatch=useDispatch();
 const addToCart=()=>{
    dispatch(update());

 }
  const handleLoad=()=>{
    console.log("fun");
    
    product?.slice(6,9).map((item) => {
      return (
        <div className="Hbestseller " key={item.id}>
          <img className="Hchild-image-size" src={item.image} alt="images" />
          <br />
          <b className="header">
            <b className="header-title">{item.title} </b>
          </b>
          <br />
           <Rating maxRating={5} rating={item.rating} />     
          <span className="hprice">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <b className="mrp-price">M.R.P :{item.discountPrice}</b>
            </span>
         
          <br /> <br/>
          <button className="add-to-cart"  onClick={addToCart}>Add to cart</button>
        </div>
      );
    })
  

  }
  return (
    <>
    <Navbar/>
    <div className='phone'>
      {/* <div className='iphone-center'>
        <img src={iphone} className="iphone" alt='pictures'/></div> */}
        <Carosel data={state}/>
    </div>
    <h2 className='best'>Best seller </h2>
    <div id='home-body'>

    {product?.slice(0,6).map((item) => {
          return (
            <div className="Hbestseller " key={item.id}>
              <img className="Hchild-image-size" src={item.image} alt="images" />
              <br />
              <b className="header">
                <b className="header-title">{item.title} </b>
              </b>
              <br />
               <Rating maxRating={5} rating={item.rating} />     
              <span className="hprice">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <b className="mrp-price">M.R.P :{item.discountPrice}</b>
                </span>
             
              <br /> <br/>
              <button className="add-to-cart"  onClick={addToCart}>Add to cart</button>
            </div>
          );
        })}

       
  
    
    
    
    </div>
    <button className='submit' onClick={handleLoad}>Load More</button>


    <div className='homebody'>
      <div className='iphone-center'>
        <img src={iphone}  alt='pictures' width={"300px"} height={"340px"}/></div>
    </div>

    <div className='home-footer'>
      <div className='home-footer-child'>
        <img src={shipping} alt=" shipping"/> <br/>
        <p  className='bold'>FREE SHIPPING</p>
        <div className='text'>The package has been loaded on a truck and departed for the final distribution center. That means the package could be anywhere between the origin location and the destination termina</div>
      </div>
      <div className='home-footer-child'>
        <img src={refund} alt=" refund"/> <br/>
        <p className='bold' >100% REFUND</p>
        <div className='text'>A refund is when you have charged a payer, and need to cancel the payment and return the funds to the payer.</div>
        </div>
      <div className='home-footer-child'>
        <img src={support} alt=" support"/> <br/>
        <p className='bold'>SUPPORT 24/7</p>
        <div className='text'> Giving assistance or support to customer  to provide help with something that is useful or necessary in achieving in an order.</div>
      </div>
    </div>
    <h1>Feature products</h1>
   <div>

         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {future?.map((item) => {
          return (
            <div className="Hbestseller" key={item.id}>
             <SwiperSlide key={item.id}> <img className="Hchild-image-size" src={item.image} alt="images" /></SwiperSlide>
              <br />
            </div>
          );
        })}
        
    </Swiper>
    
   </div>

  



<Footer/>

   
    </>
    
  )
}
