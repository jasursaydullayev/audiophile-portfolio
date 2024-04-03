import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthChange: false,
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        logIn: (state, { payload }) => { },
        isAuthChange: (state, { payload }) => { },
        error: (state, { payload }) => { },
        logOut: (state, { payload }) => { },
    }
})

export const { error, isAuthChange, logIn, logOut } = userSlice.actions
export default userSlice.reducer