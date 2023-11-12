import { HiMiniHome, HiMiniShoppingCart, HiMiniUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BiHistory, BiSolidDashboard } from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className='bg-primary-color xl:h-screen text-white p-10 relative'>
            {/* Redirect Home Page */}
            <Link to={'/'} className='absolute top-5 left-10 text-xl glass-effect p-2 text-black rounded-md z-10'><HiMiniHome /></Link>

            <ul className="space-y-5 mt-20 uppercase">
                <Link className="flex items-center gap-2">
                    <BiSolidDashboard size={24}/>
                    <li className="hover:ml-2 duration-300 "> Dashboard</li>
                </Link>
                <Link className="flex items-center gap-2">
                    <HiMiniUser size={24}/>
                    <li className="hover:ml-2 duration-300 "> Profile</li>
                </Link>
                <Link className="flex items-center gap-2">
                    <BiHistory size={24}/>
                    <li className="hover:ml-2 duration-300 "> Payment History</li>
                </Link>
                <Link to={'/dashboard/cart'} className="flex items-center gap-2">
                    <HiMiniShoppingCart size={24}/>
                    <li className="hover:ml-2 duration-300 "> Cart</li>
                </Link>
                {/* <li className="hover:ml-2 duration-300"><Link to={'/'} >Profile</Link></li>
                <li className="hover:ml-2 duration-300"><Link to={'/'} >Payment History</Link></li>
                <li className="hover:ml-2 duration-300"><Link to={'/dashboard/cart'} >Cart</Link></li> */}
            </ul>
        </div>
    );
};

export default Sidebar;