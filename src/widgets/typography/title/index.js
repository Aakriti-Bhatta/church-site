import React from "react"
import "./title.css"
const Title = (props) =>{
    return(
        <h5 className={`title ${props.className}`}  style={{color:props.color}}  >{props.children}</h5>
    )
}
export default Title;