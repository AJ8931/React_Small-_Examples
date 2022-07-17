import React from "react";

const App = () => {

    const image = "https://picsum.photos/200/300";
    const image1 = "https://picsum.photos/250/300";
    const image2 = "https://picsum.photos/300/300";
    const link = "https://picsum.photos/300/300";
    const heading = {
        textAlign: "center",
        color: "black",
        textTransform: "capitalize",
        textDecoration: "wavy",
        fontFamily: '"Times New Roman", Times, serif',
        fontWeight: "bold",
        textShadow: "0px 2px 4px rgb(200, 131, 209)",
        margin: "50px 0px ",
    };
    function refreshPage() {
        window.location.reload(false);
    }
    return (<>
        <h1 style={heading}>Random Image Generator</h1>
        <div className='images'>
            <a href={link} target="_blank">
                <img src={image} alt="RANDOME IMAGE" />
                <img src={image1} alt="RANDOME IMAGE" />
                <img src={image2} alt="RANDOME IMAGE" />
            </a>
        </div>
            <button onClick={refreshPage}>
                Reload
            </button>
    </>);
}
export default App;