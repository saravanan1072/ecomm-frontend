import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { removeToCart,decreatements, increatements, calculatePrice } from '../utilities/CartSlice';
import { reduce } from '../utilities/Slice';
export default function Cart() {
  const data=useSelector((store)=>store.cartReducer)
  const dispatch=useDispatch();
   const fun=(item)=>{
    dispatch(removeToCart(item))
  }
  const removeCart=async(item)=>{
   await fun(item)
   dispatch(reduce())
  }
  return (
    <>
    <div  className='cart-title'>Cart</div> <br/>
    <div className="cart-flex " style={{fontWeight:'bold' ,fontSize:'18px',color:'tomato'}}>
    <div className="cart-flex">Product Image</div>
    <div className="cart-flex">product Name</div>
    <div className="cart-flex">Quantity</div>
    <div className="cart-flex">price</div>
    <div className="cart-flex">Delete</div>

    </div><br/> <br/> 
   

      <div >
        { data?.cartItems.length > 0 ?  data?.cartItems?.map((item,index) => {
          return (
            <div className="cart-flex" key={item.item.id}>
              <div className='cart-child'><img  src={item.item.image} alt="images" width={"200px"} height={"150px"}/></div>
              <div className='cart-child'><b className="header-title">{item.item.title} </b> </div>
              <div className='cart-child'> <button onClick={()=>{
                dispatch(increatements(item))
                dispatch(calculatePrice())}}>+</button> 
                {item.quantity} <button onClick={()=>{
                  dispatch(decreatements(item))
                  dispatch(reduce())
                  dispatch( calculatePrice())
                }}>-</button> </div>

              <div className='cart-child'> <i className="fa-solid fa-indian-rupee-sign"></i> <b >{item.item.discountPrice} </b></div>
              <div className='cart-child'><button  className='remove-btn' onClick={()=>removeCart(index)}>Remove</button> </div>
              <br/> <br/> <br/> <br/> <br/> <br/> <br/>         
             
            </div>
          );
        }): <h2 style={{textAlign:'center'}}>No Items in Cart</h2>} 
       </div> 

       <div className='price-calculate'>
        <h2>summary</h2>
        <div>
        <div> subTotal :{data.subTotal}</div>
        <div>Shiping fee :{data.shipping}</div>
        <div>total :{data.total} </div>
        <button className='submit check'>Checkout</button>

        </div>
       

       </div>
    </>
    
  )
}
