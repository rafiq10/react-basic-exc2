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
    let msgText = '';
    let mystyle = {};

    if(props.inputLength>5){
        msgText='Text too long';
        mystyle = invalidStyle;
    }
        else
    {
        msgText='Text valid';
        mystyle = validStyle;
    }
    return <p style={mystyle}>{msgText}</p>
}

export default ValidationComponent;