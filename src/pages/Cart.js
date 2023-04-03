import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increatement,decreatement } from '../utilities/cartIncrDecr';
import { removeToCart } from '../utilities/CartSlice';
import { reduce } from '../utilities/Slice';
export default function Cart() {
  const data=useSelector((store)=>store.cartReducer)
  const value=useSelector((store)=>store.incrdecr)
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
    <div  className='cart-title'>cart</div> <br/>
      <div >
        {data?.cartItems?.map((item,index) => {
          return (
            <div className="cart-flex" key={item.index}>
              <div className='cart-child'><img  src={item.image} alt="images" width={"200px"} height={"150px"}/></div>
              <div className='cart-child'><b className="header-title">{item.title} </b> </div>
              <div className='cart-child'> <button onClick={()=>dispatch(increatement())}>+</button> {value} <button onClick={()=>dispatch(decreatement())}>-</button> </div>

              <div className='cart-child'> <i className="fa-solid fa-indian-rupee-sign"></i> <b >{item.discountPrice} </b></div>
              <div className='cart-child'><button  className='remove-btn' onClick={()=>removeCart(index)}>Remove</button> </div>
              <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                      
             
            </div>
          );
        })} 
       </div> 
    </>
    
  )
}
