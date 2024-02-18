import React, {useEffect, useState} from "react";
import * as FontAwesome from "@fortawesome/free-solid-svg-icons";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";




export  const UserDetails = () => {
            const  [userData , setUserData] = useState(null)
            const [dummyData  , setDummyData] = useState();
        let userDetailsNameAndValues = [
            { name  : "Name" , value : "Barath"},
            { name  : "Branch Name" , value : "Chennai / Adayar"},
            { name  : "Address" , value : "xxx,yyy,zzz,aaa,600062"},
            // { name  : "Name" , value : "Barath"},
            // { name  : "Name" , value : "Barath"},
            // { name  : "Name" , value : "Barath"},
            ]
    const [position, setPosition] = useState('center');
    const [displayPosition, setDisplayPosition] = useState(false);

    const dialogFuncMap = {

        'displayPosition': setDisplayPosition,
    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    let DialougBox = (
        <div className="card">
        <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                draggable={false} resizable={false}>
            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Dialog>
        </div>
    )

    let title = (
        <>
        <div style={{ fontFamily : "newFont" ,color : "black" , fontSize : "xxx-large" , height : "100%"}} >
            <label>U s e r  D e t a i l s </label></div>
       </>
    )
    let userDataHtmlComponents = (
        userDetailsNameAndValues.map( (item , index) =>{

                return (
                    <>
                        <div key={index}  className="col-6">
                            <div className="row">
                            <div className=" col-6"/>
                            <div className="col-4">
                                <label>{item.name} </label>
                            </div>
                                <div className=" col-2 "> :</div>
                            </div>
                        </div>
                        <div key={index+1} className="col-6"><label>{item.value}</label></div>
                    </>
                )
            }
        )
    )

        useEffect(() => {
            setUserData(userDataHtmlComponents)
        } , [] )


    return(
        <>

            <div className="container" style={{backgroundColor : "black" , height  : window.innerHeight , width : window.innerWidth} }>
                <div className="row" style={{color : "white", height : "100%"}}>
                    <div className="col-12" style={{height : "100%"}}>
                        <div className="row " style={{height :"10%"}}>
                            <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />

                            <div  className="col-12" style={{height : "100%", backgroundColor : "white" , textAlign : "center"}}>
                            {
                                DialougBox
                            }
                        </div>
                        </div>
                        <div className="row" style={{backgroundColor: "red"}}>
                            {
                                userData
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

