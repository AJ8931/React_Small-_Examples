import React from "react";

function App(){
    let greetings = "";
let currdate = new Date();
currdate = currdate.getHours();
const currenttime= new Date().toTimeString();
let CSSSTYLE = { }

if(currdate >= 1 && currdate < 12){
  greetings="Good Morning";
 CSSSTYLE.color="Green";
 console.log(currdate);
} else if(currdate >= 12 && currdate < 19){
  greetings="Good Afternoon";
 CSSSTYLE.color="Yellow";
 console.log(currdate);
}else{
  greetings="Good Night and have a Sweet Dreams";
  CSSSTYLE.color="darkBlue";
  console.log(currdate);
}


return (
    <><div className='greet'>
       <h1> Hello Sir, <span style={CSSSTYLE}>{greetings}</span></h1> 
       </div>
       <div>
       <p style={CSSSTYLE}>
         {`Today Time is ${currenttime}`}
       </p></div>
    </>);
}
export default App;