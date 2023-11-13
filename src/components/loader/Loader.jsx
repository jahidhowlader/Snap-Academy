import Lottie from "lottie-react";
import loader from '../../../public/loader.json'

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie animationData={loader} loop={true} className="animation" />
        </div>
    );
};

export default Loader;