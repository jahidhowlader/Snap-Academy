import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar/Sidebar';
// import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

    // IMPORT isADMIN FOR CHECK ADMIN HAS EXIST
    // const { isAdmin } = useAdmin()

    // Navigation From RRD
    // const navigate = useNavigate()

    // if(isAdmin === 'admin'){
    //     return navigate('/dashboard/admin')

    // } else if(isAdmin === 'user'){
    //     return navigate('/dashboard/user')
    // }

    return (
        <div className='lg:grid lg:grid-cols-9 max-w-[1520px] mx-auto'>

            <div className='lg:col-span-2'>
                <Sidebar />
            </div>

            <div className='lg:col-span-7 mx-auto lg:m-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;