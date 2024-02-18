import React from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import './PaySlipViewer.css'

const PaySlipViewer = () => {
    const getCard = left => (
        <div className={left ? "left"+"customCardPanel" : "right" +"customCardPanel"} style={{
            backgroundColor: "white",
            height: "15rem",
            width: '15rem',
            borderRadius: "1rem",
            overflow: "auto",
            opacity :0
        }}>
            <div className="customCardPanel-header" style={{height: "20%"}}>
            </div>
            <div className="customCardPanel-body" style={{height: "80%"}}>
                <div className="customCardPanel-main">

                </div>
                <div className="customCardPanel-footer"/>
            </div>
        </div>
    )


    function getTimeLine(){
        return (
            <>
                <div className="col-6 left-container-panel" style={{height: "15rem", backgroundColor: "transparent"}}>
                    <div className="row">
                        <div className="col-4" style={{padding: 0}}>
                            {
                                getCard(true)
                            }
                        </div>
                        <div className=" col-8 "
                             style={{display: "flex", alignItems: "center", padding: 0, paddingLeft: "3.2%"}}>
                            <div className="color-left-line"/>
                        </div>
                    </div>


                </div>

                <div className="col-6 right-container-panel" style={{height: "15rem ", backgroundColor: "transparent"}}/>
                <div className="col-6 left-container-panel" style={{height: "15rem", backgroundColor: "transparent"}}/>

                <div className="col-6 right-container-panel" style={{height: "15rem ", backgroundColor: "transparent"}}>
                    <div className="row">
                        <div className="col-8" style={{display: "flex", alignItems: "center", padding: 0}}>
                            <div className="color-right-line"/>
                        </div>
                        <div className="col-4" style={{padding: 0}}>
                            {
                                    getCard(false)
                            }
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" , position: "absolute",top: "30%"}}>
            <div className="container">
                <div className="row">
                    {
                        getTimeLine()
                    }
                </div>
                <div className="row">
                    {
                        getTimeLine()
                    }
                </div>
            </div>

        </div>
    )
}
export default PaySlipViewer