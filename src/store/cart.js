import {createSlice} from '@reduxjs/toolkit';

 const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        totalItems : 0
    },
    reducers: {
        addItemsToCart : (state, action) => {
            
            const itemInCart = state.items.find(item => item.id === action.payload.id);
            state.totalItems++;
            if (!itemInCart) {
                state.items.push(action.payload);
            } else {
                itemInCart.quantity++;
            }
        },
        addItem : (state,action) => {
            console.log(state.totalItems)
           const item = state.items.find(item => item.id === action.payload);
            item.quantity++
            state.totalItems++;
        },
        removeItem : (state,action) => {
            const item = state.items.find(item => item.id === action.payload);
            item.quantity--;
            if (item.quantity === 0) {
               state.items= state.items.filter(item => item.id !== action.payload)
            }
            state.totalItems--;
        }
        
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;