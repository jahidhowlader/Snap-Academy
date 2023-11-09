import Banner from "../banner/Banner";
import Collection from "../collection/Collection";
import Offer from "../offer/Offer";
import PopularCourse from "../popularCourse/PopularCourse";
import VideoInformation from "../videoInformation/VideoInformation";

const Home = () => {
    return (
        <>

            <img src="/bg1.png" alt="" className="fixed -left-20 -top-20 opacity-5 -z-10"/>
            {/* <img src="/home/feature2.png" alt="" className="fixed -right-20 -bottom-20 opacity-5 -z-10"/> */}

            <Banner />
            <Offer />
            <PopularCourse />
            <VideoInformation />
            <Collection />
            {/* TODO: TESTIMONIAL */}
        </>
    );
};

export default Home;