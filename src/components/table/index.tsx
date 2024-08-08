import {DataTable, DataTableColumn, DataTableProps,} from "mantine-datatable";
import {ReactNode, useMemo} from "react";
import {useIntl} from "react-intl";
import {TableWrapper} from "./styles";

type IProps<T> = Omit<DataTableProps<T>,
    "withBorder" | "noRecordsText" | "groups"> & {
    textSelectionDisabled?: boolean;
    withBorder?: boolean;
    page?: number;
    noRecordsText?: ReactNode;
    className?: string;
    paginationColor?: string;
    height?: number | string;
    customModule?: JSX.Element;
};

export default function Table<
    T extends object & { isRecordActionsHidden?: boolean }
>(props: IProps<T>) {
    const {
        columns,
        verticalSpacing = "md",
        sortStatus,
        selectedRecords,
        customLoader,
        emptyState,
        totalRecords = 10,
        page,
        recordsPerPage,
        recordsPerPageOptions,
        onPageChange,
        onRecordsPerPageChange,
        height = "100%",
        noRecordsText,
        customModule,
        textSelectionDisabled = true,
        ...rest
    } = props
    const {formatMessage} = useIntl();
    const tableColumns: DataTableColumn<T>[] = useMemo(() => {
        if (!columns) return [] as DataTableColumn<T>[];
        return columns.map((column) => ({
            ...column,
            title:
                typeof column.title === "string" ? <>{column.title}</> : column.title,
        })) as DataTableColumn<T>[];
    }, [columns]);

    return (
        <TableWrapper>
            {customModule && <>{customModule}</>}
            <DataTable
                {...rest}
                withTableBorder
                shadow='md'
                withColumnBorders
                horizontalSpacing='md'
                verticalAlign='center'
                striped
                columns={tableColumns}
                textSelectionDisabled={textSelectionDisabled}
                highlightOnHover
                height={height}
                borderRadius='md'
                fz='sm'
                verticalSpacing={verticalSpacing}
                page={page}
                totalRecords={totalRecords}
                recordsPerPage={recordsPerPage}
                onPageChange={onPageChange}
                recordsPerPageOptions={recordsPerPageOptions}
                onRecordsPerPageChange={onRecordsPerPageChange}
                sortStatus={sortStatus}
                selectedRecords={selectedRecords}
                customLoader={customLoader}
                emptyState={emptyState}
                noRecordsText={noRecordsText || formatMessage({id: "no_data"})}
            />
        </TableWrapper>
    );
}
