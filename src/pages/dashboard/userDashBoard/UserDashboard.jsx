import { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import useAuth from "../../../hooks/useAuth";

const UserDashboard = () => {

    // ALL STATE ARE HERE
    const [review, setReview] = useState(0)



    // IMPORT AUTHCONTEXT
    const { user } = useAuth()

    return (
        <section>
           

            <div className='grid sm:grid-cols-2 xl:items-center xl:justify-between gap-5 lg:gap-10 w-full px-2 lg:mx-0 mt-5'>

                <div className='bg-green bg-opacity-70 w-full h-[150px] flex flex-col justify-center items-center rounded-md text-white uppercase'>
                    <h5>Enrolled</h5>
                    <h4 className='text-4xl font-bold'>1</h4>
                </div>
                <div className=' bg-light-green bg-opacity-70  h-[150px] flex flex-col justify-center items-center rounded-md text-white uppercase p-5'>
                    <h5>Total Transition</h5>
                    <h4 className='text-4xl font-bold'> $400</h4>
                </div>
            </div>
            
            {/* USER CONTENT */}
            <div>
                <h3 className="text-2xl text-center my-20">Welcome Back <span className="font-bold">{user?.displayName}</span>, Ready For Your Next Lesson?</h3>
            </div>

            <div className="text-center">
                <div className='flex justify-center items-center gap-2'>
                    <HiOutlineInformationCircle size={30} />
                    <h3 className="text-2xl">
                        You Have No Enrolled cours yet!
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default UserDashboard;