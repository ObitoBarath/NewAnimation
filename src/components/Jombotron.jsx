import React from "react";
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from  '../assets/images/iphone-hand.png';

const Jombotron = () => {
    return(


        <div className="jumbotron-section wrapper">
                <h2 className="title">New</h2>
                <img className="logo" src={Iphone} alt="Iphone 14 pro"/>
                <p className="text">Big and Bigger</p>
            <span className="description">
                From $41.62/mo for 24 mo. or  $999 before trade-in
            </span>
            <ul className="links">
                <li>   <button className="button" >Buy</button> </li>
                <li>   <a className="link" >Learn more</a> </li>
            </ul>
            <img  style={{marginLeft : "22rem"}} src={HoldingIphone} alt="Holding iPhone"/>
        </div>

    )
}

export  default Jombotron;