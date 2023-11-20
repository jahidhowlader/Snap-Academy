import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
import { useEffect, useState } from "react";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

const ratingStyle = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://snap-academy-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (

        <>

            <section className="my-container my-28 xl:my-52">

                <div className=" text-center mb-10 px-5">
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary-color pb-3 lg:pb-8'>What Our Customers Are Saying</h2>
                    <p className="w-full sm:w-3/4 mx-auto">But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                        pain was born and I will give you a complete.</p>
                </div>

                <Slider {...settings}>
                    {
                        reviews.map(review => <div
                            key={review._id}
                            className="shadow-sm border border-gray border-opacity-30  rounded xl:rounded-md bg-white text-whit"
                        >
                            <div className="p-5 pb-0">
                                <div>
                                    <img src={review.photo} alt="Image" className="w-16 h-16 object-cover rounded-full border border-white" />
                                </div>

                                <div className="mt-5 flex items-center justify-between">
                                    <h3 className="font-bold">{review.name}</h3>

                                    <div>
                                        <Rating style={{ maxWidth: 80 }} value={review.rating} itemStyles={ratingStyle} readOnly />

                                    </div>
                                </div>
                            </div>

                            <hr className="my-2 border border-gray border-opacity-30" />

                            <p className="p-5 text-xs opacity-90 tracking-wide">{review.review}</p>
                        </div>)
                    }

                    {/* <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div> */}
                </Slider>
            </section>
        </>
    );
};

export default Testimonial;