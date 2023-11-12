import { useLoaderData } from "react-router-dom";
import ProductDetails from "../courseDetails/CourseDetails";
import Tabs from "../tabs/Tabs";

const SingleCourse = () => {

    const course = useLoaderData()
    console.log(course);

    return (
        <section className="2xl:py-[60px]">

            {/* Poduct Details */}
            <ProductDetails course={course} />

            {/* DETAILS && ADITION INFORMATION && REVIEW*/}
            {/* USE REACT TABS */}

            <Tabs course={course} />
        </section>
    );
};

export default SingleCourse;