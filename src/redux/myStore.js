import { configureStore } from "@reduxjs/toolkit";
import listReuces from './listSlices'
const myStore  = configureStore({
    reducer:{
        name:listReuces,
    }
})
export default myStore