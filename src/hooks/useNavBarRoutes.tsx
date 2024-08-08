import {useMemo} from "react";
import {useIntl} from "react-intl";

// Clients Module
import DashboardPage from "pages/clients/dashboard";
import EmployeesPage from "pages/clients/employees/list.tsx";
import SalariesPage from "pages/clients/salaries/list.tsx";
import {IconCashBanknote, IconGauge, IconUsers,} from "@tabler/icons-react";

export interface INavBarRoute<T = string> {
    id: string;
    label: string;
    description: string;
    component: JSX.Element;
    path: string;
    icon?: JSX.Element;
    iconSideNav?: JSX.Element;
    privileges: true;
    to: (props?: T) => string;
    fullTitle: (props?: T) => { name: string; link?: string }[];
    title: () => string;
    sidebarTitle?: () => string;
}

export function useNavBarRoutes() {
    const {formatMessage} = useIntl();

    const NAVBARROUTES: INavBarRoute[] = useMemo(() => {
        const navbarroutes: INavBarRoute[] = [
            // Clients Module
            {
                id: "dashboard",
                label: formatMessage({id: "dashboard"}),
                description: formatMessage({id: "view_your_dashboard"}),
                component: <DashboardPage/>,
                path: "/client/dashboard",
                privileges: true,
                iconSideNav: <IconGauge size='1rem' stroke={1.5}/>,
                to: () => "/client/dashboard",
                fullTitle: () => [{name: formatMessage({id: "dashboard"})}],
                title: () => formatMessage({id: "dashboard"}),
                sidebarTitle: () => formatMessage({id: "dashboard"}),
            },
            {
                id: "employees",
                label: formatMessage({id: "employees"}),
                description: formatMessage({id: "manage_your_employees"}),
                component: <EmployeesPage/>,
                path: "/client/employees",
                privileges: true,
                iconSideNav: <IconUsers size='1rem' stroke={1.5}/>,
                to: () => "/client/employees",
                fullTitle: () => [{name: formatMessage({id: "employees"})}],
                title: () => formatMessage({id: "employees"}),
                sidebarTitle: () => formatMessage({id: "employees"}),
            },
            {
                id: "salaries",
                label: formatMessage({id: "salaries"}),
                description: formatMessage({id: "manage_salaries"}),
                component: <SalariesPage/>,
                path: "/client/salaries",
                privileges: true,
                iconSideNav: <IconCashBanknote size='1rem' stroke={1.5}/>,
                to: () => "/client/salaries",
                fullTitle: () => [{name: formatMessage({id: "salaries"})}],
                title: () => formatMessage({id: "salaries"}),
                sidebarTitle: () => formatMessage({id: "salaries"}),
            },
        ];
        return navbarroutes;
    }, [formatMessage]);

    return {NAVBARROUTES};
}
