import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    // TRACK ON LOCATION
    const location = useLocation()

    if (loading) {
        return loading
    }

    if (user) {
        return children
    }

    return <Navigate to={'/auth/signin'} state={{from: location}} replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}


export default PrivateRoute;