import { Rating, ThinRoundedStar } from '@smastrom/react-rating';

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#0F5259',
    inactiveFillColor: '#d2d2d2'
}

const UserReviews = ({ course }) => {
    return (
        <>
            {
                course.review.map((StudentReview, idx) => (
                    <>
                        <div key={idx} className="flex gap-5 ">
                            <div className="w-[150px] h-auto">
                                <img src={StudentReview.userImage} alt="Oval" className="w-[70px] h-[70px] rounded-full" />
                            </div>

                            {/* Content && date */}
                            <div className="relative">

                                <div className="flex items-center gap-5 pb-5">
                                    <h6 className="font-semibold">{StudentReview.userName}</h6>
                                    <p className="italic font-thin  text-sm">20/12/2023</p>
                                </div>
                                <p className="opacity-60">{StudentReview.reviewDecp}</p>

                                {/* Review  Rating*/}
                                <div className="absolute top-0 right-0">
                                    <Rating style={{ maxWidth: 100 }} value={StudentReview.rating} itemStyles={ratingStyle} readOnly />

                                </div>
                            </div>
                        </div>
                        <hr className="border border-gray opacity-50 my-10" />
                    </>
                ))
            }


            {/* ADD YOUR REVIEW */}
            <div className='pt-[100px]'>
                <div>
                    <h5 className='text-primary-color font-bold text-xl text-center'>Add your review</h5>

                    <div className='flex justify-center items-center gap-5 pt-5'>
                        <h5 className='text-primary-color font-medium text-xl '>Your Rating</h5>
                        <Rating style={{ maxWidth: 100 }} value={0} itemStyles={ratingStyle} />

                    </div>

                    <div className='flex items-center justify-center gap-[50px] pt-5 pb-12'>
                        <div className='flex-1'>
                            <input type="text" className='border-primary-color border bg-[#EDFFFD] py-2 px-4 rounded w-full outline-primary-color' placeholder='Enter your name' />
                        </div>

                        <div className='flex-1'>
                            <input type="email" className='border-primary-color border bg-[#EDFFFD] py-2 px-4 rounded w-full outline-primary-color' placeholder='Email' />
                        </div>
                    </div>

                    <div>
                        <textarea className='border-primary-color border bg-[#EDFFFD] py-2 px-4 rounded w-full outline-primary-color' placeholder='Write your comment' rows={5}></textarea>
                    </div>

                    <div className='mt-2 flex justify-end'>
                        <button className='bg-primary-color text-white px-9 py-2 rounded-md '>Submit</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default UserReviews;