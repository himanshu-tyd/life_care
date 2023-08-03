import "./header.styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import MenuBar from "../menubar/menu-bar";

const HeaderPage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShow = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className="header">
      <Link className="logo-container">
        <BsFillHeartPulseFill className="logo" />
        <Link className="logo-title">Lifecare.</Link>
      </Link>
      <div className={showNavBar ? "navbar show" : "navbar"}>
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">About</Link>
        <Link to="/">Doctores</Link>
        <Link to="/">Book</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Revies</Link>
      </div>
      <MenuBar onClick={handleShow} />
    </div>
  );
};

export default HeaderPage;
