import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const listSlice = createSlice({
    name:"favoriteList",
    initialState,
    reducers :{
        addFavoriteList(state,action){
            state.push(action.payload);
  
          
        },
        removeFavoriteList(state,action){
            // return state.filter((item,index)=> index!== action.payload)
            return state.filter(item => item.id !== action.payload);
        }
    },
})


export const {addFavoriteList,removeFavoriteList} = listSlice.actions;
export default listSlice.reducer;