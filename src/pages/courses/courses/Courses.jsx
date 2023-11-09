import './Courses.css'
import Control from '../control/Control';
import Refferal from '../refferal/Refferal';
import CourseCard from '../courseCard/CourseCard';
import DespCourseCaed from '../despCourseCaed/DespCourseCaed';
import { useState } from 'react';
import { motion } from "framer-motion"



const Courses = () => {

    const [layout, setLayout] = useState(true)

    return (
        <>
            <section className='pt-12 lg:pt-[60px] '>

                <div className='grid lg:grid-cols-9 gap-2 lg:gap-5 items-end pb-3'>

                    {/* TODO: SEARCH FOR RESULT */}
                    <div className='lg:col-span-2 flex'>
                        <p className='xl:pl-1 opacity-70'>Search result for <span className='text-primary-color opacity-100 font-semibold'>‘TODO: Search’</span></p>
                    </div>

                    <div className='col-span-7 flex justify-between items-center'>

                        {/* SHORT */}
                        <div className='flex items-center gap-2'>
                            <div>
                                <img src="/courses/short.svg" alt="short" />

                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="orders" className='hidden lg:block'>Short by:</label>

                                <select name="order" id="order" className='lg:ml-[5px] pl-1 lg:pr-20 py-1 text-xs border rounded  border-primary-color'>
                                    <option value="accending">Short by</option>
                                    <option value="accending">a - z ( Accending )</option>
                                    <option value="descending">z - a ( Descending )</option>
                                </select>
                            </div>
                        </div>

                        {/* LAYOUT VIEW */}
                        <div className='flex items-center gap-2 sm:gap-5  '>
                            <div>
                                <button onClick={() => setLayout(true)}>
                                    <img src="/courses/1grid.svg" alt="grid1" className='w-4 cursor-pointer' />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => setLayout(false)}>
                                    <img src="/courses/2grid.svg" alt="grid2" className='w-4 cursor-pointer' />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className=' grid lg:grid-cols-9 gap-5'>

                    <Control />


                    <div className=' lg:col-span-7 rounded-xl '>
                        {
                            !layout ? (
                                <>
                                    <motion.div
                                        className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                                    >
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />

                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <div className='space-y-5'>
                                        <DespCourseCaed />
                                        <DespCourseCaed />
                                        <DespCourseCaed />
                                        <DespCourseCaed />
                                        <DespCourseCaed />
                                    </div>
                                </>
                            )
                        }


                    </div>
                </div>

            </section>

            <Refferal />
        </>
    );
};

export default Courses;