import ProductDetails from "../courseDetails/CourseDetails";
import Tabs from "../tabs/Tabs";

const SingleCourse = () => {

    return (
        <section className="2xl:py-[60px]">

            {/* Poduct Details */}
            <ProductDetails />

            {/* DETAILS && ADITION INFORMATION && REVIEW*/}
            {/* USE REACT TABS */}

            <Tabs />
        </section>
    );
};

export default SingleCourse;