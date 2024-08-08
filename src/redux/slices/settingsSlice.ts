import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SettingState {
    lang: string;
    theme: string;
}

const initialState: SettingState = {
    lang: "en",
    theme: "light",
};

const settingSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleLang: (
            state,
            action: PayloadAction<{
                lang: "en" | "ar";
            }>
        ) => {
            state.lang = action.payload.lang;
            return state;
        },

        // Add other setting-related actions here
    },
});

// Export actions
export const {toggleLang} = settingSlice.actions;

// Export reducer
export default settingSlice.reducer;

// Export state type
export type {SettingState};
