import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({ reducer : {"react" : reducer} })

export  default  store;