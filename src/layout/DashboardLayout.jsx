import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar/Sidebar';
// import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

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