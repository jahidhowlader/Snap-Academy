import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { useContext, useState } from 'react';
import '../auth.css'
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"

const ForgotPassword = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)

    // IMPORT AUTHCONTEXT
    const { user, signIn } = useContext(AuthContext)

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    // SUBMIT Or SIGNIN ACCOUNT
    const onSubmit = async (data) => {

        setSubmitLoading(true)
        const { email, password } = data

        try {

            await signIn(email, password)
            toast.success('Successfully Createed Account.');
            setSubmitLoading(false)
            reset()

        } catch (e) {
            toast.error(e.code);
            console.log(e.code);
            setSubmitLoading(false)
        }
    }

    return (
        <div className="glass-container relative text-black">

            {/* Redirect Home Page */}
            <Link to={'/auth/signin'} className='absolute top-5 left-5 text-xl glass-effect p-2 text-black rounded-md'><HiArrowLongLeft /></Link>

            <motion.div initial={{y: 300}} animate={{y: 0}}  className="glass-content flex flex-col items-center">
                <div className="lg:text-xl xl:text-2xl flex items-center gap-2 mt-5">
                    <div>
                        <img src="/logo.svg" alt="logo" className="w-8 lg:w-10 " />
                    </div>
                    <h3 className="font-bold uppercase"><Link to='/'>Snap Academy</Link></h3>
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
                        <button className={` w-full py-2 rounded-md glass-effect text-black`}><HiArrowLongRight className='mx-auto' /></button>
                    </div>


                </form>


            </motion.div>
        </div>
    );
};

export default ForgotPassword;