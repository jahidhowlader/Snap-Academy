import Banner from "../banner/Banner";
import Offer from "../offer/Offer";
import PopularCourse from "../popularCourse/PopularCourse";

const Home = () => {
    return (
        <>

            <img src="/public/bg1.png" alt="" className="fixed -left-20 -top-20 opacity-5 z-50"/>
            {/* <img src="/home/feature2.png" alt="" className="fixed -right-20 -bottom-20 opacity-5"/> */}

            <Banner />
            <Offer />
            <PopularCourse />
        </>
    );
};

export default Home;