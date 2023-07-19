import React from "react";
import "./services.styles.scss";
import { Link } from "react-router-dom";
import {TbCheckupList} from "react-icons/tb";
import {FaAmbulance } from "react-icons/fa";
import {FaUserDoctor } from "react-icons/fa6";
import {GiMedicines } from "react-icons/gi";
import {BiSolidBed } from "react-icons/bi";
import {BsHeartPulseFill } from "react-icons/bs";



const Services = () => {
  return (
    <section className="services">
      <h1>
        Our<span>services</span>
      </h1>
      <div className="box-container">
        <div className="box">
        <TbCheckupList className="icon"/>
          <h3>free checkups</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link className="btn">
            Learn More <span className="rigth">></span>
          </Link>
        </div>
        <div className="box">
        <FaAmbulance className="icon"/>
          <h3>24/7 ambulence</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link className="btn">
            Learn More <span className="rigth">></span>
          </Link>
        </div>
        <div className="box">
        <FaUserDoctor className="icon"/>
          <h3>experte doctores</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link className="btn">
            Learn More <span className="rigth">></span>
          </Link>
        </div>
        <div className="box">
        <GiMedicines className="icon"/>
          <h3>medicines</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link className="btn">
            Learn More <span className="rigth">></span>
          </Link>
        </div>
        <div className="box">
        <BiSolidBed className="icon"/>
          <h3>bed facility</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link className="btn">
            Learn More <span className="rigth">></span>
          </Link>
        </div>
        <div className="box">
        <BsHeartPulseFill className="icon"/>
          <h3>total care</h3>
          <p>lorem ipsum dolor sit amet consect',</p>
          <Link >
            Learn More <span className="rigth">></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
