import React from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { update } from '../utilities/Slice';
import { addtocart, calculatePrice } from "../utilities/CartSlice";

import Footer from "./Footer"
export default function Productdisplay(props) {
  const { data } = props;
  const dispatch=useDispatch();

const cartData=(item)=>{
  dispatch(addtocart(item))
  dispatch(calculatePrice())

}

  const addToCart=async(item)=>{
   await cartData(item)
    dispatch(update());
    
  

  }
  return (
    <div className="product">
      <div className="flex">
        {data.map((item) => {
          return (
            <div className="child " key={item.id}>
              <img className="child-image-size" src={item.image} alt="images" />
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
             
              <button className="add-to-cart"  onClick={()=>addToCart({item,quantity:1})}>Add to cart</button>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}










// import React from 'react';
// import Icon from '@mdi/react';
// import { mdiMinus, mdiPlus } from '@mdi/js';

// import './AddToCart.scss';

// import { useCartDispatch, useCartState } from 'cart-context';

// function AddToCard({ product }) {
//   const { products } = useCartState();
//   const dispatch = useCartDispatch();

//   const cartEntry = products[product.id];

//   if (cartEntry) {
//     return (
//       <div className="add-to-cart">
//         <button
//           className="add-to-cart__action add-to-cart__action--minus"
//           onClick={() => dispatch({ type: 'decrement', payload: product })}
//         >
//           <Icon className="add-to-cart__icon" size={1.2} path={mdiMinus} />
//         </button>
//         <div className="add-to-cart__quantity">{cartEntry.quantity}</div>
//         <button
//           className="add-to-cart__action add-to-cart__action--plus"
//           onClick={() => dispatch({ type: 'increment', payload: product })}
//         >
//           <Icon className="add-to-cart__icon" size={1.2} path={mdiPlus} />
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <button
//         className="add-to-cart-button"
//         onClick={() => dispatch({ type: 'increment', payload: product })}
//       >
//         Add to cart
//       </button>
//     );
//   }
// }

// export default AddToCard;
