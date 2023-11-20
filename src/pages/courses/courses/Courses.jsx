import './Courses.css'
import Control from '../control/Control';
import Refferal from '../refferal/Refferal';
import CourseCard from '../courseCard/CourseCard';
import { useState } from 'react';
import { motion } from "framer-motion"
import DespCourseCard from '../despCourseCard/DespCourseCard';
import { Helmet } from 'react-helmet-async';
import useGetCourses from '../../../hooks/useGetCourses';
import ViewCourseCardSkeleton from '../../../components/skeleton/courseCardSkeleton/ViewCourseCardSkeleton';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiBars3BottomLeft } from 'react-icons/hi2';

const Courses = () => {

    // ALL STATE ARE HERE
    const [layout, setLayout] = useState(true)
    const [selectedCategories, setSelectedCategories] = useState([]);


    // use HOOK FOR GET ALL COURSES AND FUNCTIONALITY
    const { courses, minPrice, maxPrice, sortingCourses, priceQuery, setPriceQuery, courseLoading, handlerSortingCourses } = useGetCourses()

    // FILTER COURSE EHEN USER SELECTED CATEGORY
    const filteredCourses = courses && courses.filter(course => selectedCategories.includes(course.category))

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Courses | Snap Academy</title>
            </Helmet>

            <section className='mt-10 xl:pt-[40px] my-container'>

                <div className='grid lg:grid-cols-9 gap-2 lg:gap-5 items-end pb-3'>

                    {/* TODO: SEARCH FOR RESULT */}
                    <div className='lg:col-span-2 flex'>
                        <p className='xl:pl-1 opacity-70'>Search result for <span className='text-primary-color opacity-100 font-semibold'>‘TODO: Search’</span></p>
                    </div>

                    <div className='lg:col-span-7 flex justify-between items-center'>

                        {/* SHORTING */}
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <HiBars3BottomLeft size={20} className='text-primary-color' />

                                </div>

                                <div className='flex items-center'>
                                    <label htmlFor="orders" className='hidden lg:block'>Short by:</label>

                                    <select
                                        name="order"
                                        id="order"
                                        className='lg:ml-[5px] pl-1 lg:pr-20 py-1 text-xs border rounded  border-primary-color'
                                        onChange={handlerSortingCourses}
                                    >
                                        <option value="default">Short by</option>
                                        <option value="accending">a - z ( Accending )</option>
                                        <option value="descending">z - a ( Descending )</option>
                                    </select>
                                </div>
                            </div>

                            <p className='font-medium'>Total Courses: {selectedCategories?.length === 0 ? courses?.length : filteredCourses?.length}</p>
                        </div>

                        {/* LAYOUT VIEW */}
                        <div className='flex items-center gap-2 sm:gap-5  '>
                            <div>
                                <button onClick={() => setLayout(true)}>
                                    <BiSolidDashboard size={20} className='text-primary-color' />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => setLayout(false)}>
                                    <img src="/courses/1grid.svg" alt="grid1" className='w-4 cursor-pointer' />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className=' grid lg:grid-cols-9 gap-5'>

                    {/* Filter Control */}
                    <Control
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        priceQuery={priceQuery}
                        setPriceQuery={setPriceQuery}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                    />

                    <div className=' lg:col-span-7 rounded-xl '>
                        {
                            courseLoading ?
                                <div
                                    className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                                    <ViewCourseCardSkeleton />
                                </div>
                                : layout ? (
                                    <>
                                        <motion.div
                                            className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                                        >
                                            {
                                                (sortingCourses === 'accending') && selectedCategories?.length < 1
                                                    ?
                                                    courses.slice().sort((a, b) => a.title.localeCompare(b.title)).map(course => <CourseCard key={course._id} course={course} button={true} />)
                                                    :
                                                    (sortingCourses === 'accending') && selectedCategories?.length >= 1
                                                        ?
                                                        filteredCourses.slice().sort((a, b) => a.title.localeCompare(b.title)).map(course => <CourseCard key={course._id} course={course} button={true} />)
                                                        :
                                                        (sortingCourses === 'descending' && selectedCategories?.length < 1)
                                                            ?
                                                            courses.slice().sort((a, b) => b.title.localeCompare(a.title)).map(course => <CourseCard key={course._id} course={course} button={true} />)
                                                            :
                                                            (sortingCourses === 'descending' && selectedCategories?.length >= 1)
                                                                ?
                                                                filteredCourses.slice().sort((a, b) => b.title.localeCompare(a.title)).map(course => <CourseCard key={course._id} course={course} button={true} />)
                                                                :
                                                                selectedCategories?.length >= 1
                                                                    ?
                                                                    filteredCourses.map(course => <CourseCard key={course._id} course={course} button={true} />)
                                                                    :
                                                                    courses.map(course => <CourseCard key={course._id} course={course} button={true} />)
                                            }
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <div className='space-y-5'>
                                            {
                                                (sortingCourses === 'accending') && selectedCategories?.length < 1
                                                    ?
                                                    courses.slice().sort((a, b) => a.title.localeCompare(b.title)).map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                                    :
                                                    (sortingCourses === 'accending') && selectedCategories?.length >= 1
                                                        ?
                                                        filteredCourses.slice().sort((a, b) => a.title.localeCompare(b.title)).map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                                        :
                                                        (sortingCourses === 'descending' && selectedCategories?.length < 1)
                                                            ?
                                                            courses.slice().sort((a, b) => b.title.localeCompare(a.title)).map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                                            :
                                                            (sortingCourses === 'descending' && selectedCategories?.length >= 1)
                                                                ?
                                                                filteredCourses.slice().sort((a, b) => b.title.localeCompare(a.title)).map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                                                :
                                                                selectedCategories?.length >= 1
                                                                    ?
                                                                    filteredCourses.map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                                                    :
                                                                    courses.map(course => <DespCourseCard key={course._id} course={course} button={true} />)
                                            }
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>

            </section >

            <Refferal />
        </>
    );
};

export default Courses;