import {useForm} from "@mantine/form";
import {Box, Button, Grid, Group, MultiSelect, NumberInput, TextInput,} from "@mantine/core";
import {DateInput} from "@mantine/dates";
import {IconCurrencyDollar} from "@tabler/icons-react";
import {useIntl} from "react-intl";
import {useRoutes} from "hooks/useRoutes.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store.ts";
import {IEmployee} from "../../../redux/slices/employeesSlice.ts";
import {useMemo} from "react";

type IInitValue = Omit<IEmployee, 'joining_date'> & { joining_date: Date }

function ViewEmployee() {
    const {formatMessage} = useIntl();
    const navigate = useNavigate();
    const {ROUTES} = useRoutes();
    const {id} = useParams();
    const employees = useSelector((state: RootState) => state.employees).eList
    const EmployeeById: (id: string) => IEmployee | undefined = (id: string) => {
        return employees.find(e => e.id.toString() === id)
    }
    const initialValues: IInitValue = useMemo(() => {
        const employee = EmployeeById(id || 'STF-001') as IInitValue
        if (employee)
            employee.joining_date = new Date(employee.joining_date)
        return employee;
    }, [id]);
    const form = useForm({
        mode: "uncontrolled",
        initialValues: initialValues,
    });

    return (
        <>
            <Box p='auto' m='lg'>
                <Grid>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            mt='sm'
                            label='Staff ID'
                            placeholder='Staff ID'
                            key={form.key("staff_id")}
                            size='md'
                            disabled
                            {...form.getInputProps("staff_id")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <DateInput
                            defaultValue={new Date()}
                            mt='sm'
                            label='Joining Date'
                            placeholder='Joining Date'
                            key={form.key("joining_date")}
                            size='md'
                            disabled
                            {...form.getInputProps("joining_date")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            mt='sm'
                            label='Name'
                            placeholder='Name'
                            key={form.key("name")}
                            size='md'
                            disabled
                            {...form.getInputProps("name")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            mt='sm'
                            label='Email'
                            placeholder='Email'
                            key={form.key("email")}
                            size='md'
                            disabled
                            {...form.getInputProps("email")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            mt='sm'
                            label='Phone'
                            placeholder='Phone'
                            key={form.key("phone")}
                            size='md'
                            disabled
                            {...form.getInputProps("phone")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <MultiSelect
                            mt='sm'
                            label='Role'
                            placeholder='Role'
                            key={form.key("role")}
                            size='md'
                            disabled
                            {...form.getInputProps("role")}
                            data={["Manager", "Admin", "Employee", "Engineer", "HR"]}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <NumberInput
                            mt='sm'
                            label='Basic Salary'
                            placeholder='Basic Salary'
                            min={0}
                            max={999999}
                            size='md'
                            disabled
                            key={form.key("basic_salary")}
                            leftSection={<IconCurrencyDollar/>}
                            {...form.getInputProps("basic_salary")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <NumberInput
                            mt='sm'
                            label='Salary Allowance'
                            placeholder='Salary Allowance'
                            min={0}
                            max={999999}
                            size='md'
                            disabled
                            key={form.key("salary_allowance")}
                            leftSection={<IconCurrencyDollar/>}
                            {...form.getInputProps("salary_allowance")}
                        />
                    </Grid.Col>
                    <Group justify='flex-end' mt='md'>
                        <Button
                            type='button'
                            mt='xl'
                            size='md'
                            variant='filled'
                            radius='md'
                            onClick={() => navigate(ROUTES.editEmployee.to({employeeId: id?.toString() || '1'}))}
                        >
                            {formatMessage({id: "edit"})}
                        </Button>
                    </Group>
                </Grid>
            </Box>
        </>
    );
}

export default ViewEmployee;
