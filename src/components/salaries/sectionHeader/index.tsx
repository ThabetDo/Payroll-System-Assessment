import {Button, Grid} from "@mantine/core";
import {IconProgressCheck} from "@tabler/icons-react";
import {useIntl} from "react-intl";
import {HeaderWrapper} from "./styles.ts";
import {useRoutes} from "hooks/useRoutes.tsx";
import SectionName from "components/sectionName";
import AlertPopup from "components/alertPopup";
import {useState} from "react";
import {toast} from "react-toastify";

function Header() {
    const {formatMessage} = useIntl();
    const {ROUTES} = useRoutes();
    const [showAlert, setShowAlert] = useState<boolean>(false);

    /* --------------------------------- functions --------------------------------- */
    const proceedSalariesPayments = async () => {
        console.log("confirmationRecords");
        toast.success(
            formatMessage({id: "salaries_payment_is_under_processing"})
        );

        setShowAlert(false);
    };
    return (
        <HeaderWrapper>
            <AlertPopup
                onClose={() => setShowAlert(!showAlert)}
                opened={showAlert}
                style={{fontFamily:'Arial !important'}}
                title={formatMessage({id: "confirmation"})}
                description={formatMessage({
                    id: "kindly_note_that_employees_without_specified_period_will_be_excluded_from_the_session_are_you_sure_you_want_to_proceed_with_salaries_payment",
                })}
                Footer={
                    <>
                        <Button
                            variant='filled'
                            radius={"lg"}
                            size='md'
                            onClick={() => {
                                setShowAlert(false);
                                proceedSalariesPayments();
                            }}
                        >
                            {formatMessage({id: "yes"})}
                        </Button>

                        <Button
                            variant='outline'
                            radius={"lg"}
                            size='md'
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            {formatMessage({id: "no"})}
                        </Button>
                    </>
                }
            />
            <Grid gutter='24px'>
                <Grid.Col span={3}>
                    <SectionName
                        icon={ROUTES.salaries.icon}
                        title={ROUTES.salaries.title()}
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
                            rightSection={<IconProgressCheck/>}
                            radius={"xl"}
                            onClick={() => {
                                console.log("proceed_salaries_payment");
                                setShowAlert(true);
                            }}
                        >
                            {formatMessage({id: "procees_salaries_payment"})}
                        </Button>
                    </div>
                </Grid.Col>
            </Grid>
        </HeaderWrapper>
    );
}

export default Header;
