import React from "react";
import "./review.styles.scss";
import REVIEWS from "../../data/review-data";
import StarRating from "../star-rating/star-rate";

const Reviews=()=>{
    return(
        <div className="review">
            <h1>client's <span>Revies</span></h1>

        <div className="box-container">
          {
            REVIEWS.map((list)=>(
                <div id={list.id} className="box">
                    <img src={list.imageUrl} alt={list.name}/>
                    <h3>{list.name}</h3>
                    <StarRating totalStars={5}/>
                    <p >{list.review}</p>
                </div>
            ))
          }
            </div>
        </div>
    )
}

export default Reviews