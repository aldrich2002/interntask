import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


const Word = ()=>{
    const[data,setdata]=useState();
    const location=useLocation()
    var wordie=location.state
    useEffect(()=>{
        axios.post('https://ggtask.herokuapp.com/find',wordie)
        .then(res=>{
            console.log(res.data[0])
            setdata(res.data[0].content)
        })
        .catch(err=>{
            console.log(err)
        })

  
},[])
if(data){
 return(
<div>
      {data.map((items, index) => {
        return (
          <ol>
            {items.map((subItems, sIndex) => {
              return <li> {subItems} </li>;
            })}
          </ol>
        );
      })}
    </div>
)
    }
    else{
        return(
            <h1>loading</h1>
        )
    }

}


export default Word