import { useParams } from "react-router-dom";
import ProductDetails from "../courseDetails/CourseDetails";
import Tabs from "../tabs/Tabs";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../../components/loader/Loader";

const SingleCourse = () => {

    const [course, setCourse] = useState(null)

    const { _id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/course/${_id}`)
            .then(res => res.json())
            .then(data => {

                setCourse(data);
                console.log('data', data);
            });
    }, [_id])

    // console.log('paramns', _id);

    // const course = useLoaderData()

    console.log('10', course);

    return (
        <>
            {
                course ? (
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
                ) : (
                    <Loader />
                )
            }
        </>

    );
};

export default SingleCourse;