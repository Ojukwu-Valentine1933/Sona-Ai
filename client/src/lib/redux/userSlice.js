import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    initialState,
    name: "userState",
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer;

export const {setCurrentUser} = userSlice.actions;