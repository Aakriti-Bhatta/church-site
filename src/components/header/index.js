import React from "react"
import Button from "../../widgets/button";
import Title from "../../widgets/typography/title";
import "./header.css"
const Header = () =>{
    return(
        <div className="header">
    <h1 className="maintitle">SIMPLE CSS TEMPLATE</h1>
    <Title>WELCOME TO OUR CHURCH</Title>
    <Button>Join with us</Button>
    </div>
    
    );
}
export default Header;