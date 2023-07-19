import React from "react";
import HeaderPage from "../header/header";
import MainSection from "../main-section/main";
import Icons from "../icons/icons";
import Services from "../services/services";

const HomePage=()=>{
    return(
        <div className="homepage">
            <HeaderPage/>
            <MainSection/>
            <Icons/>
            <Services/>
        </div>
    )
        
}

export default HomePage;