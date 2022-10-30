import { useState } from "react";

const Button = (props:any) => {
    const width = props.width ? props.width : "413px"
    const height = props.height ? props.height : "55px"
    return(<>
        <button className="Button" style={{"height":height, "width":width}}  onClick={(e)=>props.onClick(e)}> {props.title}</button>
    </>)
}

export default Button;