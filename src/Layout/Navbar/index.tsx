import {Button, Group, NavLink} from "@mantine/core";
import {useLocation, useNavigate} from "react-router-dom";
import {useNavBarRoutes} from "../../hooks/useNavBarRoutes";
import {useDispatch} from "react-redux";
import {useRoutes} from "../../hooks/useRoutes";
import {logout} from "../../redux/slices/authSlice";
import {NavBarWrapper} from "./styles";
import {useIntl} from "react-intl";

export interface NavbarProps {
    opened: boolean;
    toggle: () => void;
}

export default function Navbar({opened, toggle}: NavbarProps) {
    const closeSidebar = () => {
        if (opened) {
            toggle();
        }
    };
    //use params to get the active index
    /* --------------------------------- Hooks --------------------------------- */
    const {NAVBARROUTES} = useNavBarRoutes();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {ROUTES} = useRoutes();
    const {formatMessage} = useIntl();

    const items = NAVBARROUTES.map((item) => (
        <NavLink
            key={item.id}
            active={pathname === item.path}
            label={item.label}
            description={item.description}
            leftSection={item.iconSideNav}
            onClick={() => {
                // navigate to the path
                navigate(item.path);
                // close the sidebar
                closeSidebar();
            }}
        />
    ));

    return (
        <NavBarWrapper>
            <Group>
                {/* items */}
                {items}
            </Group>
            {/* logout button */}
            <Button
                fullWidth
                variant='outline'
                color='red'
                style={{minHeight: "36px"}}
                onClick={() => {
                    // logout the user
                    dispatch(logout());
                    // navigate to login page
                    navigate(ROUTES.login.to());
                }}
            >
                {formatMessage({id: "logout"})}
            </Button>
        </NavBarWrapper>
    );
}
