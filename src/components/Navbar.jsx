import React from "react";
import blueBox from "../images/blue3.png"


export default function Navbar() {
    const style = {
        color: "white",
    }



    return (
        <div className="p-5">
            <nav class="mt-3 navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand" style={style} href="#">Renter.</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a class="nav-link active" style={style} aria-current="page" href="#">Invest</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style={style} href="#">Company</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <form class="container-fluid">
                                <button class="btn btn-primary me-2 btn-lg" type="button">Register</button>
                                <button class="btn btn-outline-light ms-2 btn-lg" type="button">Log In</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}