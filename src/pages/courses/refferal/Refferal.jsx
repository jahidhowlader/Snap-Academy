import '../courses/Courses.css'

const Refferal = () => {
    return (
        <section className='mx-10 my-container'>

            <div className='discount mt-24 mb-10 sm:my-[90px] rounded'>

                <div className='p-10 text-white rounded xl:rounded-md flex flex-col sm:flex-row gap-5 items-start sm:justify-between sm:items-center'>

                    <div className='order-2 sm:order-1'>
                        <button className='bg-[#ffb800] px-12 py-3 rounded-xl '>Share</button>
                    </div>

                    <div className='order-1 sm:order-2'>
                        <h4 className='text-3xl font-bold'>GET 30% OFF</h4>
                        <p className='text-xl py-3'>Share your referral code <br /> and get discount</p>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Refferal;