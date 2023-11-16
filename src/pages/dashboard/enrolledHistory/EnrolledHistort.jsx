import { Helmet } from 'react-helmet-async';
import { HiOutlineInformationCircle } from 'react-icons/hi2';

const EnrolledHistort = () => {
    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Enrolled History | Snap Academy</title>
            </Helmet>

            <section className="text-center flex justify-center items-center h-full">
                <div className='flex justify-center items-center gap-2 my-20'>
                    <HiOutlineInformationCircle size={30} className="w-5 xl:w-6" />
                    <h3 className="text-lg xl:text-2xl">
                        You Have No Enrolled cours yet!
                    </h3>
                </div>
            </section>
        </>

    );
};

export default EnrolledHistort;