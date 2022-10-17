
import React from "react";

export default function Booking(props) {

    return (
        
        <div  class="mt-5 ">
            <div class="bookingin">
                <i class={props.fa}/>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    )
}