import React from "react";


export const getCardLayout = () => {
let listOfCardLayout = []
    listOfCardLayout.push(<div className="grid " style={{ height : "12%",borderRadius :"5px" , backgroundColor : "grey" , borderLeft : "5px yellow solid" }}>

            <div className="grid" style={{display : 'flex' ,  alignItems : "center"}}>
                <div  className="col-10" style={{height : "1rem",backgroundColor : "blue" , width :"50%"}}/>
                <div  className= "col-2" style={{height : "1rem" , backgroundColor : "purple" , width : "50%"}}/>
            </div>


    </div>)
return listOfCardLayout
}
