import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import Loader from '../components/loader/Loader';

const AdminRoute = ({ children }) => {

    const { user, loading, logOut } = useAuth()

    // IMPORT isADMIN FOR CHECK ADMIN HAS EXIST
    const { isAdmin, isLoading } = useAdmin()

    // TRACK ON LOCATION
    const location = useLocation()

    if (loading || isLoading) {
        return <Loader />
    }

    if (user && isAdmin === 'admin') {
        return children
    }

    localStorage.removeItem('access-token')
    logOut()

    return <Navigate to={'/auth/signin'} state={{ from: location }} replace />
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AdminRoute;