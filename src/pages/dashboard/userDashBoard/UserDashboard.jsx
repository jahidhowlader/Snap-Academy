import { HiOutlineInformationCircle } from "react-icons/hi2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserDashboard = () => {

    // ALL STATE ARE HERE
    // const [review, setReview] = useState(0)



    // IMPORT AUTHCONTEXT
    const { user } = useAuth()

    return (

        <>
            {/* Ttile */}
            <Helmet>
                <title>Dashboard | Snap Academy</title>
            </Helmet>

            <section className="p-3 lg:p-0">
                <div className='grid sm:grid-cols-2 xl:items-center xl:justify-between gap-5 lg:gap-10 w-full px-2 lg:mx-0 mt-5'>

                    <div className='bg-primary-color bg-opacity-70 w-full h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white uppercase'>
                        <h5>Enrolled</h5>
                        <h4 className='text-4xl font-bold'>0</h4>
                    </div>
                    <div className=' bg-light-green bg-opacity-70  h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white uppercase p-5'>
                        <h5>Total Transition</h5>
                        <h4 className='text-4xl font-bold'> $0</h4>
                    </div>
                </div>

                {/* USER CONTENT */}
                <div>
                    <h3 className="text-xl sm:text-2xl text-center my-20">Welcome Back <span className="font-bold">{user?.displayName}</span>, Ready For Your Next Lesson?</h3>
                </div>

                <div className="pb-20">
                    <div className='flex justify-center items-center gap-2'>
                        <HiOutlineInformationCircle size={30} className="w-5 xl:w-6" />
                        <h3 className="text-lg xl:text-2xl">
                            You Have No Enrolled cours yet!
                        </h3>
                    </div>
                </div>
            </section>
        </>

    );
};

export default UserDashboard;