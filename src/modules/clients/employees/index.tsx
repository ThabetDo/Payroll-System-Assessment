import {ActionIcon, Button, Group, Tooltip} from "@mantine/core";
import Table from "components/table";
import {IconEdit, IconEye, IconTrash} from "@tabler/icons-react";
import {useIntl} from "react-intl";
import Header from "../../../components/employees/sectionHeader";
import {useState} from "react";
import AlertPopup from "components/alertPopup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useRoutes} from "hooks/useRoutes.tsx";
import {MainWrapper} from "../../../styles/main.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store.ts";
import {deleteEmployee, IEmployee} from "../../../redux/slices/employeesSlice.ts";
import {formatDate} from "../../../utils/formatDate.ts";
import {useAuth} from "../../../hooks/useAuth.tsx";

function Employees() {
    const employees: IEmployee[] = useSelector((state: RootState) => state.employees).eList;
    const [selectedId, setSelectedId] = useState<number>(null);
    const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {ROUTES} = useRoutes();
    const isAdmin = useAuth().isAdmin
    const {formatMessage} = useIntl();
    const deleteRecords = async () => {
        console.log("deleteRecords");
        try {
            dispatch(deleteEmployee(selectedId))
        } catch (e) {
            console.log(e)
        }
        toast.success(formatMessage({id: "employee/s_deleted_successfully"}));
        setShowDeleteAlert(false);
    };

    return (
        <MainWrapper>
            <AlertPopup
                onClose={() => setShowDeleteAlert(!showDeleteAlert)}
                opened={showDeleteAlert}
                title={formatMessage({id: "delete"})}
                description={formatMessage({
                    id: "are_you_sure_you_want_to_delete_these_employee/s",
                })}
                Footer={
                    <>
                        <Button
                            variant='filled'
                            radius={"lg"}
                            size='md'
                            onClick={() => {
                                setShowDeleteAlert(false);
                                deleteRecords();
                            }}
                        >
                            {formatMessage({id: "yes"})}
                        </Button>

                        <Button
                            variant='outline'
                            radius={"lg"}
                            size='md'
                            onClick={() => {
                                setShowDeleteAlert(false);
                            }}
                        >
                            {formatMessage({id: "no"})}
                        </Button>
                    </>
                }
            />
            <Header/>
            {!!employees &&

                <Table<IEmployee>
                    records={employees}
                    highlightOnHover
                    columns={[
                        {
                            title: formatMessage({id: "staff_id"}),
                            accessor: "staff_id",
                            width: 100,
                            render: (record) => <span>{record.staff_id}</span>,
                        },
                        {
                            title: formatMessage({id: "name"}),
                            accessor: "name",
                            render: (record) => <span>{record.name}</span>,
                        },
                        {
                            title: formatMessage({id: "joining_date"}),
                            accessor: "joining_date",
                            width: 120,
                            render: (record) => <span>{formatDate(new Date(record.joining_date))}</span>,
                        },
                        {
                            title: formatMessage({id: "email"}),
                            accessor: "email",
                            render: (record) => <span>{record.email}</span>,
                        },

                        {
                            title: formatMessage({id: "basic_salary"}),
                            accessor: "basic_salary",
                            width: 150,
                            render: (record) => <span>{record.basic_salary}</span>,
                        },
                        {
                            title: formatMessage({id: "salary_allowance"}),
                            accessor: "salary_allowance",
                            width: 150,
                            render: (record) => <span>{record.salary_allowance}</span>,
                        },

                        {
                            accessor: "actions",
                            title: formatMessage({id: "actions"}),
                            width: 160,
                            render: (record) => (
                                !!isAdmin && <Group>
                                    {
                                        <Tooltip label={formatMessage({id: "view"})}>
                                            <ActionIcon
                                                className='ActionIcon'
                                                onClick={() => {
                                                    navigate(
                                                        ROUTES.viewEmployee.to({
                                                            employeeId: record.id.toString(),
                                                        })
                                                    );
                                                }}
                                                variant='transparent'
                                            >
                                                <IconEye/>
                                            </ActionIcon>
                                        </Tooltip>
                                    }
                                    {
                                        <Tooltip label={formatMessage({id: "edit"})}>
                                            <ActionIcon
                                                className='ActionIcon'
                                                onClick={() => {
                                                    navigate(
                                                        ROUTES.editEmployee.to({
                                                            employeeId: record.id.toString(),
                                                        })
                                                    );
                                                }}
                                                variant='transparent'
                                            >
                                                <IconEdit/>
                                            </ActionIcon>
                                        </Tooltip>
                                    }
                                    {
                                        <Tooltip label={formatMessage({id: "delete"})}>
                                            <ActionIcon
                                                className='ActionIcon'
                                                onClick={() => {
                                                    setSelectedId(record.id)
                                                    setShowDeleteAlert(true);
                                                }}
                                                variant='transparent'
                                            >
                                                <IconTrash/>
                                            </ActionIcon>
                                        </Tooltip>
                                    }
                                </Group>
                            ),
                        },
                    ]}
                    totalRecords={employees.length}
                    recordsPerPage={10}
                    page={1}
                    noRecordsIcon={<></>}
                    noRecordsText=' '
                    onPageChange={(p) => console.log(p)}
                    recordsPerPageOptions={[10, 20, 30]}
                />
            }
        </MainWrapper>
    );
}

export default Employees;
