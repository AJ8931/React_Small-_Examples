import React, { useState } from "react";

const App=()=>{
  const purple="#FF0000"
  const [ bg , bgstate ]=useState(purple);
  const [name, nameState]=useState('Click Me');
  const coloring=()=>{
    bgstate("#FFFF00");
    nameState('ouch!!😛 ');
  }
  const reset=()=>{
    bgstate(purple);
    nameState('Ayyo!!!😔 ');

  }
  return(
    <>
    <div  style={{backgroundColor: bg}}
    >
    <button onClick={coloring} onDoubleClick={reset}> {name} </button>
    </div>
    </>
  );
}

export default App;
