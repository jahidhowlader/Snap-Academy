import { useLoaderData } from "react-router-dom";
import ProductDetails from "../courseDetails/CourseDetails";
import Tabs from "../tabs/Tabs";
import { Helmet } from "react-helmet-async";

const SingleCourse = () => {

    const course = useLoaderData()
    console.log(course);

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>{course.title} | Snap Academy</title>
            </Helmet>

            <section className="2xl:py-[40px] my-container">

                {/* Poduct Details */}
                <ProductDetails course={course} />

                {/* DETAILS && ADITION INFORMATION && REVIEW*/}
                {/* USE REACT TABS */}

                <Tabs course={course} />
            </section>
        </>

    );
};

export default SingleCourse;