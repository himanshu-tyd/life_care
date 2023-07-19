import React from "react";
import {FaUserDoctor ,FaUser ,FaBed } from "react-icons/fa6";
import {FaHospitalSymbol} from "react-icons/fa"
import "./icons.styles.scss"


const Icons = () => {
  return (
    <section className="icon-container">
      <div className="icon">
        <FaUserDoctor className="fev"/>
        <h3>140+</h3>
        <p>doctore at work</p>
      </div>
      <div className="icon">
       <FaUser className="fev"/>
        <h3>1040+</h3>
        <p>satisfied patients</p>
      </div>
      <div className="icon">
        <FaBed className="fev"/>
        <h3>500+</h3>
        <p>bed facility</p>
      </div>
      <div className="icon">
      <FaHospitalSymbol className="fev"/>
        <h3>80+</h3>
        <p>availabe hospitels</p>
      </div>
    </section>
  );
};

export default Icons;
