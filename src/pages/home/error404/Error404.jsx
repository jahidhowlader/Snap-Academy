import Lottie from "lottie-react";
// import error404 from '../../../../public/404.json'
import one from '../../../../public/404.json'
// import two from '../../../../public/2.json'
import './Error404.css'

const Error404 = () => {
    return (
        <div className="max-w-[1520px] 2xl:mx-auto mx-5">
            {/* <Navbar /> */}

            <div className="grid xl:grid-cols-3">
                <div></div>
                <div className="flex justify-center items-center h-[calc(100vh)]">
                    <Lottie animationData={one} loop={true} className="animation" />
                </div>
            </div>
        </div>
    );
};

export default Error404;