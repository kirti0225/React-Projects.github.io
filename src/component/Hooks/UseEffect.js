import React, { useState, useEffect } from 'react'
import './style.css';

const UseEffect= ()=>{
    const initial1data=0;
    const [myNum, setMyNum]= useState(initial1data);
    useEffect(()=>{
        document.title=`Chats(${myNum})`
    })
    return(
        <>
        <div className="center_div">
       <p>{myNum}</p>
       <div className="button2"onClick={()=>setMyNum(myNum+1)}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           INCR
       </div>
       </div>
       </>
    )
}
export default UseEffect;