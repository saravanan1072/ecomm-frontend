import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../pages/Signin";
import "./Navbar.css";

export default function Navbar() {
  const selector=useSelector((store)=>store.reducer1)
  const navigate=useNavigate()
  const transfer=()=>{
    navigate("/signup")
  }
  return (
    <>
      <div className="header">
        <select name="language" id="language">
          <option value={"EN"}>EN</option>
        </select>
        <select name="doller" id="doller">
          <option value={"EN"}>$</option>
        </select>
        <span>
          {" "}
          <i className="fa-solid fa-user"></i>{login  ? login :<span onClick={transfer}>signup </span>}
        </span>
        <span>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>{selector} items</Link>  
        </span>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>{" "}
      <hr />
      <h1>E-SHOPPING</h1>
      <header>
        <nav className="navbar">
            <ul>
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/phone"> PHONE</Link></li>
               <li><Link to="/ipad"> IPAD</Link></li>
               <li><Link to="/laptop">LAPTOP</Link></li>
               <li><Link to="/accessories"> ACCESORIES</Link></li>

            </ul>

        </nav>
      </header>
    </>
  );
}
