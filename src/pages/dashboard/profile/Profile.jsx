import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Profile = () => {

    // ALL STATE ARE HERE
    const [submitLoading, setSubmitLoading] = useState(false)

    // IMPORT AUTHCONTEXT
    const { user, updateUser } = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // SUBMIT FOR UPDATE USER INFO
    const onSubmit = async (data) => {

        setSubmitLoading(true)

        const { firstname, secondname } = data
        const fullName = `${firstname} ${secondname}`

        try {

            // UPDATE USERNAME AFTER SIGNUP ON FIREBASE
            await updateUser(fullName)
            reset()
            toast.success('Successfully Update your Profile')
            setSubmitLoading(false)

        } catch (e) {

            toast.error(e.code);
            console.log(e.code);
            setSubmitLoading(false)
        }
    }

    return (
        <>
            <section className='grid lg:gap-5 my-container px-2 lg:px-0 my-5 lg:my-0'>

                <div className='rounded-md text-black text-opacity-80'>

                    <h3 className='text-2xl uppercase mb-10'><span className='font-bold'>{user?.displayName} </span>Profile</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex items-center justify-between gap-5'>
                            <div>
                                <h6 className='font-semibold'>Personal Info</h6>
                                <p className='text-xs opacity-70'>Update your photo and personal details here</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                {/* <button  className='border-primary-color border border-opacity-50 px-3 py-1 rounded-md text-sm'>cancel</button> */}
                                <button className='bg-primary-color text-white px-3 py-1 rounded-md text-sm'>{submitLoading ? 'Proccessing...' : 'Save Changes'} </button>
                            </div>

                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* change Name field */}
                        <div className='grid lg:grid-cols-9 items-start '>
                            <div className='col-span-4'>
                                <h6 className='font-semibold'>Name</h6>
                            </div>

                            <div className='col-span-5'>
                                <div className='flex flex-col sm:flex-row items-start gap-5'>

                                    <div className='flex-1 flex flex-col'>
                                        {/* Name Input */}
                                        <input type="firsttextName"
                                            name="firstName"
                                            placeholder="First Name"
                                            {...register("firstname",
                                                { required: 'Firstame is required', maxLength: { value: 10, message: 'First Name length should be less than 10 characters' } }
                                            )}
                                            className={`block px-3 py-1 rounded-md w-full bg-transparent border-opacity-50 ${errors.firstname ? 'outline-error border border-error' : 'border border-primary-color outline-primary-color'}`} />
                                        {
                                            errors?.firstname?.type === 'required' ? <span className='text-error font-medium'>{errors?.firstname?.message}</span> :
                                                errors?.firstname?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.firstname?.message}</span> : ''
                                        }
                                    </div>

                                    <div className='flex-1 flex flex-col'>
                                        <input type="text"
                                            name="secondName"
                                            placeholder="Second Name"
                                            {...register("secondname",
                                                { required: 'Secondname is required', maxLength: { value: 10, message: 'Secondname length should be less than 10 characters' } }
                                            )}
                                            className={`block px-3 py-1 rounded-md w-full bg-transparent border-opacity-50 ${errors.secondname ? 'outline-error border border-error' : ' border border-primary-color outline-primary-color'}`}
                                        />
                                        {
                                            errors?.secondname?.type === 'required' ? <span className='text-error font-medium'>{errors?.secondname?.message}</span> :
                                                errors?.secondname?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.secondname?.message}</span> : ''
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* change Email Field*/}
                        <div className='grid grid-cols-9 items-center '>
                            <div className='col-span-4'>
                                <h6 className='font-semibold'>Email</h6>
                            </div>

                            {/* Email Input */}
                            <div className='col-span-5'>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                    className={`block px-3 py-1 border border-primary-color outline-primary-color rounded-md w-full bg-transparent border-opacity-50 ${errors ? 'border-red focus:border-red focus:outline-red' : ''}`} disabled />
                            </div>
                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* Change Photo Field */}
                        <div className='lg:grid lg:grid-cols-9 '>
                            <div className='lg:col-span-4'>
                                <h6 className='font-semibold'>Your Photo</h6>
                                <p className='text-xs opacity-70'>This photo will be displayed on your profile</p>
                            </div>

                            <div className='lg:col-span-5'>
                                <div className='lg:grid lg:grid-cols-9'>
                                    <div className='lg:col-span-2'>

                                        <div className='w-20 h-20 border border-primary-color border-opacity-50 rounded-full my-5 lg:my-0'>
                                            <img src={user?.photoUrl || '/home/feature2.png'} alt="profile" className='w-20 h-20 rounded-full' />
                                        </div>
                                    </div>

                                    <div className='border border-primary-color border-opacity-50 rounded-md text-center lg:col-span-7 p-5'>
                                        <div ></div>
                                        <div>
                                            {/* TODO: */}
                                            <input type="file" className='block' />
                                        </div>

                                        <h6 className='font-semibold'>Click to upload</h6>
                                        <p className='text-xs opacity-70'>png or jpg (max: 800*400 px)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
};

export default Profile;