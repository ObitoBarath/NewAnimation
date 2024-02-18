import React, {useEffect, useReducer, useRef, useState} from "react";

import './LoaderLanding.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faPencil , faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import {load} from "three/examples/jsm/libs/opentype.module";
import PaySlipViewer from "./PaySlipViewer";

const  LoaderLanding = () => {

    let loadingBar = useRef();
    let wholeContent = useRef();
    let [icons , setIcons] = useState([]);
    let [timeLine , setTimeLine] = useState(false)

        const  fontOnClickEvent = event => {
            let current = loadingBar.current;
            current.className = " closeLoadingPanel"
            current.innerHTML = ""
            current.innerText = ""
            setTimeout(() => {
                setTimeLine(true);
            },2500)

        }
    useEffect(()=>{
        if (loadingBar.current !== null){
            console.log("12312")

            let fontList =[
                <FontAwesomeIcon icon={faHome} style={{color : "white" }} onClick={fontOnClickEvent}/> ,
                <FontAwesomeIcon icon={faPencil} style={{color : "white" }}/>,
                <FontAwesomeIcon icon={faNoteSticky} style={{color : "white"}}/>
            ]
            console.log("font list =>" ,fontList    )

            setTimeout(()=>{
                setIcons(fontList);

            },1500)






        }
    },[loadingBar])


    return(
        <>

        <div ref={wholeContent} className="dark-mode" style={{height : "100vh"  , width : "100vw"}}>
            <div className="parent_loading">
                <div ref={loadingBar} className="loadingBar">
                    {
                        icons
                    }
                </div>
            </div>
            {/*<div className="crossMoverUp"/>*/}
            {/*<div className="crossMoverDown"/>*/}
        </div>
            {timeLine && <PaySlipViewer/>}

        </>
    )
}

export default LoaderLanding