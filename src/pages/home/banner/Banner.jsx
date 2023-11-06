import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const Banner = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center pb-16 '>

            {/* Banner Content */}
            <div className='flex-1 space-y-5 order-2 md:order-1'>
                <h1 className='text-3xl sm:text-5xl xl:text-[60px] 2xl:text-7xl font-extrabold'><span className='text-light-green'>Photography </span>is the only <span className='text-light-green'>language </span> that can be understood.</h1>
                <p className='lg:font-semibold text-[]'>Photography is an art of observation. It's about finding something interesting in an ordinary place... I've found it has little to do with the things you see and everything to do with the way you see them.</p>

                <button className='bg-light-green text-white py-2 px-5 xl:py-3 xl:px-7 rounded-[10px] 2xl:text-2xl font-semibold flex items-center gap-2'>Find Courses <HiArrowLongRight /></button>
            </div>

            {/* Image */}
            <div className='flex-1 order-1 md:order-2'>
                <img src="/public/home/banner1.png" alt="banner" className='mx-auto ' />
            </div>
        </section>
    );
};

export default Banner;