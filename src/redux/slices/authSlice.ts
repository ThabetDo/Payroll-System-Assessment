import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    isAdmin: boolean;
    user: null | { username: string; email?: string; password: string };
}

const initialState: AuthState = {
    isAuthenticated: false,
    isAdmin: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{
                username: string;
                password: string;
            }>
        ) => {
            state.isAuthenticated = true;
            state.isAdmin = action.payload.username === 'admin@test.com';
            state.user = action.payload;
        },
        register: (
            state,
            action: PayloadAction<{
                username: string;
                email: string;
                password: string;
            }>
        ) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        // Add other auth-related actions here
    },
});

// Export actions
export const {login, register, logout} = authSlice.actions;

// Export reducer
export default authSlice.reducer;

// Export state type
export type {AuthState};
