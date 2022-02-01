import { createSlice} from '@reduxjs/toolkit';

const btnClick = createSlice({
    name:'btnClick',
    initialState:{cartIsShown : false},
    reducers:{
        toggle(state){
            state.cartIsShown=!state.cartIsShown;
        }
    }
});


export const btnClickActions=btnClick.actions;

export default btnClick;