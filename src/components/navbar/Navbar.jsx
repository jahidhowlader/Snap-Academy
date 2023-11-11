import { HiBars3BottomRight, HiMiniMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

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
                <ul className="hidden sm:flex items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-28 font-semibold xl:text-[18px] 2xl:text-xl">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/instructor'>Instructor</Link></li>
                    <li><Link to='/signin'>Signin</Link></li>
                </ul>
            </div>

            {/* SEACRCH USER AND CART */}
            <div className="flex items-center gap-3 sm:gap-5 xl:text-xl font-semibold text-primary-color">
                <span>
                    <HiMiniMagnifyingGlass />
                </span>
                <span>
                    <HiOutlineUser />
                </span>
                <span>
                    <HiOutlineShoppingCart />
                </span>
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