import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart';
import uiSlice from './ui';

export default configureStore({
    reducer : { cart : cartSlice.reducer, ui : uiSlice.reducer}
})