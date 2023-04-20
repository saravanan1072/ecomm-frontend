import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { empty } from '../utilities/Slice';
import { removeToCart,decreatements, increatements, calculatePrice,emptycartItem } from '../utilities/CartSlice';
import { reduce } from '../utilities/Slice';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const data=useSelector((store)=>store.cartReducer)
  const selector=useSelector((store)=>store.reducer1)
  const dispatch=useDispatch();
  const navigate=useNavigate()
   const fun=(item)=>{
    dispatch(removeToCart(item))
  }
  const removeCart=async(item)=>{
   await fun(item)
   dispatch(reduce())
  }


const payment=()=>{

  //<button id="rzp-button1">Pay with Razorpay</button>


  var orderId ;
$(document).ready(function(){
    var settings = {
  "url": "https://ecombackend-nr3r.onrender.com/create/order",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "amount": data.total*100
  }),
};


//creates new orderId everytime
$.ajax(settings).done(function (response) {

  orderId=response.orderId;
  console.log(orderId);
  $("button").show();
});
});


document.getElementById('rzp-button1').onclick = function(e){
 
  var options = {
    "key": "rzp_test_Hk1Cj8n9Wbk9zP", // Enter the Key ID generated from the Dashboard
    "amount": data.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "E-SHOPPING",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
        dispatch(emptycartItem())
        dispatch(empty())
       
        navigate('/')

        var settings = {
          "url": "https://ecombackend-nr3r.onrender.com/api/payment/verify",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/json"
          },
          "data": JSON.stringify({response}),
        }
   
//creates new orderId everytime
$.ajax(settings).done(function (response) {

  alert(JSON.stringify(response))

}) },

"theme": {
  "color": "#3399cc"
}
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
rzp1.open();
e.preventDefault();
}







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
        <button className='submit check' id="rzp-button1" onClick={payment}>Checkout</button>

        </div>
       

       </div>
    </>
    
  )
}
