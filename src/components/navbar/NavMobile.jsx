import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { motion } from "framer-motion"
import { HiOutlineXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";

const open = {
    initial: {
        x: 400
    },
    animate: {
        x: 0,
        transition: {
            duration: .6
        }
    }
}

const NavMobile = ({ isOpen, setIsOpen }) => {

    // IMPORT USER FROM useAUTH HOOK
    const { user, logOut } = useAuth()

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
        <>
            {
                isOpen && (
                    <>
                        <motion.div variants={open} initial="initial" animate="animate" className="fixed top-0 right-0 bg-primary-color text-white h-full w-10/12 rounded rounded-r-none z-[40] flex flex-col justify-start items-end">

                            <div className="top-2 right-2 fixed">
                                <HiOutlineXMark className='text-3xl' onClick={() => setIsOpen(false)} />
                            </div>

                            {/* Website Name */}
                            <div className="pt-20 pr-10 border-b flex items-center gap-2 pb-2">
                                <Link to={'/'}>
                                    <img src="/logoM.svg" alt="logo" className="w-8 lg:w-10 bg-white" />
                                </Link>
                                <h3 className="font-bold uppercase text-right  text-xl">Snap Academy</h3>
                            </div>

                            <motion.ul
                                onClick={() => setIsOpen(false)}
                                className="text-xl text-right pt-5 pr-10 space-y-2 uppercase"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .1, duration: .6 }}
                            >
                                {/* {navLink} */}
                                <li><Link to='/'  >Home</Link></li>
                                <li><Link to='/courses'>Courses</Link></li>
                                <li><Link to='/instructor'>Instructor</Link></li>
                                {
                                    user ? (
                                        <>
                                            <li><Link to='/dashboard/profile'>Profile</Link></li>
                                            <li><Link to='/'><button onClick={handlerLogout} className="uppercase">Signout</button></Link></li>
                                        </>
                                    ) :
                                        <li><Link to='/auth/signin'>Signin</Link></li>
                                }
                            </motion.ul>

                            <div className="flex flex-col items-center justify-center absolute bottom-0 left-7">
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1 }}
                                    href={'https://www.linkedin.com/in/jahidhowlader'}
                                    target="_blank"
                                >
                                    <FaLinkedin size={20} to={''} className="my-1" />
                                </motion.a>



                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 }}
                                    href={'https://www.github.com/jahidhowlader'}
                                    target="_blank"
                                >
                                    <FaGithubSquare size={20} to={''} className="my-1" />
                                </motion.a>

                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <FaWhatsappSquare size={20} to={''} className="my-1" />
                                </motion.a>


                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    href={'https://www.facebook.com/jahidhowlader.info'}
                                    target="_blank"
                                >
                                    <FaFacebookSquare size={20} className="my-1" />
                                </motion.a>

                                <div className="border h-[100px] w-[1px] mt-1">

                                </div>
                            </div>
                        </motion.div>
                    </>
                )
            }
        </>
    );
};

NavMobile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
}


export default NavMobile;