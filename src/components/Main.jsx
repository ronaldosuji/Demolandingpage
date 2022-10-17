import React from "react";
import Houseimage from "../images/house.jpg"

export default function Main() {

    const mainStyle={
        fontSize: "70px",
        color:"white",
        fontWeight:"1100",
        fontFamily:"Barlow, sans-serif"
    }

    return (
        <div class="container main">
            <div class="row mt-5">
                <div class="col-lg-6">
                    <h3 style={mainStyle}>Rental apartments. Find houses for rent from <span className="yellow">local people.</span></h3>
                    <br/>
                    <p class="mainp">Unforgettable trips with Renter. Find adventures nearby or in distant places and access unique homes, experience, and places around the world.</p>
                    <br/>
                    <div class="mt-5 mb-3">
                        <button type="button" class="btn btn-primary btn-lg">View properties</button>
                        <button type="button" class="btn btn-light btn-lg blue">Rent your properties</button>
                    </div>

                </div>
                <div class="col-lg-6">
                    <img src={Houseimage} />
                </div>
            </div>
        </div>
    )
}