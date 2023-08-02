import React from "react";
import "./doctor.styles.scss";
import DOCTOR_LIST from "../../data/doctor-list";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const DoctorList = () => {
  return (
    <section className="doctors">
      <h1>
        our<span>doctors</span>
      </h1>

      <div className="list-box">
        {DOCTOR_LIST.map((doctor) => (
          <div key={doctor.id} className="box">
            <img src={doctor.imageUrl} alt={doctor.name} />
            <h2>{doctor.name.toUpperCase()}</h2>
            <span>{doctor.experties}</span>
            <p>{doctor.degree}</p>
            <div className="social-media">
              <BiLogoFacebook />
              <BiLogoTwitter />
              <BiLogoInstagram />
              <BiLogoLinkedin />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorList;
