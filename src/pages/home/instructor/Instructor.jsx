import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import useGetCourses from "../../../hooks/useGetCourses";
import ViewInstructorSkeleton from "../../../components/skeleton/instructorSkeleton/ViewInstructorSkeleton";

const Instructor = () => {

    const { courses, courseLoading } = useGetCourses()

    return (
        <>
            <div className=" text-center mb-10">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary-color pb-3 lg:pb-8'>Meet Our Instructors</h2>
                <p className="w-full sm:w-3/4 mx-auto px-5">But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                    pain was born and I will give you a complete.</p>
            </div>

            <section className="columns-2 lg:columns-5 space-y-5 rounded xl:rounded-md gap-5 py-[40px] z-20 my-container mb-20 xl:mb-32">

                {
                    courses.map(course => courseLoading ? <ViewInstructorSkeleton key={course._id} /> : (
                        <div
                            key={course._id}
                            className="relative group overflow-hidden cursor-pointer"
                        >
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }}>
                                <img src={course.instructorImage} alt="insructor" className="w-full h-auto cover rounded-md object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-primary-color bg-opacity-80 text-white group-hover:h-full transition-height duration-700 flex justify-center items-center rounded-md">
                                <div className="hidden group-hover:block p-2">
                                    <h5 className="lg:text-2xl">{course.instructor}</h5>
                                    <p className="text-xs lg:text-sm">INSTRUCTOR</p>
                                    <p className="text-xs lg:text-sm">Total Students: {course.enrolled}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    );
};

export default Instructor;