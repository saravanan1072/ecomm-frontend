import axios from 'axios'
 export const ApiCaller=({url="" ,method='get' ,body={}})=>{
    return new Promise((resolve,reject)=>{
        const options ={method};
        if(Object.keys(body).length){
            options.body=body;

        }

        axios(url,options)
        .then((Response)=>{
            resolve(Response )
        })
        .catch((rej)=>reject(rej))


    })}
