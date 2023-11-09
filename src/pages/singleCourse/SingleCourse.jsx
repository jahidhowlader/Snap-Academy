import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { useState } from "react";
import { HiArrowPath, HiMinusSmall, HiPlus } from "react-icons/hi2";

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#0F5259',
    inactiveFillColor: '#d2d2d2'
}

const SingleCourse = () => {

    const [tab, setTabs] = useState('DESCRIPTION')

    return (
        <section className="2xl:py-[90px]">
            <div className="grid lg:grid-cols-2 gap-[100px]">

                {/* Product Photo */}
                <div className="overflow-hidden rounded-xl">
                    <img src="/home/course4.png" alt="single product" className='w-full mx-auto rounded-xl shadow-2xl hover:scale-125 duration-[2000ms] max-h-[426px]' />
                </div>

                {/* Product Information */}
                <div className="space-y-2">
                    <h3 className="text-3xl font-semibold">Commodo Augue Nisi</h3>
                    <div className="flex items-center gap-4">

                        {/* REVIEW */}
                        <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />
                        <p className="opacity-60">(Customer review)</p>
                    </div>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        Pellentesque habitant morbi tristique senectus.</p>

                    <p><span className="text-primary-color font-medium">Product Code:</span> JKI455OL</p>
                    <p><span className="text-primary-color font-medium">Availability:</span> In Stock</p>

                    <div className="flex items-center gap-5 pb-5">
                        <h4 className="text-primary-color font-bold 2xl:text-3xl">$70.00</h4>
                        <h4 className=" 2xl:text-[28px] font-extralight line-through">$70.00</h4>
                    </div>

                    <div className="w-[100px] flex items-center shadow-lg rounded-md">
                        <span className="w-[30px] h-[30px] border border-primary-color bg-white flex justify-center items-center rounded-md rounded-r-none">
                            <HiMinusSmall className="text-primary-color  cursor-pointer" />
                        </span>
                        <span className="w-[40px] h-[30px] text-center bg-white flex justify-center items-center">
                            1
                        </span>
                        <span className="w-[30px] h-[30px] border border-primary-color bg-white flex justify-center items-center rounded-md rounded-l-none">
                            <HiPlus className="text-primary-color cursor-pointer" />
                        </span>
                    </div>

                    <div className="flex items-center gap-5 pt-5">
                        <button className="bg-primary-color px-6 py-2 rounded-md text-white">Add to Cart</button>

                        <div className="bg-white p-3 shadow-md rounded-lg">
                            <HiArrowPath className="text-primary-color" />
                        </div>
                    </div>

                    {/* TODO: SHARE WITH SOCIAL MEDIA */}
                    {/* <div>
                        <p>Share</p>

                        <div>
                            <FaFacebookF />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* PRODUCT DETAILS && ADITION INFORMATION && REVIEW*/}
            {/* USE REACT TABS */}
            <div className="2xl:pt-[150px] 2xl:pb-[100px] w-1/2 mx-auto cursor-pointer">

                <div className="flex 2xl:items-center 2xl:justify-center text-primary-color font-medium">
                    <div
                        className={`py-2 ${tab === 'DESCRIPTION' ? 'border px-5 border-b-0 rounded-lg rounded-b-none' : 'border-b px-[50px]'} `}
                        onClick={() => setTabs('DESCRIPTION')}
                    >
                        DESCRIPTION
                    </div>

                    <div
                        className={`py-2 ${tab === 'ADDITIONAL' ? 'border px-5 border-b-0' : 'border-b px-[50px]'} `}
                        onClick={() => setTabs('ADDITIONAL')}
                    >ADDITIONAL INFORMATION</div>

                    <div
                        className={`py-2 ${tab === 'REVIEWS' ? 'border px-5 border-b-0' : 'border-b px-[50px]'} `}
                        onClick={() => setTabs('REVIEWS')}
                    >REVIEWS</div>
                </div>

                {
                    tab === 'DESCRIPTION' ? (
                        <>
                            <div className="text-center pt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nihil dolorum earum eaque, quasi sunt minus fugiat excepturi expedita odit corrupti consectetur nisi quisquam enim porro animi libero officia neque!</div>
                        </>
                    ) : tab === 'ADDITIONAL' ? (
                        <>
                        </>
                    ) : tab === 'REVIEWS' ? (
                        <>
                            <div className="flex gap-5 pt-[100px]">
                                {/* User Image */}
                                <div className="w-[150px] h-auto">
                                    <img src="/Oval.png" alt="Oval" className="w-[70px] h-[70px] rounded-full" />
                                </div>

                                {/* Content && date */}
                                <div className="relative">

                                    <div className="flex items-center gap-5 pb-5">
                                        <h6 className="font-semibold">Petter pan</h6>
                                        <p className="italic font-thin  text-sm">20/12/2023</p>
                                    </div>
                                    <p className="opacity-60">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                                    {/* Review  Rating*/}
                                    <div className="absolute top-0 right-0">
                                        <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />

                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="flex gap-5 pt-[100px]">
                                {/* User Image */}
                                <div className="w-[150px] h-auto">
                                    <img src="/Oval.png" alt="Oval" className="w-[70px] h-[70px] rounded-full" />
                                </div>

                                {/* Content && date */}
                                <div className="relative">

                                    <div className="flex items-center gap-5 pb-5">
                                        <h6 className="font-semibold">Petter pan</h6>
                                        <p className="italic font-thin  text-sm">20/12/2023</p>
                                    </div>
                                    <p className="opacity-60">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                                    {/* Review  Rating*/}
                                    <div className="absolute top-0 right-0">
                                        <Rating style={{ maxWidth: 100 }} value={4} itemStyles={ratingStyle} readOnly />

                                    </div>
                                </div>
                            </div>
                        </>
                    ) : ''
                }

            </div>

        </section>
    );
};

export default SingleCourse;