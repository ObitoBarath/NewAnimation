import {createSlice} from "@reduxjs/toolkit";





let counterSlice = createSlice({
    name : "react",
    initialState : {name  : "Barath" , value : 0 , type : 0},
    reducers  : {
       increment : (state, action) => {
           console.log("state=>",state.name)
           console.log("action TYPE=>",action.type)
           console.log("action payload =>" , action.payload)
       },
        outDated : (state, action) => {
            console.log("state = >" , state)
            console.log("action = >" , action)
            // state.value +=1;
        },
        add : (state, action) => {
           state.value = state.value
        }

    }
});

export const {increment , decrement , outDated , add} = counterSlice.actions
export default counterSlice.reducer