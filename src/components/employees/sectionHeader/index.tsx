import {Button, Grid} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import {useIntl} from "react-intl";
import {HeaderWrapper} from "./styles.ts";
import {useRoutes} from "hooks/useRoutes.tsx";
import {useNavigate} from "react-router-dom";
import SectionName from "components/sectionName";

function Header() {
    const {formatMessage} = useIntl();
    const {ROUTES} = useRoutes();
    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <Grid gutter='24px'>
                <Grid.Col span={3}>
                    <SectionName
                        icon={ROUTES.employees.icon}
                        title={ROUTES.employees.title()}
                    />
                </Grid.Col>
                <Grid.Col
                    span={9}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <div className='containerButtons'>
                        <Button
                            variant='filled'
                            rightSection={<IconPlus/>}
                            radius={"xl"}
                            onClick={() => navigate(ROUTES.createEmployee.to())}
                        >
                            {formatMessage({id: "add_employee"})}
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>
        </HeaderWrapper>
    );
}

export default Header;
