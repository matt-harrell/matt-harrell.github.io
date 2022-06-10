import { FC } from "react";
import { useState } from "react";
import ButtonComp from "../components/ButtonComp";
// import ButtonComp from "../components/ButtonComp";


 


const ButtonCont = () => {
    

    const [count,setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }
    
    return (
    // <button onClick={handleClick}>Click me {count}</button>
    // <button onClick={() => setCount(count+1)}>times pressed {count}</button>
    <ButtonComp handleClick={handleClick} count={count}/>
    );
}

export default ButtonCont;