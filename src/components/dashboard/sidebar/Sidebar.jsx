import { HiMiniHome, HiMiniPencilSquare, HiMiniShoppingCart, HiMiniUser, HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BiHistory, BiSolidDashboard } from "react-icons/bi";
import { MdAddToPhotos } from "react-icons/md";

const Sidebar = () => {

    const admin = true
    return (
        <div className='bg-primary-color lg:h-screen text-white p-5 xl:p-10 relative'>
            {/* Redirect Home Page */}
            <Link to={'/'} className='absolute top-5 left-10 text-xl glass-effect p-2 text-black z-10 rounded xl:rounded-md'><HiMiniHome /></Link>

            <ul className="space-y-5 mt-20 uppercase">


                {
                    admin ? (<>
                        <Link to={`/dashboard/admin`} className="flex items-center gap-2">
                            <BiSolidDashboard size={24} />
                            <li className="hover:ml-2 duration-300 "> Dashboard</li>
                        </Link>
                        <Link to={`/dashboard/addCourses`} className="flex items-center gap-2">
                            <MdAddToPhotos size={24} />
                            <li className="hover:ml-2 duration-300 "> Add Courses</li>
                        </Link>

                        <Link to={`/dashboard/allCourses`} className="flex items-center gap-2">
                            <HiMiniPencilSquare size={24} />
                            <li className="hover:ml-2 duration-300 "> Courses Manage</li>
                        </Link>
                        <Link to={'/dashboard/allUsers'} className="flex items-center gap-2">
                            <HiMiniUsers size={24} />
                            <li className="hover:ml-2 duration-300 "> User Manage</li>
                        </Link>

                    </>) : (<>
                        <Link to={`/dashboard/user`} className="flex items-center gap-2">
                            <BiSolidDashboard size={24} />
                            <li className="hover:ml-2 duration-300 "> Dashboard</li>
                        </Link>
                        <Link to={`/dashboard/review`} className="flex items-center gap-2">
                            <MdAddToPhotos size={24} />
                            <li className="hover:ml-2 duration-300 "> Add Reviews</li>
                        </Link>
                        <Link to={`/dashboard/enrolledHistory`} className="flex items-center gap-2">
                            <BiHistory size={24} />
                            <li className="hover:ml-2 duration-300 "> Enrolled History</li>
                        </Link>
                        <Link to={'/dashboard/cart'} className="flex items-center gap-2">
                            <HiMiniShoppingCart size={24} />
                            <li className="hover:ml-2 duration-300 "> Cart</li>
                        </Link>
                    </>)
                }

                {/* COMMON LINK */}
                <Link to={`/dashboard/profile`} className="flex items-center gap-2">
                    <HiMiniUser size={24} />
                    <li className="hover:ml-2 duration-300 "> Profile</li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;