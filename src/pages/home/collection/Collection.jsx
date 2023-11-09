import { HiArrowLongRight } from "react-icons/hi2";

const Collection = () => {

    return (
        <section className="grid lg:grid-cols-3 gap-8 my-36">
            <div className="py-11 px-14 2xl:py-16 2xl:px-7 flex justify-end items-end  border-gray shadow-xl border-opacity-10 rounded-lg bg-gray bg-opacity-20 relative overflow-hidden">
                <img src="/home/feature2.png" alt="feature" className='absolute rotate-180 opacity-30 sm:opacity-70 -top-40 sm:-top-80 lg:-top-48  2xl:-top-48 -left-56 lg:-left-24 2xl:-left-20 ' />
                <div className="flex flex-col justify-end items-end">
                    <p className="text-lg font-medium text-green">Only On Our Store!</p>
                    <h6 className="text-2xl 2xl:text-[32px] font-bold pb-7 text-green">Snap Academy</h6>
                    <button className="bg-primary-color py-2 px-5 rounded-lg text-white flex items-center gap-2">
                        Shop Now <HiArrowLongRight className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className="lg:col-span-2">

                <div className=" grid md:grid-cols-2 gap-8">
                    <div className="py-11 px-14 border border-gray shadow-xl border-opacity-10 rounded-lg bg-gray bg-opacity-20 relative overflow-hidden">
                        <img src="/home/feature1.png" alt="feature" className='absolute w-1/2 opacity-70 -top-10 sm:-top-20 lg:-top-10 2xl:-top-10 -right-10 sm:-right-12 2xl:-right-20 ' />

                        <p className="text-lg font-medium text-green">New Collection</p>
                        <h6 className="text-2xl 2xl:text-[32px] font-bold pb-7 text-green">Wedding Plan</h6>
                        <button className="bg-primary-color py-2 px-5 rounded-lg text-white flex items-center gap-2">
                            Shop Now <HiArrowLongRight className="text-2xl" />
                        </button>
                    </div>
                    <div className="py-11 px-14 border border-gray shadow-xl border-opacity-10 rounded-lg bg-gray bg-opacity-20 relative overflow-hidden">
                        <img src="/16.png" alt="feature" className='absolute w-1/2 opacity-60 -top-10 sm:-top-20 lg:-top-10 2xl:-top-10 -right-10 sm:-right-12 2xl:-right-20 ' />
                        <p className="text-lg font-medium text-green">Upto 40% off</p>
                        <h6 className="text-2xl 2xl:text-[32px] font-bold pb-7 text-green">The Most Sell</h6>
                        <button className="bg-primary-color py-2 px-5 rounded-lg text-white flex items-center gap-2">
                            Shop Now <HiArrowLongRight className="text-2xl" />
                        </button>
                    </div>
                </div>

                <div className="py-11 px-14  border-gray shadow-xl border-opacity-10 rounded-lg bg-gray bg-opacity-20 mt-8 relative overflow-hidden">
                    <img src="/home/feature2.png" alt="feature" className='absolute opacity-20 sm:opacity-80 -top-40 sm:top-0 sm:-bottom-20 lg:-bottom-10 2xl:-bottom-72 -right-60 sm:-right-32 2xl:-right-20 grayscale' />

                    <p className="text-lg font-medium text-green">Collection Of Editing    </p>
                    <h6 className="text-2xl 2xl:text-[32px] font-bold pb-7 text-green">Photoshop / AI</h6>
                    <button className="bg-primary-color py-2 px-5 rounded-lg text-white flex items-center gap-2">
                        Shop Now <HiArrowLongRight className="text-2xl" />
                    </button>
                </div>


            </div>
        </section>
    );
};

export default Collection;