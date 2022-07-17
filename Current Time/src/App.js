import React, { useState } from "react";


const Time=()=>{
  // let timezone= new Date().toLocaleTimeString();
  let [time, timezone]=useState(new Date().toLocaleTimeString());
  const Ctime=()=>{
timezone(new Date().toLocaleTimeString());
  }
  
setInterval(Ctime, 1000);
  return(
    <>
    <h1>Current Time</h1>
      <h1 className="second-Head">{time}</h1>
    </>
  );
}
export default Time;