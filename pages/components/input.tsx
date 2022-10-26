import { useState } from "react";

const Input = (props:any) => {
    const [value, setValue] = useState("")
    return(<div className="InputForm">
        <span className="titleInput">{props.title}</span>
        <br />
        <input className="Input" type={props.title == "Password"?"password":"text"} placeholder={props.title} value={value} onChange={(e)=> {
            props.onChange(e.target.value)
            setValue(e.target.value)
        }}/>
    </div>)
}

export default Input;