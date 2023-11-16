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
        <div className="flex justify-between items-center pt-2 z-50">

            {/* LOGO */}
            <div className="lg:text-xl xl:text-2xl flex items-center gap-2 text-primary-color">
                <div>
                    <img src="/logo.svg" alt="logo" className="w-8 lg:w-10 text-primary-color" />
                </div>
                <h3 className="font-bold uppercase"><Link to='/'>Snap Academy</Link></h3>
            </div>

            {/* NAVLINK */}
            <div>
                <ul className="hidden sm:flex items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-28 font-semibold xl:text-[18px] 2xl:text-xl text-primary-color">
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
            <div className="flex items-center gap-3 sm:gap-5 xl:text-xl font-semibold text-primary-color">
                <span>
                    <HiMiniMagnifyingGlass />
                </span>
                <Link to="/dashboard">
                    <span className="w-5 h-5">
                        <img src={user?.photoURL || '/user.png'} alt="profile" className='w-5 h-5 rounded-full' />
                    </span>
                </Link>
                <Link to={'/cart'}>
                    <HiOutlineShoppingCart />
                </Link>
                <span className="hidden sm:block">EN</span>
            </div>

            {/* Hemburger and Nablink For Mobile */}
            <button
                className={` sm:hidden`}
            >
                <HiBars3BottomRight onClick={() => setIsOpen(true)} className="text-primary-color  rounded-full" />
            </button>

            <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Navbar;