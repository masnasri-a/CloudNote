import { useState } from "react";

const Button = (props:any) => {
    return(<>
        <button className="Button" onClick={(e)=>props.onClick(e)}> {props.title}</button>
    </>)
}

export default Button;