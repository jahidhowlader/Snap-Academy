import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../components/socialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useState } from 'react';
import '../auth.css'
import toast from 'react-hot-toast';
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';


const Signin = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [signinError, setSigninError] = useState(false)

    // useNAVIGATE USE FOR REDIRECT USER AFTER LOGIN AND useLOCATION USE FOR TRACK URL PATH
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // IMPORT AUTHCONTEXT
    const {signIn} = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    // SUBMIT Or SIGNIN ACCOUNT
    const onSubmit = async (data) => {

        setSigninError(false)
        setSubmitLoading(true)
        const { email, password } = data

        try {

            await signIn(email, password)
            toast.success('Successfully Signin.');
            reset()
            navigate(from, { replace: true });
            setSubmitLoading(false)

        } catch (e) {
            toast.error(e.code);
            console.log(e.code);
            setSigninError(true)
            setSubmitLoading(false)
        }
    }

    return (
        <>

            {/* Ttile */}
            <Helmet>
                <title>Signin | Snap Academy</title>
            </Helmet>

            <div className="glass-container text-black">

                {/* Redirect Home Page */}
                {/* <Link to={'/'} className='absolute top-5 left-5 text-xl glass-effect p-2 text-black rounded-md z-10'><HiMiniHome /></Link> */}

                {/* Background */}
                <img src="/authBG.png" alt="background" className='absolute bottom-0 left-0 ' />

                {/* Main Content */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="glass-content flex flex-col items-center shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md">
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
                                className={`bg-opacity-0 bg-black border  py-2 px-5 rounded-md w-full ${(errors.email || signinError) ? 'outline-error border border-error' : ''}`}
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
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-2 relative'>
                            {/* <label>Password</label> */}
                            <div className='relative'>
                                <input
                                    type={seePassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded-md w-full ${(errors.password || signinError) ? 'outline-error border border-error' : ''}`}
                                    {...register("password", { required: 'Password is required' })} />
                                {/* LOOK PASSWORD */}
                                <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                    {
                                        !seePassword ? <HiEye onClick={() => setSeePassword(true)} /> : <HiEyeSlash onClick={() => setSeePassword(false)} />
                                    }
                                </div>
                            </div>

                            {/* Show Error on UI */}
                            {errors?.password?.type === 'required' && <span className='text-error font-medium'>{errors?.password?.message}</span>}
                        </div>

                        {/* Submit */}
                        <input type="submit" value={submitLoading ? 'Processing...' : 'SIgn In'} className={`bg-primary-color text-white py-2 rounded-md w-full ${submitLoading ? 'cursor-progress' : 'cursor-pointer'}`} disabled={submitLoading ? true : false} />
                    </form>

                    <p className='mt-7 mb-16 opacity-100 font-bold text-primary-color'><span className=' font-normal text-black'>Don’t have an account? </span> <Link to={'/auth/signup'}>SignUp</Link></p>


                    {/* Social Login */}
                    <SocialLogin />
                    <Link to='/auth/forgotPassword' className='text-primary-color font-medium text-right cursor-pointer'>Forgot Password</Link>
                </motion.div>
            </div>
        </>
    );
};

export default Signin;