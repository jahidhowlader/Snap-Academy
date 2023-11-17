import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiArrowLongRight } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet-async';
import '../auth.css'
import useAuth from '../../../hooks/useAuth';

const ForgotPassword = () => {

    // IMPORT AUTHCONTEXT
    const { resetPassword } = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    // SUBMIT Or SEND EMAIL FOR PASSWORD RESET
    const onSubmit = async (data) => {

        try {

            await resetPassword(data.email)
            toast.success('Please Check your gamil.');
            reset()

        } catch (e) {
            toast.error(e.code);
            console.log(e.code);
        }
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Forgot Password | Snap Academy</title>
            </Helmet>

            <div className="glass-container text-black">

                {/* Background */}
                <img src="/authBG.png" alt="background" className='absolute bottom-0 left-0 ' />

                {/* Main Content */}
                <motion.div initial={{ y: 300 }} animate={{ y: 0 }} className="glass-content flex flex-col items-center shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md">
                    <div className="lg:text-xl xl:text-2xl flex items-center gap-2 mt-5">
                        <Link to={'/'}>
                            <img src="/logo.svg" alt="logo" className="w-8 lg:w-10 bg-primary-color" />
                        </Link>
                        <h3 className="font-bold uppercase text-primary-color"><Link to='/'>Snap Academy</Link></h3>
                    </div>

                    <p className='mt-10 mb-5 font-medium tracking-wider'>Welcome To Snap Academy</p>

                    {/* SIGNIN FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 w-full sm:w-[400px] md:w-[450px] max-w-[768px] px-5'>

                        {/* Email Input */}
                        <div className='flex flex-col gap-2'>
                            {/* <label>Email</label> */}
                            <input
                                type="email"
                                placeholder='Email'
                                className={`bg-opacity-0 bg-black border  py-2 px-5 rounded-md w-full ${errors.email ? 'outline-error border border-error' : ''}`}
                                {...register("email",
                                    {
                                        required: 'Email is required', pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Invalid email address'
                                        }
                                    }
                                )} />

                            {/* Show Error on UI */}
                            {
                                errors?.email?.type === 'required' ? <span className='text-error font-medium'>{errors?.email?.message}</span> :
                                    errors?.email?.type === 'pattern' ? <span className='text-error font-medium'>{errors?.email?.message}</span> : ''
                            }
                            <button className={` w-full py-2 rounded-md bg-primary-color text-white text-2xl mb-5`}><HiArrowLongRight className='mx-auto' /></button>
                        </div>


                    </form>


                </motion.div>
            </div>
        </>

    );
};

export default ForgotPassword;