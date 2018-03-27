import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
    <div className="myChar">{props.myChar}</div>
    )
}

export default CharComponent;