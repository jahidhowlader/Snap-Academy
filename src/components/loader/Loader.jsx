import Lottie from "lottie-react";
import loader from '../../../public/camera.json'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <Lottie animationData={loader} loop={true} className="animation -z-10" />
        </div>
    );
};

export default Loader;