import {TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {IconCurrencyDollar} from "@tabler/icons-react";
import Table from "components/table";
import {ISalary, SalaryList} from "data.ts";
import {MonthPickerInput} from "@mantine/dates";
import Header from "../../../components/salaries/sectionHeader";
import {useIntl} from "react-intl";
import {MainWrapper} from "../../../styles/main.ts";
export interface ISalary {
    id: number;
    period?: Date | null;
    staff_id: string;
    name: string;
    basic_salary: string;
    salary_allowance: string;
    additions: number;
    deductions: number;
    total: string;
    end_of_service: boolean;
}
function useAdditionForm(additions: number) {
    return useForm({
        initialValues: {
            additions: additions,
        },
    });
}

function useDeductionForm(deductions: number) {
    return useForm({
        initialValues: {
            deductions: deductions,
        },
    });
}

function Salaries() {
    const {formatMessage} = useIntl();


    return (
        <MainWrapper>
            <Header/>
            <Table<ISalary>
                records={SalaryList}
                highlightOnHover
                columns={[
                    {
                        title: formatMessage({id: "salary_period"}),
                        accessor: "period",
                        width:200,
                        render: (record) => {
                            // Add input field to allow users to select the month
                            return (
                                <MonthPickerInput
                                    placeholder='Month'
                                    size='md'
                                    value={record.period ?? null}
                                    onChange={(value) => console.log(value)}
                                />
                            );
                        },
                    },
                    {
                        title: formatMessage({id: "staff_id"}),
                        accessor: "staff_id",
                        width:100,
                        render: (record) => <span>{record.staff_id}</span>,
                    },
                    {
                        title: formatMessage({id: "name"}),
                        accessor: "name",
                        render: (record) => <span>{record.name}</span>,
                    },
                    {
                        title: formatMessage({id: "basic_salary"}),
                        accessor: "basic_salary",
                        width:150,
                        render: (record) => <span>{record.basic_salary}</span>,
                    },
                    {
                        title: formatMessage({id: "salary_allowance"}),
                        accessor: "salary_allowance",
                        width:150,
                        render: (record) => <span>{record.salary_allowance}</span>,
                    },
                    {
                        title: formatMessage({id: "salary_additions"}),
                        accessor: "additions",
                        width:150,
                        render: (record) => {
                            // Add input field to allow users to adjust the addition amount
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const form = useAdditionForm(record.additions)
                            return (
                                <form>
                                    <TextInput
                                        value={0}
                                        leftSectionPointerEvents='none'
                                        leftSection={<IconCurrencyDollar/>}
                                        key={form.key("additions")}
                                        size='md'
                                        {...form.getInputProps("additions")}
                                        classNames={{root: "input-root"}}
                                    />
                                </form>
                            );
                        },
                    },
                    {
                        title: formatMessage({id: "salary_deductions"}),
                        accessor: "deductions",
                        width:150,
                        render: (record) => {
                            // Add input field to allow users to adjust the deduction amount
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const form = useDeductionForm(record.deductions);
                            return (
                                <form>
                                    <TextInput
                                        value={0}
                                        leftSectionPointerEvents='none'
                                        leftSection={<IconCurrencyDollar/>}
                                        key={form.key("deductions")}
                                        size='md'
                                        {...form.getInputProps("deductions")}
                                        classNames={{root: "input-root"}}
                                    />
                                </form>
                            );
                        },
                    },
                    {
                        title: formatMessage({id: "total_salary"}),
                        accessor: "total",
                        width:150,
                        render: (record) => <span>{record.total}</span>,
                    },
                    {
                        title: formatMessage({id: "end_of_service_(gratuity)"}),
                        accessor: "end_of_service",
                        width:100,
                        render: (record) => (
                            <span>{record.end_of_service ? "Yes" : "No"}</span>
                        ),
                    },
                ]}
                totalRecords={SalaryList.length}
                recordsPerPage={10}
                page={1}
                noRecordsIcon={<></>}
                noRecordsText=' '
                onPageChange={(p) => console.log(p)}
                recordsPerPageOptions={[10, 20, 30]}
            />
        </MainWrapper>
    );
}

export default Salaries;
