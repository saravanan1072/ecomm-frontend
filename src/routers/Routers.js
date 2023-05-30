import React from 'react';
import '../style/style.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '..//pages/Home'
import Ipad from '../pages/Ipad';
import Laptop from "../pages/Laptop";
import Phone from "../pages/Phone";
import Accessories from '../pages/Accessories';
import Cart from '../pages/Cart';
import Signup from "../pages/Signup"
import Signin from '../pages/Signin'
import Payment from '../pages/Payment';
export default function Routers() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/> 
       
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/phone' element={<Phone/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/a' element={<Signup/>}/>

        <Route path='/cart/payment' element={<Payment/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>

    </Routes>
   
    </BrowserRouter>
    </>
  )
}
