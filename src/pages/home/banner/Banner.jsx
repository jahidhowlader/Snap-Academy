import { HiArrowLongRight } from 'react-icons/hi2';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section id='banner'
            className=''>
            <div className='my-container flex flex-col md:flex-row justify-between items-center pb-16 md:pt-12 lg:pt-0 2xl:pt-10  lg:text-white lg:px-10 2xl:px-20 lg:pb-0 lg:my-2'>

                {/* Banner Content */}
                <div className='flex-1 space-y-5 order-2 md:order-1'>
                    <h1 className='text-3xl sm:text-5xl xl:text-[60px] 2xl:text-7xl font-extrabold line-height'><span className='text-primary-color'>Photography </span>is the only <span className='text-primary-color'>language </span> that can be understood.</h1>
                    <p >Photography is an art of observation. It's about finding something interesting in an ordinary place... I've found it has little to do with the things you see and everything to do with the way you see them.</p>

                    <div>
                        <Link to={'/courses'}>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-color text-white py-2 px-5 xl:py-3 xl:px-7 rounded md:rounded-md 2xl:text-2xl font-semibold flex items-center gap-2'
                            >Find Courses <HiArrowLongRight />
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className='flex-1 order-1 md:order-2 lg:hidden'>
                    <img src="/home/banner1.svg" alt="banner" className='mx-auto custom-animation object-cover' />
                </div>

                <div className='flex-1 order-1 md:order-2 hidden lg:block'>
                </div>
            </div>

        </section>
    );
};

export default Banner;