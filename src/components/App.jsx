import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Booking from "./Booking";

export default function App() {
    return (
        <div>
            <div class="center">
            <Navbar />

                <Main />
            </div>
            <div class="container booking text-center">
                <div class="row">
                    <div class="col-lg-3 col-sm-12">
                        <Booking title="airbnb" content="Our main partner" fa="fa-brands fa-airbnb"/>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <Booking title="Hilton" content="Financial market regulator" />
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <Booking title="Booking.com" content="Auditor and tax advisor" />
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <Booking title="MAGNUSON" content="Our legal partner" />
                    </div>
                </div>
            </div>
        </div>
    )
}