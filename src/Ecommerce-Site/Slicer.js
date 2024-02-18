import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    totalItem : 0,
    limit : 5,
    itemList : [],
    userName : "superadmin",
    description : "Welcome to My Cart"
}
  const slicer = createSlice({
    name:"myCart",
      initialState,
    reducers : {
        addToCart : (state, action) => {
            console.log(" prev state =>"  , state)
            console.log("action =>"  ,action)
            state.totalItem +=1;
            if (state.totalItem !== state.limit){
                state.itemList.push(action.payload.itemDetails)

                state.description ="Item added successfully"
            }else {
                state.description = "Limit is reached"
            }
        }


    }

})

export const {addToCart} = slicer.actions

export default slicer.reducer