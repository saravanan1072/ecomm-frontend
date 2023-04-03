import {useEffect,useState} from 'react'
import {ApiCaller} from '../Apicaller/Apicaller';
import Carosel from '../common/Carosal';
import Productdisplay from '../common/Productdisplay';
import Navbar from '../utilities/Navbar';

export default function Phone() {
  const [state,setState]=useState([]);
  const [productData,setProductData]=useState([])
  useEffect(()=>{
    ApiCaller({url:"https://ecombackend-nr3r.onrender.com/padcarosal",
                method:"get"
              })
    .then((res)=>setState(res.data))
    .catch((rej)=>{console.log(rej)});

    


    ApiCaller({url:"https://ecombackend-nr3r.onrender.com/pad",
    method:"get"
  })
.then((res)=>setProductData(res.data))
.catch((rej)=>{console.log(rej)})
  },[])

  return (

    <>
    <Navbar/>
     <div className='phone'>
      
     <Carosel  data={state}/>
    <Productdisplay data={productData}/>


    </div>
    
    </>
   
   
  )
}
