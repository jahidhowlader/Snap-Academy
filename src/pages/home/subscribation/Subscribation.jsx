import { HiArrowLongRight } from "react-icons/hi2";

const Subscribation = () => {
    return (
        <section className="bg-[#dfdcdd] px-5 relative">
            <div className="max-w-[1520px] mx-auto w-full ">
                <div className=" lg:mx-0 2xl:mx-ato py-32 xl:py-[110px] ">
                    <h2 className="font-bold md:text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-light-green">Subscribe to Get notified <br />about new amazing products</h2>
                    <p className="xl:text-[18px] md:text-center lg:text-left pt-3 pb-7">There are many variations of passages of Lorem Ipsum available, but th.</p>

                    <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-start lg:items-center gap-3">
                        <input type="text" className="bg-white px-6 2xl:px-6 py-2 2xl:py-4 w-full sm:w-[380px] xl:w-[480px] rounded 2xl:rounded-[10px] outline-light-green" placeholder="E-mail" />
                        <button className='bg-light-green text-white py-2 px-5 md:py-2.5 2xl:py-3 xl:px-7 rounded 2xl:rounded-[10px] text-sm 2xl:text-2xl font-semibold flex items-center gap-2'>Subscribe <HiArrowLongRight /></button>
                    </div>
                </div>
            </div>

            <img src="/public/bg1.png" alt="subscribation" className="absolute right-0 top-0 -mt-20 opacity-50 hidden lg:block mx-auto" />
        </section>
    );
};

export default Subscribation;