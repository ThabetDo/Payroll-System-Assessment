import {Button, Container, Paper, Text, Title} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useRoutes} from "../../../hooks/useRoutes";

function NotFoundPage() {
    const navigate = useNavigate();

    const {ROUTES} = useRoutes();

    return (
        <Container size='sm' my={40}>
            <Paper p='lg' radius='md' withBorder>
                <Title order={1}>404</Title>
                <Title order={3}>Page Not Found</Title>
                <Text mt='md'>Sorry, the page you're looking for does not exist.</Text>
                <Button
                    fullWidth
                    mt='md'
                    onClick={() => navigate(ROUTES.dashboard.to())}
                >
                    Go to Home
                </Button>
            </Paper>
        </Container>
    );
}

export default NotFoundPage;
