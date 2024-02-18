import React, {useEffect, useRef} from "react";
import './Login.css'
import Calender from "./Calender";
import {useDispatch} from "react-redux";
// import './3DObjectLoader'


export const Login = () => {



  const second3dObjectId = useRef(null);

  useEffect(() => {
      second3dObjectId.current = document.getElementById('second3dObject')
      console.log("second3DObject =>" , second3dObjectId)
  },[])

    return (
        <>
        <div className='row' style={{height : '99.9vh' , width : '100.8vw'}} id='3dObject'>
            <div className='col-md-12'>
                <div className='row' style={{height : '100%'}}>
                    <div className='col-6' id='calenderPanel' style={{height : '100%' , backgroundColor : 'purple' }}><Calender/></div>
            <div className='col-6' style={{height : '100%' , backgroundColor : 'blue' , padding : '2rem'}}>

                <div className='row'>
                    <div className='col-12' style={{height :  '31rem', backgroundColor : "yellow"}}>
                        <div className='row'>
                            <div className='col-8 title-panel' style={{height : "10rem", backgroundColor : "white"}}>
                                <label className='area-label'>Bangalore</label>
                            </div>
                            <div className='col-4' id='second3dObject' style={{height : "10rem", backgroundColor : "grey"}}/>
                        </div>
                    </div>
                    <div className='col-12' style={{height :  '10rem', backgroundColor : "yellow"}}>{}</div>

                </div>


            </div>


                </div>
            </div>
        </div>
            </>
    )
}
export default Login
