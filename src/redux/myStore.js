import { configureStore } from "@reduxjs/toolkit";
import listReuces from './listSlices'
const myStore  = configureStore({
    reducer:{
        favoriteList:listReuces,
    }
})
export default myStore