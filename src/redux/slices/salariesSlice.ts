import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SalaryList} from "../../data.ts";
import {ISalary} from "../../modules/clients/salaries";

interface SalariesState {
    salaries: ISalary[];
    loading: boolean;
    error: string | null;
}

const initialState: SalariesState = {
    salaries: SalaryList,
    loading: false,
    error: null,
};

const salariesSlice = createSlice({
    name: "salaries",
    initialState,
    reducers: {
        fetchSalariesStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSalariesSuccess: (state, action: PayloadAction<Salary[]>) => {
            state.salaries = action.payload;
            state.loading = false;
        },
        fetchSalariesFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        processSalary: (state, action: PayloadAction<Salary>) => {
            const index = state.salaries.findIndex(
                (sal) => sal.id === action.payload.id
            );
            if (index !== -1) {
                state.salaries[index] = action.payload;
            } else {
                state.salaries.push(action.payload);
            }
        },
        deleteSalary: (state, action: PayloadAction<string>) => {
            state.salaries = state.salaries.filter(
                (sal) => sal.id !== action.payload
            );
        },
    },
});

// Export actions
export const {
    fetchSalariesStart,
    fetchSalariesSuccess,
    fetchSalariesFailure,
    processSalary,
    deleteSalary,
} = salariesSlice.actions;

// Export reducer
export default salariesSlice.reducer;

// Export state type
export type {Salary, SalariesState};
