import React from "react";
import "./book.styles.scss";
import CustomButton from "../custom-button/custom-button";
import Image from "../../assets/Virus Disinfection.gif"

const Book = () => {
  return (
    <section className="book">
    <h1><span>book</span>now</h1>
    <div className="row">
        <div className="image-container">
           <img src={Image} alt="book icon"/>
        </div>
        <form>
          <h3>Book Appointment</h3>
          <input type="text" placeholder="Full Name" required/>
          <input type="number" placeholder="Mobile No" required/>
          <input type="email" placeholder="Email" required/>
          <input type="date"  required/>
          <CustomButton label={"Book Now"}/>
        </form>
    </div>

    </section>




















//     <div className="book">
//       <h1>
//         book<span>now</span>
//       </h1>
//       <div className="row">
//         <div className="image-container">
//           <img src={Image} alt="book icon" />
//         </div>
//         <h3>Book Appointment</h3>

// {/* starting form */}
        
//         <form>
//           <input type="text" placeholder="Your Name" />
//           <input type="number" placeholder="Your Number" />
//           <input type="email" placeholder="Your Email" />
//           <input type="date" />
//           <CustomButton label={"Book Now"} />
//         </form>
// {/* ending form */}
//       </div>
//     </div>
  );
};

export default Book;
