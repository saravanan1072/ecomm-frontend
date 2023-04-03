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
export default function Home() {
  const [state,setState]=useState([])
  const [product,setProduct]=useState()
  useEffect(()=>{
    ApiCaller({url:"https://ecombackend-nr3r.onrender.com/homecaro",
    method:"get"
  })
.then((res)=>setState(res.data))
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
  console.log(state)
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

    {product?.map((item) => {
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


    <div className='homebody'>
      <div className='iphone-center'>
        <img src={iphone}  alt='pictures' width={"300px"} height={"340px"}/></div>
    </div>

    <div className='home-footer'>
      <div className='home-footer-child'>
        <img src={shipping} alt=" shipping"/> <br/>
        <p  className='bold'>FREE SHIPPING</p>
        <div className='text'>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</div>
      </div>
      <div className='home-footer-child'>
        <img src={refund} alt=" refund"/> <br/>
        <p className='bold' >100% REFUND</p>
        <div className='text'>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</div>
        </div>
      <div className='home-footer-child'>
        <img src={support} alt=" support"/> <br/>
        <p className='bold'>SUPPORT 24/7</p>
        <div className='text'>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</div>
      </div>
    </div>

   <div><h1>Feature products</h1></div>

  



<Footer/>

   
    </>
    
  )
}
