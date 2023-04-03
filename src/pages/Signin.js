

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
let login;
export default function Form() {
  const url="https://ecombackend-nr3r.onrender.com/signin";

  const [data1, setData] = useState({ email: "", password: "", });
  const navigate=useNavigate()
 const userData=async()=>{
 await axios.get(url).then((res)=>{
 login=res.data;
alert("login sucessfully")
  console.log(res);
}).catch((err)=>{console.log(err);})
}


const handledata=async(e)=>{
  e.preventDefault()
 await axios.post(url,data1)
  
   await userData()
   navigate("/")
  
}
 const handleChange = (e) => {
  
    setData({ ...data1, [e.target.name]: e.target.value });
  };
  return (
      <div className="container">
        <h1>LOGIN FORM</h1>
        <form onSubmit={handledata}>
        
          <label htmlFor="email">Email : </label>
          <input
            required
            type="email"
            id="email"
            value={data1.email}
            name="email"
            onChange={handleChange}
            placeholder="enter a email here!..."
          />
          <br></br>
          <label htmlFor="form">password : </label>
          <input
            required
            type="password"
            id="password"
            value={data1.password}
            name="password"
            onChange={handleChange}
            placeholder="password?..."
          />
         
           <br></br>
          <button type="submit" className="submit" >
          Submit
        </button>
        </form>

        <div className="forms">
          Already a customer <Link to={"/signup"}><b className="hover">signUp</b></Link>
        </div>
      
      </div>
  )
}
export {login};