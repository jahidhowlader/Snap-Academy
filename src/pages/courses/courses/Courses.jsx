import './Courses.css'
import Control from '../control/Control';
import Refferal from '../refferal/Refferal';
import CourseCard from '../courseCard/CourseCard';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import DespCourseCard from '../despCourseCard/DespCourseCard';
import { Helmet } from 'react-helmet-async';
// import useGetCourses from '../../../hooks/useGetCourses';
import Loader from '../../../components/loader/Loader';

const Courses = () => {

    // ALL STATE ARE HERE
    const [layout, setLayout] = useState(true) // CHECK LAYOUT WHICH IS CHOOS USER
    const [selectedCategories, setSelectedCategories] = useState(['Creative Composition', 'Advanced Lighting']); //FILTER COURSE BY CATEGORY
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [sortingCourses, setSortingCourses] = useState('default')



    const [priceQuery, setPriceQuery] = useState('') // FILTER COURSE BY PRICE

    // use HOOK FOR GET ALL COURSES
    // const [courses, loading] = useGetCourses()

    const [courses, setCourses] = useState([]);
    const [courseLoading, setCourseLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/courses?priceQuery=${priceQuery}`)
            .then(res => res.json())
            .then(data => {

                setCourses(data.courses);
                setMinPrice(data.minPrice)
                setMaxPrice(data.maxPrice)
                // setFindAscending(data.course)

                setCourseLoading(false);
            });
    }, [priceQuery])

    const handlerSortingCourses = (e) => {
        console.log(e.target.value);
        setSortingCourses(e.target.value)
        // (e) => setFindSorting(e.target.value)
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Courses | Snap Academy</title>
            </Helmet>

            <section className='mt-10 xl:pt-[60px] '>

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
                                    <img src="/courses/short.svg" alt="short" />

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

                            <p>Total Courses: {courses.length}</p>
                        </div>

                        {/* LAYOUT VIEW */}
                        <div className='flex items-center gap-2 sm:gap-5  '>
                            <div>
                                <button onClick={() => setLayout(true)}>
                                    <img src="/courses/2grid.svg" alt="grid2" className='w-4 cursor-pointer' />
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
                            courseLoading ? <Loader /> : layout ? (
                                <>
                                    <motion.div
                                        className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                                    >
                                        {
                                            sortingCourses == 'accending' ?
                                                courses.slice().sort((a, b) => a.title.localeCompare(b.title)).map(course => <CourseCard key={course._id} course={course} button={true} />) : sortingCourses === 'descending' ?
                                                    courses.slice().sort((a, b) => b.title.localeCompare(a.title)).map(course => <CourseCard key={course._id} course={course} button={true} />) :
                                                    courses.map(course => <CourseCard key={course._id} course={course} button={true} />)
                                        }

                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <div className='space-y-5'>
                                        {
                                            courses.map(course => <DespCourseCard key={course._id} course={course} />)
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