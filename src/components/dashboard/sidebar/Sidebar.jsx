import { HiMiniHome, HiMiniPencilSquare, HiMiniShoppingCart, HiMiniUser, HiMiniUsers } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiHistory, BiSolidDashboard } from "react-icons/bi";
import { MdAddToPhotos } from "react-icons/md";
import useAdmin from "../../../hooks/useAdmin";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import './Sidebar.css'

const Sidebar = () => {

    // IMPORT LOGOUT FOR SIGNOUT USER
    const { logOut } = useAuth()

    // IMPORT isADMIN FOR CHECK ADMIN HAS EXIST
    const { isAdmin } = useAdmin()
    // const isAdmin = 'user'

    // Handler Logout
    const handlerLogout = async () => {

        try {
            await logOut()
            toast.success('Successfully Signout')

        } catch (e) {
            toast.error(e.code);
        }
    }

    return (
        <div className='bg-primary-color lg:h-screen text-white p-5 xl:p-10 relative'>
            {/* Redirect Home Page */}
            {/* <Link to={'/'} className='absolute top-5 left-10 text-xl glass-effect p-2 text-black z-10 rounded xl:rounded-md'><HiMiniHome /></Link> */}

            {/* LOGO */}
            <div className="lg:text-xl mt-5 flex items-center gap-2 text-white">
                <Link to={'/'}>
                    <img src="/logoM.svg" alt="logo" className="w-8 xl:w-10 shadow-2xl bg-white " />
                </Link>
                <h3 className="font-bold uppercase"><Link to='/'>Snap Academy</Link></h3>
            </div>

            <ul className="space-y-5 mt-10 uppercase">

                {/* COMMON LINK */}
                <Link to={`/`} className="flex items-center gap-2">
                    <HiMiniHome size={24} />
                    <li className="navAnimation"> Home</li>
                </Link>

                {
                    isAdmin === 'admin' ? (<>
                        <Link to={`/dashboard/admin`} className="flex items-center gap-2">
                            <BiSolidDashboard size={24} />
                            <li className="navAnimation"> Dashboard</li>
                        </Link>
                        <Link to={`/dashboard/addCourses`} className="flex items-center gap-2">
                            <MdAddToPhotos size={24} />
                            <li className="navAnimation"> Add Courses</li>
                        </Link>

                        <Link to={`/dashboard/allCourses`} className="flex items-center gap-2">
                            <HiMiniPencilSquare size={24} />
                            <li className="navAnimation"> Courses Manage</li>
                        </Link>
                        <Link to={'/dashboard/allUsers'} className="flex items-center gap-2">
                            <HiMiniUsers size={24} />
                            <li className="navAnimation"> User Manage</li>
                        </Link>

                    </>)
                        : isAdmin === 'user' ?
                            (<>
                                <Link to={`/dashboard/user`} className="flex items-center gap-2">
                                    <BiSolidDashboard size={24} />
                                    <li className="navAnimation"> Dashboard</li>
                                </Link>
                                <Link to={`/dashboard/review`} className="flex items-center gap-2">
                                    <MdAddToPhotos size={24} />
                                    <li className="navAnimation"> Add Reviews</li>
                                </Link>
                                <Link to={`/dashboard/enrolledHistory`} className="flex items-center gap-2">
                                    <BiHistory size={24} />
                                    <li className="navAnimation"> Enrolled History</li>
                                </Link>
                                <Link to={'/dashboard/cart'} className="flex items-center gap-2">
                                    <HiMiniShoppingCart size={24} />
                                    <li className="navAnimation"> Cart</li>
                                </Link>
                            </>) : ''
                }

                {/* COMMON LINK */}
                <Link to={`/dashboard/profile`} className="flex items-center gap-2">
                    <HiMiniUser size={24} />
                    <li className="navAnimation"> Profile</li>
                </Link>

                <Link to={`/`} className="flex items-center gap-2">
                    <FiLogOut size={24} />
                    <li className="navAnimation"><button onClick={handlerLogout} className="uppercase">Signout</button></li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;