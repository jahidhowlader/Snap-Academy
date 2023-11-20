import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import useGetCourses from "../../../hooks/useGetCourses";
import { Helmet } from "react-helmet-async";
import ViewInstructorSkeleton from "../../../components/skeleton/instructorSkeleton/ViewInstructorSkeleton";
    
const Instructor = () => {

    // const [isSlideVisible, setSlideVisible] = useState(false);

    const { courses, courseLoading } = useGetCourses()

    // const variants = {
    //     hidden: { x: -400 },
    //     visible: { x: 0 },
    // };

    // const toggleSlide = () => {
    //     setSlideVisible(!isSlideVisible);
    // };

    return (
        <>

            {/* Ttile */}
            <Helmet>
                <title>Instructor | Snap Academy</title>
            </Helmet>

            <section className="columns-2 lg:columns-5 space-y-5 rounded xl:rounded-md gap-5 py-[40px] z-20 my-container mb-32">
                {/* <motion.div
                initial="hidden"
                animate={isSlideVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: .6, stiffness: 300 }}
                style={{ width: "100%", height: "100%", background: "lightblue" }}
            >
                <h1>This is sliding content</h1>
            </motion.div>

            <button onClick={toggleSlide}>Toggle Slide</button> */}

                {
                    courses.map(course => courseLoading ? <ViewInstructorSkeleton key={course._id} /> : (
                        <div
                            key={course._id}
                            className="relative group overflow-hidden cursor-pointer"
                        >
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: .5}}>
                                <img src={course.instructorImage} alt="insructor" className="w-full h-auto  cover rounded-md object-cover" />
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