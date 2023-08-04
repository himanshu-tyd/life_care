import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTwitter,
} from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick links</h3>
          <Link to="/"> <span>&gt;</span>   Home  </Link>
          <Link to="/"> <span>&gt;</span>  Services </Link>
          <Link to="/"> <span>&gt;</span>  About  </Link>
          <Link to="/"> <span>&gt;</span>  Doctor  </Link>
          <Link to="/"> <span>&gt;</span>  Book  </Link>
          <Link to="/"> <span>&gt;</span>  Revies  </Link>
        </div>
        <div className="box">
          <h3>Our Services</h3>
          <Link to="/"> <span>&gt;</span>  Dental care  </Link>
          <Link to="/"> <span>&gt;</span>  Massage Therapy </Link>
          <Link to="/"> <span>&gt;</span>  Cardiology  </Link>
          <Link to="/"> <span>&gt;</span>  Diagnosis  </Link>
          <Link to="/"> <span>&gt;</span>  Ambulance Service  </Link>
        </div>
        <div className="box">
          <h3>Contact info</h3>
          <Link to="/">
            <AiFillPhone  className="icon"/>
            +123-456-789
          </Link>
          <Link to="/">
            <BiLogoGmail className="icon"/>
            lifecare.in@gmail.com
          </Link>
          <Link to="/">
            {" "}
            <MdLocationOn className="icon"/>
            Ahmdabad-India, 380009
          </Link>
        </div>
        <div className="box">
          <h3>Follow us</h3>
          <Link to="/">
            <BiLogoFacebook className="icon"/>
            Facebook
          </Link>
          <Link to="/">
            <BiLogoInstagram className="icon"/>
            Instagram{" "}
          </Link>
          <Link to="/">
            <BiLogoTwitter className="icon"/>
            Twitter
          </Link>
          <Link to="/">
            <BiLogoLinkedin className="icon"/>
            Linkedin
          </Link>
          <Link to="/">
            <BiLogoPinterest className="icon"/>
            Pinterest
          </Link>
        </div>
      </div>

      <div className="credit">
        Created by <span>LifeCare Orginization </span> | All rigths reserved
      </div>
    </section>
  );
};

export default Footer;
