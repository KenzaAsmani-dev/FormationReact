import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0,
    name:'ahmed',
}


const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{
        addOne:(state) => { state.count += 1 },
        munisOne:(state) => { state.count -= 1 }, 
        setName:(state) => { state.name = 'ali' }
    }

}); 

export const { addOne, munisOne, setName } = counterSlice.actions;
export default counterSlice.reducer; 