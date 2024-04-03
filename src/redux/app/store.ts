import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
    reducer: {
        products: cartSlice,
        user: userSlice
    }
})