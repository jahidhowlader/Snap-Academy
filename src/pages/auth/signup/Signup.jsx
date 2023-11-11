import { Link } from 'react-router-dom';
import SocialLogin from '../../../components/socialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash, HiMiniHome } from 'react-icons/hi2';
import { useState } from 'react';

const Signup = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)

    // REACT HOOK FORM
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    // SUBMIT Or CREATE ACCOUnT
    const onSubmit = (data) => {


        console.log(data)
    }



    return (
        <div className="glass-container relative text-black">

            {/* Redirect Home Page */}
            <Link to={'/'} className='absolute top-5 left-5 text-xl glass-effect p-2 text-black rounded-md'><HiMiniHome /></Link>

            <div className="glass-content flex flex-col items-center">
                <div className="lg:text-xl xl:text-2xl flex items-center gap-2 mt-5">
                    <div>
                        <img src="/logo.svg" alt="logo" className="w-8 lg:w-10 " />
                    </div>
                    <h3 className="font-bold uppercase"><Link to='/'>Snap Academy</Link></h3>
                </div>

                <p className='mt-10 mb-5 font-medium tracking-wider'>Welcome To Snap Academy</p>

                {/* SIGNIN FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 w-full sm:w-[400px] md:w-[450px] max-w-[768px] px-5'>

                    {/* Name Input*/}
                    <div className='flex flex-col gap-2'>
                        <input
                            type="text"
                            placeholder='User name '
                            className={`bg-opacity-0 bg-black border  py-2 px-5 rounded-md w-full ${errors.name ? 'outline-error border border-error' : ''}`}
                            {...register("name",
                                { required: 'Name is required', maxLength: { value: 20, message: 'Name length should be less than 20 characters' } }
                            )} />

                        {/* Show Error on UI */}
                        {
                            errors?.name?.type === 'required' ? <span className='text-error'>{errors?.name?.message}</span> :
                                errors?.name?.type === 'maxLength' ? <span className='text-error'>{errors?.name?.message}</span> : ''
                        }
                    </div>

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
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-2'>
                        {/* <label>Password</label> */}
                        <div className='relative'>
                            <input
                                type={seePassword ? 'text' : 'password'}
                                placeholder='Password'
                                className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded-md w-full ${errors.password ? 'outline-error border border-error' : ''}`}
                                {...register("password",
                                    {
                                        required: 'Password is required', pattern: {
                                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
                                            message: 'Password will be 1 number, 1 Capital and 1 special character and 8 character'
                                        }
                                    }
                                )} />
                            {/* LOOK PASSWORD */}
                            <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                {
                                    !seePassword ? <HiEye onClick={() => setSeePassword(true)} /> : <HiEyeSlash onClick={() => setSeePassword(false)} />
                                }
                            </div>
                        </div>

                        {/* Show Error on UI */}
                        {
                            errors?.password?.type === 'required' ? <span className='text-error font-medium'>{errors?.password?.message}</span> :
                                errors?.password?.type === 'pattern' ? <span className='text-error font-medium'>{errors?.password?.message}</span> : ''
                        }
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col gap-2'>
                        <div className='relative'>
                            <input
                                type={seeConfirmPassword ? 'text' : 'password'}
                                placeholder='Confirm Password'
                                className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded-md w-full ${errors.confirmPassword ? 'outline-error border border-error' : ''}`}
                                {...register("confirmPassword",
                                    {
                                        required: 'Confirm Password is required', validate: (value) => value === watch('password')
                                    }
                                )} />
                            {/* LOOK CONFIRM PASSWORD */}
                            <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                {
                                    !seeConfirmPassword ? <HiEye onClick={() => setSeeConfirmPassword(true)} /> : <HiEyeSlash onClick={() => setSeeConfirmPassword(false)} />
                                }
                            </div>
                        </div>

                        {/* Show Error on UI */}
                        {
                            errors?.confirmPassword?.type === 'required' ? <span className='text-error'>{errors?.confirmPassword?.message}</span> :
                                errors?.confirmPassword?.type === 'validate' ? <span className='text-error'>Password do not match </span> : ''
                        }
                    </div>

                    {/* Submit */}
                    <input type="submit" value={'Sign Up'} className='bg-primary-color text-white py-2 rounded-md w-full cursor-pointer' />
                </form>

                <p className='mt-7 mb-16 opacity-100 font-bold text-primary-color'><span className=' font-normal text-black'>Don’t have an account? </span> <Link to={'/auth/signin'}>SignIn</Link></p>

                {/* Social Login */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default Signup;