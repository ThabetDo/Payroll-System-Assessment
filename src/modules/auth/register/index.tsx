import {useForm} from "@mantine/form";
import {Anchor, Button, Container, Group, Paper, PasswordInput, Space, TextInput, Title,} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../../redux/slices/authSlice"; // Adjust the import path as needed
import {useRoutes} from "../../../hooks/useRoutes";
import {useIntl} from "react-intl";

function Register() {
    /* --------------------------------- Hooks --------------------------------- */
    const {ROUTES} = useRoutes();
    const navigate = useNavigate();
    const {formatMessage} = useIntl();

    const form = useForm({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validate: {
            username: (value) =>
                value.length < 2 ? "Username must have at least 2 characters" : null,
            email: (value) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                    ? "Invalid email address"
                    : null,
            password: (value) =>
                value.length < 6 ? "Password must have at least 6 characters" : null,
        },
    });

    /* ----------------------------- Redux Dispatch ---------------------------- */
    const dispatch = useDispatch();

    const handleSubmit = (values: {
        username: string;
        email: string;
        password: string;
    }) => {
        dispatch(register(values));
        navigate(
            ROUTES.dashboard.to() // Redirect after successful login
        ); // Redirect after successful login
    };

    return (
        <Container size={420} my={40}>
            <Paper p='lg' radius='md' withBorder>
                <Title order={2}>
                    {formatMessage({
                        id: "sign_up",
                    })}
                </Title>
                <Space h='md'/>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label={formatMessage({id: "username"})}
                        placeholder={formatMessage({id: "username"})}
                        required
                        {...form.getInputProps("username")}
                    />
                    <Space h='md'/>
                    <TextInput
                        label={formatMessage({id: "email"})}
                        placeholder={formatMessage({id: "email"})}
                        required
                        {...form.getInputProps("email")}
                    />
                    <Space h='md'/>
                    <PasswordInput
                        label={formatMessage({id: "password"})}
                        placeholder={formatMessage({id: "password"})}
                        required
                        {...form.getInputProps("password")}
                    />
                    <Space h='md'/>
                    <Button fullWidth type='submit'>
                        {formatMessage({
                            id: "register",
                        })}
                    </Button>
                </form>
                <Space h='md'/>
                <Group justify='space-between'>
                    <Anchor
                        component='button'
                        type='button'
                        c='dimmed'
                        onClick={() => navigate(ROUTES.login.to())}
                        size='sm'
                    >
                        {formatMessage({
                            id: "already_have_an_account",
                        })}
                    </Anchor>
                </Group>
            </Paper>
        </Container>
    );
}

export default Register;
