import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiArrowLongRight } from "react-icons/hi2";



const Subscribation = () => {

    // REACT HOOK FORM
    const { register, handleSubmit, reset } = useForm()

    // SUBMIT FOR SBSCRIBRATION
    const onSubmit = async (data) => {

        try {

            await fetch('https://snap-academy-server.vercel.app/subscribation', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email: data.email })
            })
                .then(res => res.json())
                .then(() => {

                    toast.success('Thanks For subscribtion')
                    reset()
                })

        } catch (e) {
            toast.error('Subcribation Faild');
        }
    }

    return (
        <section className="bg-[#dfdcdd] px-5 relative">
            <div className="max-w-[1520px] mx-auto w-full ">
                <div className=" lg:mx-0 2xl:mx-ato py-32 xl:py-[110px] ">
                    <h2 className="font-bold md:text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-primary-color">Subscribe to Get notified <br />about new amazing products</h2>
                    <p className="xl:text-[18px] md:text-center lg:text-left pt-3 pb-7">There are many variations of passages of Lorem Ipsum available, but th.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row md:justify-center lg:justify-start items-start lg:items-center gap-3">
                        <input
                            name="email"
                            type="email"
                            className="bg-white px-6 2xl:px-6 py-2 2xl:py-4 w-full sm:w-[380px] xl:w-[480px] rounded outline-primary-color"
                            placeholder="E-mail"
                            {...register("email",
                                {
                                    required: 'Email is required', pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Invalid email address'
                                    }
                                }
                            )}
                            required
                        />

                        <button className='bg-primary-color text-white py-2 px-5 md:py-2.5 2xl:py-3 xl:px-7 rounded text-sm 2xl:text-2xl font-semibold flex items-center gap-2'>Subscribe <HiArrowLongRight /></button>
                    </form>
                </div>
            </div>

            <img src="/bg1.png" alt="subscribation" className="absolute right-0 top-0 -mt-[85px] opacity-50 hidden lg:block mx-auto" />
        </section>
    );
};

export default Subscribation;