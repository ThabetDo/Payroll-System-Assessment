import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth"; // Custom hook for authentication
import {useDispatch} from "react-redux";
import {logout} from "../../redux/slices/authSlice";
import {useRoutes} from "../../hooks/useRoutes";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const {isAuthenticated} = useAuth(); // Check if the user is authenticated
    const dispatch = useDispatch();
    const {ROUTES} = useRoutes();

    // Redirect to the login page if not authenticated
    if (!isAuthenticated) {
        dispatch(logout());
        return (
            <Navigate
                to={
                    ROUTES.login.to() // Redirect to login page if not authenticated
                }
                replace
            />
        );
    }

    // Render the children if authenticated
    return <>{children}</>;
};

export default ProtectedRoute;
