import {IEmployee} from "./redux/slices/employeesSlice.ts";
import {ISalary} from "./modules/clients/salaries";

export const EmployeesList: IEmployee[] = [
    {
        id: 1,
        staff_id: "STF-001",
        joining_date: "2023-06-01T00:00:00Z",
        name: "Alice Smith",
        email: "alice.smith@example.com",
        phone: "08123456789",
        role: ["Manager"],
        basic_salary: "$18,000",
        salary_allowance: "$2,500",
        status: "Active",
    },
    {
        id: 2,
        staff_id: "STF-002",
        joining_date: "2024-03-28T00:00:00Z",
        name: "Jennifer Lawrence",
        email: "jennifer.lawrence@example.com",
        phone: "08012345678",
        role: ["Employee"],
        basic_salary: "$17,500",
        salary_allowance: "$2,000",
        status: "Inactive",
    },
    {
        id: 3,
        staff_id: "STF-003",
        joining_date: "2023-07-15T00:00:00Z",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        phone: "08234567890",
        role: ["Developer"],
        basic_salary: "$16,000",
        salary_allowance: "$1,500",
        status: "Inactive",
    },
    {
        id: 4,
        staff_id: "STF-004",
        joining_date: "2023-08-10T00:00:00Z",
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        phone: "08345678901",
        role: ["Designer"],
        basic_salary: "$17,000",
        salary_allowance: "$2,000",
        status: "Active",
    }
];

export interface ITransaction {
    id: number;
    transaction_id: string;
    date: string;
    amount: string;
    status: string;
    type: string;
    reference: string;
    staff_id: string;
}

export const TransactionList: ITransaction[] = [
    {
        id: 1,
        transaction_id: "TRN-011",
        date: "01-06-2023",
        amount: "$18,000",
        status: "Success",
        type: "Bonus",
        reference: "Performance Bonus",
        staff_id: "STF-002",
    },
    {
        id: 2,
        transaction_id: "TRN-012",
        date: "15-07-2023",
        amount: "$16,000",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-003",
    },
    {
        id: 3,
        transaction_id: "TRN-013",
        date: "10-08-2023",
        amount: "$17,000",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-004",
    },
    {
        id: 4,
        transaction_id: "TRN-014",
        date: "21-09-2023",
        amount: "$15,000",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-005",
    },
    {
        id: 5,
        transaction_id: "TRN-015",
        date: "30-10-2023",
        amount: "$14,500",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-006",
    },
    {
        id: 6,
        transaction_id: "TRN-016",
        date: "15-11-2023",
        amount: "$13,500",
        status: "Success",
        type: "Bonus",
        reference: "Annual Bonus",
        staff_id: "STF-007",
    },
    {
        id: 7,
        transaction_id: "TRN-017",
        date: "05-12-2023",
        amount: "$12,000",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-008",
    },
    {
        id: 8,
        transaction_id: "TRN-018",
        date: "25-01-2024",
        amount: "$10,000",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-009",
    },
    {
        id: 9,
        transaction_id: "TRN-019",
        date: "14-02-2024",
        amount: "$20,000",
        status: "Success",
        type: "Bonus",
        reference: "Referral Bonus",
        staff_id: "STF-010",
    },
    {
        id: 10,
        transaction_id: "TRN-020",
        date: "28-03-2024",
        amount: "$17,500",
        status: "Success",
        type: "Salary",
        reference: "Monthly Salary",
        staff_id: "STF-011",
    },
];



export const SalaryList: ISalary[] = [
    {
        id: 1,
        period: new Date("2023-12-31T20:00:00.000Z"),
        staff_id: "STF-002",
        name: "Alice Smith",
        basic_salary: "$18,000",
        salary_allowance: "$2,500",
        additions: 500,
        deductions: 0,
        total: "$21,000",
        end_of_service: false,
    },
    {
        id: 2,
        period: new Date("2024-01-31T20:00:00.000Z"),
        staff_id: "STF-003",
        name: "Bob Johnson",
        basic_salary: "$16,000",
        salary_allowance: "$1,500",
        additions: 200,
        deductions: 100,
        total: "$17,600",
        end_of_service: true,
    },
    {
        id: 3,
        period: new Date("2024-02-29T20:00:00.000Z"),
        staff_id: "STF-004",
        name:

            "Charlie Brown",
        basic_salary: "$17,000",
        salary_allowance: "$2,000",
        additions: 0,
        deductions: 200,
        total: "$18,800",
        end_of_service: false,
    },
    {
        id: 4,
        period: new Date("2024-03-31T20:00:00.000Z"),
        staff_id: "STF-005",
        name: "Daisy Ridley",
        basic_salary: "$15,000",
        salary_allowance: "$1,800",
        additions: 300,
        deductions: 0,
        total: "$17,100",
        end_of_service: true,
    },
    {
        id: 5,
        period: new Date("2024-04-30T20:00:00.000Z"),
        staff_id: "STF-006",
        name: "Evan Peters",
        basic_salary: "$14,500",
        salary_allowance: "$1,600",
        additions: 100,
        deductions: 0,
        total: "$16,200",
        end_of_service: false,
    },
    {
        id: 6,
        period: new Date("2024-05-31T20:00:00.000Z"),
        staff_id: "STF-007",
        name: "Fiona Gallagher",
        basic_salary: "$13,500",
        salary_allowance: "$1,700",
        additions: 0,
        deductions: 100,
        total: "$15,100",
        end_of_service: false,
    },
    {
        id: 7,
        period: new Date("2024-06-30T20:00:00.000Z"),
        staff_id: "STF-008",
        name: "George Clooney",
        basic_salary: "$12,000",
        salary_allowance: "$1,400",
        additions: 200,
        deductions: 0,
        total: "$13,600",
        end_of_service: true,
    },
    {
        id: 8,
        period: new Date("2024-07-31T20:00:00.000Z"),
        staff_id: "STF-009",
        name: "Hannah Montana",
        basic_salary: "$10,000",
        salary_allowance: "$1,200",
        additions: 0,
        deductions: 100,
        total: "$11,100",
        end_of_service: false,
    },
    {
        id: 9,
        period: new Date("2024-08-31T20:00:00.000Z"),
        staff_id: "STF-010",
        name: "Ian Somerhalder",
        basic_salary: "$20,000",
        salary_allowance: "$3,000",
        additions: 500,
        deductions: 200,
        total: "$23,300",
        end_of_service: false,
    },
    {
        id: 10,
        period: new Date("2024-09-30T20:00:00.000Z"),
        staff_id: "STF-011",
        name: "Jennifer Lawrence",
        basic_salary: "$17,500",
        salary_allowance: "$2,000",
        additions: 0,
        deductions: 0,
        total: "$19,500",
        end_of_service: false,
    },
];

export const SalaryById: (id: string) => ISalary = (id: string) => {
    return SalaryList.find(e => e.staff_id === id)?.[0]
}