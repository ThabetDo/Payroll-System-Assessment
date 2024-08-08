import {useForm} from "@mantine/form";
import {Box, Button, Grid, Group, MultiSelect, NumberInput, TextInput,} from "@mantine/core";
import {DateInput} from "@mantine/dates";
import {IconCurrencyDollar} from "@tabler/icons-react";
import {toast} from "react-toastify";
import {useIntl} from "react-intl";
import {useRoutes} from "hooks/useRoutes.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IEmployee, updateEmployee} from "../../../redux/slices/employeesSlice.ts";
import {RootState} from "../../../redux/store.ts";
import {formatDate} from "../../../utils/formatDate.ts";

type IInitValue = Omit<IEmployee, 'joining_date'> & { joining_date: string | Date }

function EditEmployee() {
    const dispatch = useDispatch()
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
        if (employee && employee.joining_date) employee.joining_date = new Date(employee.joining_date)
        return employee;
    }, [id]);

    // use useForm hook to create form with initial values and validation functions
    const form = useForm({
        mode: "uncontrolled",
        initialValues,
        // functions will be used to validate values at corresponding key
        validate: {
            staff_id: (value) =>
                value.length < 2 ? "Staff ID must have at least 2 letters" : null,
            joining_date: (value) =>
                value.length < 2
                    ? "Joining Date must have at least 2 letters"
                    : null,
            name: (value) =>
                value.length < 2 ? "Name must have at least 2 letters" : null,
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            phone: (value) =>
                value.length < 2 ? "Phone must have at least 2 digits" : null,
            role: (value) =>
                value.length < 1 ? "Role must have at least 1 value" : null,
            basic_salary: (value) =>
                value === 0 ? "Basic Salary must be greater than 0" : null,
            salary_allowance: (value) =>
                value === 0 ? "Salary Allowance must be greater than 0" : null,
        },
    });

    const onSubmit = (values: IEmployee) => {
        const employee = values
        if (employee && employee.joining_date) employee.joining_date = formatDate(new Date(employee.joining_date))
        try {
            dispatch(updateEmployee(values))
        } catch (e) {
            console.log(e)
        }
        toast.success(formatMessage({id: "employee_updated_successfully"}));
        navigate(ROUTES.employees.to());
    };

    useEffect(() => {
        if (initialValues)
            form.setValues(initialValues);
    }, [id])

    return (
        <form onSubmit={form.onSubmit(val => onSubmit(val as IEmployee))}>
            <Box p='auto' m='lg'>
                <Grid>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            mt='sm'
                            label='Staff ID'
                            placeholder='Staff ID'
                            key={form.key("staff_id")}
                            size='md'
                            {...form.getInputProps("staff_id")}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <DateInput
                            clearable
                            defaultValue={new Date()}
                            mt='sm'
                            label='Joining Date'
                            placeholder='Joining Date'
                            key={form.key("joining_date")}
                            size='md'
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
                            key={form.key("salary_allowance")}
                            leftSection={<IconCurrencyDollar/>}
                            {...form.getInputProps("salary_allowance")}
                        />
                    </Grid.Col>
                </Grid>
                <Group justify='flex-end' mt='md'>
                    <Button type='submit' mt='xl' size='md' variant='filled' radius='md'>
                        Submit
                    </Button>
                </Group>
            </Box>
        </form>
    );
}

export default EditEmployee;
