const PaymentSuccess = () => {
    return (
        <section className="p-5 h-screen flex justify-center items-center my-container">
            <div className=" flex flex-col justify-center items-center ">
                <img src="/bkash1.jpg" alt="bkash" className="w-1/2 h-auto flex-1 -z-10 sm:pb-10" />
                <div className="text-center">
                    <h1 className=" text-3xl sm:text-5xl flex-1">Payment <span className="font-bold text-light-green">Success!</span></h1> <br className="hidden sm:block"/>
                    <span className="sm:text-xl">Check out your Dashboard.</span>
                </div>
            </div>
        </section>
    );
};

export default PaymentSuccess;