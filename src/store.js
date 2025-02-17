import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";



export const storeApp = configureStore({

    reducer : {
        counterData: counterReducer,
    }

});