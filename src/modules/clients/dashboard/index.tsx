import {Card} from "@mantine/core";
import {MainWrapper} from "../../../styles/main.ts";

function Dashboard() {
    return (
        <MainWrapper>
            <Card shadow='sm' padding='xs' radius='md' withBorder>
                Select Element form the left menu
            </Card>
        </MainWrapper>
    );
}

export default Dashboard;
