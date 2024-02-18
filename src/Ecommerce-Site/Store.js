import {configureStore} from "@reduxjs/toolkit";
import slicer from './Slicer';

export default configureStore({
    reducer : {
        "myCart" : slicer
    }
})