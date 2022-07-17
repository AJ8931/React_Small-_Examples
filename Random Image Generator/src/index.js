
// var React=require("react");
// var ReactDOM=require("react-dom");

// ReactDOM.render(
// <React.Fragment>
// <h1 >Hello World</h1>
// <p>this is react tutorial i am learning</p>
// <button className="btn btn-primary">button</button>
// </React.Fragment>
// ,
//  document.getElementById("root"))
//  var heading=document.createElement("h1");
// heading.innerHTML= "HELLO WORLD >>>>>>>>>>>!!!!!!!!!";
// document.getElementById("root").appendChild(heading);
// import React from 'react';
// import ReactDOM from 'react-dom';

// const myname="anas";

// ReactDOM.render(
//     <>
//         <h1>my name is {myname}</h1>
//         <p>this is the favourites Seasons i liked to watch</p>
//         <ol>
//             <li>The EndGame</li>
//             <li>The EndGame</li>
//             <li>The EndGame</li>
//             <li>The EndGame</li>
//             <li>The EndGame</li>
//         </ol>

//     </>,document.getElementById("root")
// )
// import React from 'react';
// import ReactDOM from 'react-dom';

// const myname="anas jahangir";
// const currDate=new Date().toDateString();
// const currtime=new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//     <h1>
//         {`my name is ${myname}`}
//     </h1>
//     <p>
//         {`current time = ${currtime}`       
//         }
//     </p>
//     <p>
//         {`current Date = ${currDate}`       
//         }
//     </p>

//     </>, document.getElementById("root")
// )
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(
    <>
<App/>
</>,
    document.getElementById("root")
);
