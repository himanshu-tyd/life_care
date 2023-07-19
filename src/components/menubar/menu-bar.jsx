import React, { useState } from "react";
import "./menu-bar.scss"
import { FaBars } from 'react-icons/fa';
import { GrClose } from "react-icons/gr"




const MenuBar=({onClick})=>{

    const [isOpen , setIsOpen]=useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
        onClick();
    }

    return(
        <div className="menu-container" onClick={handleClick}>
        {

        isOpen ?<GrClose className="nav-bar"/>: <FaBars className="nav-bar"/>
       
        }
        </div>
    )
}

export default MenuBar;