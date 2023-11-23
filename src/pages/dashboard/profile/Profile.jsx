import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Profile = () => {

    // ALL STATE ARE HERE
    const [submitLoading, setSubmitLoading] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)

    // IMPORT AUTHCONTEXT
    const { user, updateUser, setLoading } = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    // ADD UPLOAD IMAGE WITH IMGBB
    const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);

        try {
            setSubmitLoading(true)
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_STOREIMG}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("Failed to upload image");

            const data = await res.json();

            setValue("photo", data.data.url);
            setImgUrl(data.data.url);
            setSubmitLoading(false)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setSubmitLoading(false)
        }
    }

    // SUBMIT FOR UPDATE USER INFO
    const onSubmit = async (data) => {

        const { firstname, lastname } = data
        let fullName = `${firstname} ${lastname}`

        if (fullName.length <= 1 && !data?.photo) {
            return toast.error('You have no change.')
        }

        setSubmitLoading(true)


        if (fullName.length <= 1) {
            fullName = user?.displayName
        }

        try {

            // UPDATE USERNAME AFTER SIGNUP ON FIREBASE
            await updateUser(fullName, imgUrl)
            reset()
            toast.success('Successfully Update your Profile')
            setSubmitLoading(false)
            setLoading(false)

        } catch (e) {

            toast.error('Something Error, Try again');
            console.log(e);
            setSubmitLoading(false)
        }
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Profile | Snap Academy</title>
            </Helmet>

            <section className='grid lg:gap-5 my-container lg:px-0 my-5 lg:my-0'>

                <div className='rounded-md text-black text-opacity-80 mx-3'>

                    <h3 className='text-2xl uppercase mb-10'><span className='font-bold'>{user?.displayName} </span> Profile</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5'>
                            <div>
                                <h6 className='font-semibold'>Personal Info</h6>
                                <p className='text-xs opacity-70'>Update your photo and personal details here</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                {/* <button  className='border-primary-color border border-opacity-50 px-3 py-1 rounded-md text-sm'>cancel</button> */}
                                <button className='bg-primary-color text-white px-3 py-1 rounded xl:rounded-md text-sm'>{submitLoading ? 'Proccessing...' : 'Save Changes'} </button>
                            </div>

                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* change Name field */}
                        <div className='sm:grid lg:grid-cols-9 items-start '>
                            <div className='sm:col-span-4'>
                                <h6 className='font-semibold'>Name</h6>
                            </div>

                            <div className='sm:col-span-5'>
                                <div className='flex flex-col sm:flex-row items-start gap-5'>

                                    <div className='flex-1 flex flex-col'>
                                        {/* Name Input */}
                                        <input type="text"
                                            placeholder="First Name"
                                            {...register("firstname",
                                                { maxLength: { value: 10, message: 'First Name length should be less than 10 characters' } }
                                            )}
                                            className={`block px-3 py-1 rounded xl:rounded-md w-full bg-transparent border-opacity-50 ${errors.firstname ? 'outline-error border border-error' : 'border border-primary-color outline-primary-color'}`} />
                                        {
                                            errors?.firstname?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.firstname?.message}</span> : ''
                                        }
                                    </div>

                                    <div className='flex-1 flex flex-col'>
                                        <input type="text"
                                            placeholder="Second Name"
                                            {...register("lastname",
                                                { maxLength: { value: 10, message: 'lastname length should be less than 10 characters' } }
                                            )}
                                            className={`block px-3 py-1 rounded xl:rounded-md w-full bg-transparent border-opacity-50 ${errors.lastname ? 'outline-error border border-error' : ' border border-primary-color outline-primary-color'}`}
                                        />
                                        {
                                            errors?.lastname?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.lastname?.message}</span> : ''
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* change Email Field*/}
                        <div className='sm:grid grid-cols-9 items-center '>
                            <div className='col-span-4'>
                                <h6 className='font-semibold'>Email</h6>
                            </div>

                            {/* Email Input */}
                            <div className='col-span-5'>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                    className={`block px-3 py-1 border border-primary-color outline-primary-color rounded xl:rounded-md w-[250px] sm:w-full bg-transparent border-opacity-50 ${errors ? 'border-red focus:border-red focus:outline-red' : ''}`} disabled />
                            </div>
                        </div>

                        <hr className='border opacity-5 my-5 ' />

                        {/* Change Photo Field */}
                        <div className='grid lg:grid-cols-9 '>
                            <div className='lg:col-span-4'>
                                <h6 className='font-semibold'>Your Photo</h6>
                                <p className='text-xs opacity-70'>This photo will be displayed on your profile</p>
                            </div>

                            <div className='lg:col-span-5'>
                                <div className='lg:grid lg:grid-cols-9'>
                                    <div className='lg:col-span-2'>

                                        <div className='w-20 h-20 border border-primary-color border-opacity-50 rounded-full my-5 lg:my-0'>
                                            <img src={imgUrl || user?.photoURL || '/user.png'} alt="profile" className='w-20 h-20 rounded-full object-cover' />
                                        </div>
                                    </div>

                                    <div className='border border-primary-color border-opacity-50 rounded xl:rounded-md text-center lg:col-span-7 p-5'>
                                        <div ></div>
                                        <div>

                                            <input onChange={uploadImage} type="file" className='max-w-[200px] sm:w-full' />
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