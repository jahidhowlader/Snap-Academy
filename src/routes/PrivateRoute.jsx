import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from '../hooks/useAdmin';
import Loader from '../components/loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    // IMPORT isADMIN FOR CHECK ADMIN HAS EXIST
    const { isLoading } = useAdmin()

    // TRACK ON LOCATION
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (user) {
        return children
    }

    return <Navigate to={'/auth/signin'} state={{ from: location }} replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}


export default PrivateRoute;