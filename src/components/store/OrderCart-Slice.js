import { createSlice } from "@reduxjs/toolkit";

 const CartSlice=createSlice({
    name:'CartSlice',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
        addItemToCart(state,action){
            const newItem =action.payload;
            const existItem=state.items.find(item=>item.id===newItem.id);
            state.totalQuantity++;
            if(!existItem)
            {
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    name:newItem.name,
                    quantity:1,
                    totalprice:newItem.price,
                });
            }
            else
            {
                existItem.quantity++;
                existItem.price=existItem.price+newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const id=action.payload;
            const existItem=state.items.find(item=>item.id===id);
            state.totalQuantity--;
            if(existItem.quantity===1)
            {
                state.items=state.items.filter(item=>item.id!==id);
            }
            else
            {
                existItem.quantity--;
                existItem.price=existItem.price-existItem.totalprice;
            }

        }
    }
});

export const cartSliceActions=CartSlice.actions;
export default CartSlice;