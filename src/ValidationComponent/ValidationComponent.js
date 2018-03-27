import React from 'react';

const ValidationComponent = (props) =>{
    const invalidStyle = {
        border: "solid red 1px",
        width: "20%",
        padding: "8px",
        margin: "8px"
    }
    const validStyle = {
        border: "solid #eee 1px",
        width: "20%",
        padding: "8px",
        margin: "8px"
    }

    if(props.theWord.length>5){
        return (<div style={invalidStyle}><p >Text too long</p></div>);
    }
        else
    {
        return (<p style={validStyle}>Text valid</p>);
    }
}

export default ValidationComponent;