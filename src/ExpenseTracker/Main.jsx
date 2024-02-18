
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import {getCardLayout} from "./ComponentUtils";

const Main  = () => {



    return(
        <>

            <div className="col-12" style={{height : window.innerHeight }}>
                <div className="row" style={{height : "100%"}}>
                <div className="col-8" style={{height : "100%", backgroundColor : "black " }}/>
                    <div className='col-4' style={{padding : 0}}>
                        <div className="col-12" style={{display : "flex" , flexDirection : "column" , rowGap  :"0.3rem" , backgroundColor : "red" , height : "100%" , overflow : "auto" }}>
                        {

                            getCardLayout()
                        }
                        </div>

                    </div>
                </div>
            </div>



         </>
    )
}

export default Main;