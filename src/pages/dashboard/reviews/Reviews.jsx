import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';


const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

// GET TOKEN FROM LOCAL STORAGE
const token = localStorage.getItem('access-token')

// INJECT HEADER IN FETCH
const axiosConfig = {
    headers: {
        authorization: token
    }
};


const Reviews = () => {

    // ALL STATE ARE HERE
    const [submitLoading, setSubmitLoading] = useState(false)
    const [rating, setRating] = useState(5);

    // IMPORT AUTHCONTEXT
    const { user } = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // SUBMIT REVIEW
    const onSubmit = async (data) => {

        setSubmitLoading(true)

        data.rating = rating

        try {

            if (!user) {
                setSubmitLoading(false)
                return toast.error('SIGNIN FIRST')
            }

            // USER REVEW ABOUT WEBSITE
            await axios.post(`http://localhost:3000/reviews/${user?.email}`,
                {
                    email: user?.email,
                    userName: user?.displayname,
                    photo: user?.photoURL || '',
                    rating: data.rating,
                    suggetion: data.suggetion || '',
                    review: data.comment,
                    name: user?.displayName
                },
                axiosConfig
            )
            reset()
            toast.success('We Appriciate your opinion')
            setSubmitLoading(false)

        } catch (e) {

            toast.error(e.code);
            console.log(e);
            setSubmitLoading(false)
        }
    }


    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Reviews | Snap Academy</title>
            </Helmet>

            <section className='bg-primary-color bg-opacity-10 p-10 lg:rounded xl:rounded-md'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-center gap-6'>
                    <h4 className='lg:text-2xl'>Rate Us!</h4>
                    <Rating
                        style={{ maxWidth: 200 }}
                        value={rating || 3}
                        {...register("rating")}
                        onChange={setRating} itemStyles={ratingStyle} />

                    <div>

                        <div className='flex flex-col'>
                            <p>Do you have any suggestion for us?</p>
                            <input
                                type="text"
                                placeholder='Suggetion'
                                className={`bg-white px-5 py-2 w-full sm:w-[400px] rounded xl:rounded-md mt-2 ${errors.suggetion ? 'outline-error border border-error' : 'border border-primary-color outline-primary-color'}`}
                                {...register("suggetion",
                                    { maxLength: { value: 50, message: 'This field length should be less than 50 characters' } }
                                )}
                            />
                            {
                                errors?.suggetion?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.suggetion?.message}</span> : ''
                            }
                        </div>


                        <div className='my-5'>
                            <p>Kindly express your care in a short way! <span className='text-error'>*</span></p>
                            <div className='flex flex-col'>
                                <textarea
                                    {...register("comment",
                                        { required: 'This Field is required', maxLength: { value: 200, message: 'This field length should be less than 200 characters' } }
                                    )}
                                    className={`py-2 px-4 rounded xl:rounded-md mt-2 w-full sm:w-[400px] ${errors.comment ? 'outline-error border border-error' : 'border border-primary-color outline-primary-color'}`} placeholder='Reveiw in details' rows={5}>

                                </textarea>
                                {
                                    errors?.comment?.type === 'required' ? <span className='text-error font-medium'>{errors?.comment?.message}</span> :
                                        errors?.comment?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.comment?.message}</span> : ''
                                }
                            </div>
                        </div>

                    </div>
                    <input type="submit" value={submitLoading ? 'Proccessing...' : 'Submit Review'} className='bg-primary-color px-5 py-2 rounded-md text-white cursor-pointer' />
                </form>
            </section>
        </>

    );
};

export default Reviews;