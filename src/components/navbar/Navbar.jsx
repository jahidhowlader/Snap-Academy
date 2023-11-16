import { HiBars3BottomRight, HiMiniMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

    // All State are here
    const [isOpen, setIsOpen] = useState(false)

    // IMPORT AUTHCONTEXT
    const { user, logOut } = useAuth()
    console.log('navbar', user);

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
        <div className="flex justify-between items-center py-5 sm:py-5 z-50 my-container ">

            {/* LOGO */}
            <div className="lg:text-xl xl:text-2xl flex items-center gap-2 text-white">
                <div>
                    <img src="/public/test1.svg" alt="logo" className="w-8 lg:w-12 shadow-2xl bg-white " />
                </div>
                <h3 className="font-bold uppercase"><Link to='/'>Snap Academy</Link></h3>
            </div>

            {/* NAVLINK */}
            <div>
                <ul className="hidden md:flex items-center gap-5 lg:gap-10 xl:gap-20 xl:text-[18px] 2xl:text-xl text-white">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/instructor'>Instructor</Link></li>
                    {
                        user ?
                            <li onClick={handlerLogout}><Link to='/'>Signout</Link></li> :
                            <li><Link to='/auth/signin'>Signin</Link></li>
                    }
                </ul>
            </div>

            {/* SEACRCH USER AND CART */}
            <div className="flex items-center gap-3 sm:gap-5 xl:text-xl font-semibold text-white">
                <span>
                    {/* <HiMiniMagnifyingGlass /> */}
                </span>

                <Link to={'/cart'}>
                    <HiOutlineShoppingCart className="w-6 h-6" />
                </Link>

                <Link to="/dashboard">
                    <span className="w-6 h-6">
                        <img src={user?.photoURL || '/user.png'} alt="profile" className='w-6 h-6 rounded-full' />
                    </span>
                </Link>

                {/* Hemburger and Nablink For Mobile */}
                <button
                    className={` md:hidden`}
                >
                    <HiBars3BottomRight onClick={() => setIsOpen(true)} className="text-white w-6 h-6 rounded-full" />
                </button>

                <span className="hidden md:block">EN</span>
            </div>



            <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Navbar;