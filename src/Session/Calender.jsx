import React, {useState} from "react";
import './Calender.css'
import {add} from '../reducer'





const Calender = () => {
    const [selected,setSelected] = useState(null);


    function createHTMLElementForCalendar1() {
        const elements = [];
        for (let i = 1; i <= 31; i++) {
            elements.push(
                <div key={i} id={'date_'+i} onClick={(e) => setSelected(e.target.id.split('_')[1]) }  className="date col-1">
                    {i}
                </div>
            );

        }
        return elements;
    }
  console.log("selected  =>" , selected)
    // add({payload : })



    return(
        <div className='row '>
            {
                createHTMLElementForCalendar1()
            }
        </div>
    )
}
export default Calender;