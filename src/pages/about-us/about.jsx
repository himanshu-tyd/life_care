import React from "react";
import "./about.styles.scss";
import CustomButton from "../../components/custom-button/custom-button";
import { ReactComponent as Doctor } from "../../assets/life.svg";

const AboutPage = ({ label }) => {
  return (
    <section className="about">
      <h1 className="heading">
        about <span>us</span>
      </h1>

      <div className="row">
        <div className="image">
          <Doctor className="img" />
        </div>

        <div className="content">
          <h3>we take care of your healthy life</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet risus euismod, fermentum mi quis, rhoncus sapien. Maecenas
            tincidunt, turpis ac commodo convallis, orci mi posuere velit, eu
            ultricies purus arcu eu dolor.{" "}
          </p>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet risus euismod,{" "}
          </p>
          <CustomButton label={"learn More"} />
        </div>
      </div>
     
    </section>
  );
};

export default AboutPage;
