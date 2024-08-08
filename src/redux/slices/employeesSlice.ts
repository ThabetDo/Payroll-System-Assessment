import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EmployeesList} from "../../data.ts";

export interface IEmployee {
    id: number;
    staff_id: string;
    joining_date: string;
    name: string;
    email: string;
    phone: string;
    role: string[];
    basic_salary: string;
    salary_allowance: string;
    status: string;
}

interface EmployeesState {
    eList: IEmployee[];
}

const initialState: EmployeesState = {
    eList: EmployeesList,
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<IEmployee>) => {
            action.payload.id = (state.eList.at(-1)?.id || 0) + 1
            state.eList = [...state.eList, action.payload];
        },
        updateEmployee: (state, action: PayloadAction<IEmployee>) => {
            console.log(state.eList, 'payload', action.payload)
            state.eList = state.eList.map((employee, index) =>
                index === action.payload.id ? action.payload : employee)
            console.log(state.eList)
        },
        deleteEmployee: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            state.eList = state.eList.filter(
                (emp) => emp.id !== action.payload
            );
        },
    },
});

// Export actions
export const {
    addEmployee,
    updateEmployee,
    deleteEmployee,
} = employeesSlice.actions;

// Export reducer
export default employeesSlice.reducer;

// Export state type
export type {EmployeesState};
