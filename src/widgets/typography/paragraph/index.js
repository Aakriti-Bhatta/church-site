import React from "react"
import "./paragraph.css"

const Para = (props) =>{
    return<p className="para" style={{color:props.color}}>{props.children}</p>
}
export default Para;