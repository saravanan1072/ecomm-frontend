import {useEffect,useState} from 'react'
import {ApiCaller} from '../Apicaller/Apicaller';
import Rating from '../common/Rating';
import { useDispatch, useSelector } from "react-redux";
import { update } from '../utilities/Slice'
import Carosel from '../common/Carosal';
import Footer from "../common/Footer";
import { addtocart } from "../utilities/CartSlice";
import Navbar from '../utilities/Navbar';


export default function Phone() {
  const [state,setState]=useState([])
  const [productData,setProductData]=useState([])
  useEffect(()=>{
    ApiCaller({url:"https://ecombackend-nr3r.onrender.com/laptop",
    method:"get"
  })
.then((res)=>setProductData(res.data))
.catch((rej)=>{console.log(rej)})
ApiCaller({url:"https://ecombackend-nr3r.onrender.com/lapcaro",
method:"get"
})
.then((res)=>setState(res.data))
.catch((rej)=>{console.log(rej)})
  },[])


  const select=useSelector((store)=>store.reducer1);
  console.log(select)
 const dispatch=useDispatch();
 const cartData=(item)=>{
  dispatch(addtocart(item))

}

  const addToCart=async(item)=>{
   await cartData(item)
    dispatch(update());
  

  }
  return (
    <>
    <Navbar/>
    <div className='phone'>
      
       <Carosel  data={state}/>
     
     <div className="flex">
     {productData.map((item) => {
          return (
            <div className="child " key={item.id}>
              <img className="child-image-size lap" src={item.image} alt="images"  />
              <br />
              <b className="header">
                <b className="header-title">{item.title} </b>
                <b className="header-description"> {`(${item.description})`}</b>
              </b>
              <br />
               <Rating maxRating={5} rating={item.rating} />
               <div className="rating-label">{`(${item.ratingCount} Ratings)`}</div>
                      
              <span className="price">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <b className="discount-price" >{`${item.discountPrice} `}</b>
                <b className="mrp-price">M.R.P : <b className="actuual-price">{item?.actualPrice}</b> {`(${item?.discount}% off)`}</b>
              </span>
              <br /> <br/>
              <button className="add-to-cart"  onClick={()=>addToCart(item)}>Add to cart</button>
            </div>
          );
        })}
        </div>
        <Footer/>



    </div>
    </>
    
   
  )
}

