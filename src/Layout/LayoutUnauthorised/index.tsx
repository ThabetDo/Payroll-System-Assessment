import {AppShell, Group} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {useIntl} from "react-intl";

function MainLayout() {
    const {formatMessage} = useIntl();
    return (
        <AppShell header={{height: 60}} footer={{height: 60}} padding='md'>
            <AppShell.Header>
                <Group h='100%' px='md' align='center' justify='space-between' w='100%'>
                    <Group
                        align='center'
                        justify='center'
                        gap='md'
                        style={{fontSize: "1.5rem", fontWeight: "bold"}}
                    >
                        {formatMessage({id: "payroll_system"})}
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Main>
                {/* Render the main content area */}
                <Outlet/>
            </AppShell.Main>

        </AppShell>
    );
}

export default MainLayout;
