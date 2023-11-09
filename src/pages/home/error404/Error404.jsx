import Lottie from "lottie-react";
// import error404 from '../../../../public/404.json'
import one from '../../../../public/1.json'
// import two from '../../../../public/2.json'

const Error404 = () => {
    return (
        <div className="h-screen">
            <div>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    
                    </svg>
                    <Lottie animationData={one} loop={true} />
            </div>
        </div>
    );
};

export default Error404;