import {useForm} from "@mantine/form";
import {Anchor, Button, Container, Group, Paper, PasswordInput, Space, TextInput, Title,} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../../redux/slices/authSlice"; // Adjust the import path as needed
import {useRoutes} from "../../../hooks/useRoutes";
import {useIntl} from "react-intl";

function Login() {
    /* --------------------------------- Hooks --------------------------------- */
    const {ROUTES} = useRoutes();
    const navigate = useNavigate();
    const {formatMessage} = useIntl();

    const form = useForm({
        initialValues: {
            username: "admin@test.com",
            password: "test123456",
        },
        validate: {
            username: (value) =>
                value.length < 2 ? "Username must have at least 2 characters" : null,
            password: (value) =>
                value.length < 6 ? "Password must have at least 6 characters" : null,
        },
    });

    /* ----------------------------- Redux Dispatch ---------------------------- */
    const dispatch = useDispatch();

    const handleSubmit = (values: { username: string; password: string }) => {
        dispatch(login(values));
        navigate(
            ROUTES.dashboard.to() // Redirect after successful login
        );
    };

    return (
        <Container size={420} my={40}>
            <Paper p='lg' radius='md' withBorder>
                <Title order={2}>{formatMessage({id: "sign_in"})}</Title>
                <Space h='md'/>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label={formatMessage({id: "username"})}
                        placeholder={formatMessage({id: "username"})}
                        required
                        {...form.getInputProps("username")}
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
                        {formatMessage({id: "log_in"})}
                    </Button>
                </form>
                <Space h='md'/>
                <Group justify='space-between' mt='l'>
                    <Anchor
                        component='button'
                        type='button'
                        c='dimmed'
                        onClick={() => navigate(ROUTES.signup.to())}
                        size='sm'
                    >
                        {formatMessage({
                            id: "dont_have_an_account_register_here",
                        })}
                    </Anchor>
                </Group>
            </Paper>
            <Paper p='lg' radius='md' mt={10} withBorder>
                <h3>User list</h3>
                <p>username: admin@test.com</p>
                <p>password: test123456</p>
                <hr/>
                <p>username: user@test.com</p>
                <p>password: test123456</p>
            </Paper>
        </Container>
    );
}

export default Login;
