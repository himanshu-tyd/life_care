import React from "react";
import "./main.scss";
import {ReactComponent as Logo} from "../../assets/Doctors-bro.svg";
import { Link } from "react-router-dom";



// image and title section

const MainSection = () => {
  return (
    <div className="home">

      <div className="img-container">
        <Logo className="img" />
      </div>

      {/* content section */}
      <section className="content">
        <h3>"Stay Safe ,Stay Healthy"</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          risus euismod, fermentum mi quis, rhoncus sapien. Maecenas tincidunt,
          turpis ac commodo convallis, orci mi posuere velit, eu ultricies purus
          arcu eu dolor. 
        </p>
        <Link >Contact Us<span>></span></Link>
      </section>

       {/* content section end */}
    </div>
   
  );
};

export default MainSection;
