import { HiBars3BottomRight, HiMiniMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion"


const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}

const Navbar = () => {

    const [open, setOpen] = useState(false)

    console.log(open);

    return (
        <div className="flex justify-between items-center pt-2">

            {/* LOGO */}
            <div className="lg:text-xl xl:text-2xl">
                <h3 className="font-bold uppercase">Snap Academy</h3>
            </div>

            {/* NAVLINK */}
            <div>
                <ul className="hidden sm:flex items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-28 font-semibold xl:text-[18px] 2xl:text-xl">
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Instructor</li>
                    <li>Signin</li>
                </ul>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 xl:text-xl font-semibold">
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

            {/* Hemburger For Mobile */}
            <button
                className="sm:hidden bg-green p-1 rounded-full text-white"
                onClick={() => setOpen(!open)}
            >
                <HiBars3BottomRight />
            </button>

            {
                open && (
                    <>
                        <div className="group">
                            <div className="fixed top-0 right-0 h-full w-1/2 bg-green flex flex-col justify-center items-center text-white z-50">

                                <button
                                    className="absolute font-semibold top-2 right-5"
                                    onClick={() => setOpen(false)}
                                >Closed</button>

                                {/* NAVLINKJ */}
                                <div>
                                    <ul className=" text-center space-y-5 font-semibold" onClick={() => setOpen(false)}>
                                        <li>Home</li>
                                        <li>Courses</li>
                                        <li>Instructor</li>
                                        <li>Signin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Navbar;