import Table from "components/table";
import {ITransaction, TransactionList} from "data";
import Header from "../../../components/transactions/sectionHeader";
import {useIntl} from "react-intl";
import {MainWrapper} from "../../../styles/main.ts";

function Transactions() {
    const {formatMessage} = useIntl();

    return (
        <MainWrapper>
            <Header/>
            <Table<ITransaction>
                records={TransactionList}
                highlightOnHover
                columns={[
                    {
                        title: formatMessage({id: "transaction_id"}),
                        accessor: "transaction_id",
                        render: (record) => <span>{record.transaction_id}</span>,
                    },
                    {
                        title: formatMessage({id: "staff_id"}),
                        accessor: "staff_id",
                        render: (record) => <span>{record.staff_id}</span>,
                    },
                    {
                        title: formatMessage({id: "transaction_date"}),
                        accessor: "transaction_date",
                        render: (record) => <span>{record.date}</span>,
                    },
                    {
                        title: formatMessage({id: "amount"}),
                        accessor: "amount",
                        render: (record) => <span>{record.amount}</span>,
                    },
                    {
                        title: formatMessage({id: "status"}),
                        accessor: "status",
                        render: (record) => <span>{record.status}</span>,
                    },
                    {
                        title: formatMessage({id: "transaction_details"}),
                        accessor: "reference",
                        render: (record) => <span>{record.reference}</span>,
                    },
                    {
                        title: formatMessage({id: "transaction_type"}),
                        accessor: "transaction_type",
                        render: (record) => <span>{record.type}</span>,
                    },
                ]}
                totalRecords={TransactionList.length}
                recordsPerPage={10}
                page={1}
                noRecordsIcon={<></>}
                noRecordsText=' '
                onPageChange={(p) => console.log(p)}
                recordsPerPageOptions={[10, 20, 30]}
            />
        </MainWrapper>
    );
}

export default Transactions;
