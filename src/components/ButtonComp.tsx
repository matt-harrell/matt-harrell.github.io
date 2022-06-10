import React from "react";

interface ButtonCompProps {
    handleClick:() => void;
    count:number;
}

const ButtonComp = (props:ButtonCompProps) => {
    return <button onClick={props.handleClick}>Times Pressed {props.count}</button>
}

export default ButtonComp;