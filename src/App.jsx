import React from "react";
import {useSelector, useDispatch} from "react-redux";
import './App.css'
import NavBar from "./components/NavBar";
import Jombotron from "./components/Jombotron";
import Sound from "./components/Sound";
import WebgiViewer from "./components/WebgiViewer.jsx";
import {addToCart} from "./Ecommerce-Site/Slicer";
import store from "./Ecommerce-Site/Store";

const App = (props) => {
    console.log(document.getElementById('my3d'))
    return (
        <div>
        </div>
    )
}
export default App;
