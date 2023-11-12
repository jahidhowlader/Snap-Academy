import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='xl:grid xl:grid-cols-9 max-w-[1520px] mx-auto'>

            <div className='lg:col-span-2'>
                <Sidebar />
            </div>

            <div className='lg:col-span-7 lg:m-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;