import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Offer from "../offer/Offer";
import PopularCourse from "../popularCourse/PopularCourse";
import VideoInformation from "../videoInformation/VideoInformation";
import Testimonial from "../testimonial/Testimonial";
import Instructor from "../instructor/Instructor";

const Home = () => {
    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Home | Snap Academy</title>
            </Helmet>

            {/* FIxed Image */}
            <img src="/bg1.png" alt="" className="fixed -left-20 -top-20 opacity-5 -z-10" />

            <Banner />
            <Offer />
            <PopularCourse />
            <Instructor />
            <VideoInformation />
            {/* <Collection /> */}
            
            <Testimonial />

        </>
    );
};

export default Home;