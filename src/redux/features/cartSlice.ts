import { createSlice } from "@reduxjs/toolkit";
type statesType = {
    amount: number
    total: number
    price: number
    products: any
}
const initialState: statesType = {
    products: [],
    amount: 1,
    total: 0,
    price: 0
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            const prod = state.products.find((el) => el.id === payload.id)
            state.amount += 1;
        },
        decrement: (state, { payload }) => {
            const prod = state.products.find((el) => el.id === payload.id)
            state.amount -= 1;
        }
    }
});

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer