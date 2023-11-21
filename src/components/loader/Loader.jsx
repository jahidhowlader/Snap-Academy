import Lottie from "lottie-react";
import loader from '../../../public/camera.json'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen -z-10">
            <Lottie animationData={loader} loop={true} className="animation" />
        </div>
    );
};

export default Loader;