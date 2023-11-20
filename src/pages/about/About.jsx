import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './About.css'
import { useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const About = () => {

    const [countingStarted, setCountingStarted] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible && !countingStarted) {
            setCountingStarted(true);
        }
    };

    return (
        <section className="mb-28 xl:mb-52">

            {/* Banner */}
            <div className='bg-[#f7f9fa]'>

                <div className="my-container flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 ">
                    <h1 className="text-4xl sm:text-5xl line-gap order-2 md:order-1 p-5 font-semibold">We share <br /> knowledge <br /> with the world</h1>

                    <div className='order-1 md:order-2'>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/about-us.png" alt="abot banner" className='object-cover' />
                    </div>
                </div>
            </div>

            <h1 className='py-5 text-center shadow-sm border border-gray border-opacity-30 text-lg sm:text-xl font-bold text-primary-color'>Checkout our latest company news</h1>

            <div className='mt-28 '>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold lg:pb-8 text-center'>Improving lives through learning</h3>
                <p className='text-lg text-center lg:w-5/12 lg:mx-auto'>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we empower organizations and individuals with flexible and effective skill development.</p>

                <div className='relative '>
                    <div className='my-container my-28 flex '>
                        <div className='pl-40 flex-1'>
                            <img src="/about.png" alt="about" className='object-cover rounded xl:rounded-md' />
                        </div>

                        <div className='flex-1 pl-10'>
                            <h3 className='text-3xl font-bold py-10'>Transforming Knowledge</h3>
                            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ratione blanditiis facere maxime tempora laudantium ducimus sit id, voluptate officiis ?</p>
                        </div>
                    </div>

                    <div className='bg-primary-color top-20 left-0 h-96 absolute z-50'></div>
                </div>
            </div>

            <div className='p-16 bg-[#f7f9fa]'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold lg:pb-8 text-center '>We just keep growing</h3>
                <p className='text-lg text-center lg:w-5/12 lg:mx-auto'>Our global community and our course catalog get bigger every day.Check out our latest numbers as of September 2023.</p>

                <div className="grid grid-cols-4 gap-10 my-container mt-12">

                    {/* Learners */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={13} />k+</h1>
                            }

                            <p>Learners</p>
                        </div>
                    </VisibilitySensor>

                    {/* Instructor */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={2} />k+</h1>
                            }

                            <p>Instructors</p>
                        </div>
                    </VisibilitySensor>

                    {/* Courses */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={17} />k+</h1>
                            }

                            <p>Courses</p>
                        </div>
                    </VisibilitySensor>

                    {/* Enrolled */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={377} />k+</h1>
                            }

                            <p>Enrolled</p>
                        </div>
                    </VisibilitySensor>
                </div>

                <div className="grid grid-cols-2 gap-10 my-container mt-12">

                    {/* Learners */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={10} /></h1>
                            }

                            <p>Language</p>
                        </div>
                    </VisibilitySensor>

                    {/* Instructor */}
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-center'>
                            {
                                countingStarted && <h1 className="text-6xl font-semibold"><CountUp end={15} />k+</h1>
                            }

                            <p>Enterprise customers</p>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>

            <div className='mt-28 my-container '>
                <p className='text-lg text-center lg:w-7/12 lg:mx-auto'>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                </p>
                <div className='flex justify-center my-5'>
                    <button className='mx-auto bg-primary-color px-5 py-2 text-white rounded xl:rounded-md'>Learn More</button>
                </div>

                <div className='grid grid-cols-3 gap-10 mt-12'>

                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex text-4xl text-primary-color'>
                                <RiDoubleQuotesL />
                                <RiDoubleQuotesR />
                            </div>

                            <h4 className='text-2xl '>Snap Academy fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</h4>
                        </div>

                        <div className='mt-16'>
                            <h6 className='font-semibold text-primary-color'>Varun Patil</h6>
                            <p>Senior Manager of HR Development</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex text-4xl text-primary-color'>
                                <RiDoubleQuotesL />
                                <RiDoubleQuotesR />
                            </div>

                            <h4 className='text-2xl '>In total, it was a big success, I would get emails about what a fantastic resource it was.</h4>
                        </div>

                        <div className='mt-16'>
                            <h6 className='font-semibold text-primary-color'>Alfred Helmerich</h6>
                            <p>Executive Training Manager</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex text-4xl text-primary-color'>
                                <RiDoubleQuotesL />
                                <RiDoubleQuotesR />
                            </div>

                            <h4 className='text-2xl font-'>Snap Academy responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.</h4>
                        </div>

                        <div className='mt-16'>
                            <h6 className='font-semibold text-primary-color'>Luz Santillana Romero</h6>
                            <p>Development and Engagement Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f7f9fa] mt-28 py-20 px-20'>

                <div className='my-container flex flex-wrap items-center justify-center gap-20 '>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2022/01/gofundme.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/Tata_logo.png" alt="company" className='w-20' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/eventbrite-logo-grey.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/box_logo.png" alt="company" className='w-28' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/Aflac_logo1.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/SurveyMonkey-logo-grey.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/Kaiser-logo-grey.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/Nordea.png" alt="company" className='w-48' />
                    </div>
                    <div>
                        <img src="https://about.udemy.com/wp-content/uploads/2021/07/VW-logo-grey.png" alt="company" className='w-20' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;


// <div className='text-center'>
//                     <h1 className="text-7xl font-semibold"><CountUp end={17} /></h1>
//                     <p className='uppercase'>Instructor</p>
//                 </div>
//                 <div className='text-center'>
//                     <h1 className="text-7xl font-semibold"><CountUp end={17} /></h1>
//                     <p className='uppercase'>Courses</p>
//                 </div>
//                 <div className='text-center'>
//                                            <h1 className="text-7xl font-semibold"><CountUp end={319} /></h1>
//                         <p className='uppercase'>Enrolled</p>
//                     </div>










{/* Banner */ }
{/* <div className='bg-[#f7f9fa]'>

<div className="my-container flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 ">
    <h1 className="text-4xl sm:text-5xl line-gap order-2 md:order-1 p-5 font-semibold">We share <br /> knowledge <br /> with the world</h1>

    <div className='order-1 md:order-2'>
        <img src="https://about.udemy.com/wp-content/uploads/2021/07/about-us.png" alt="abot banner" className='object-cover' />
    </div>
</div>
</div>
 
<h1 c lassName='py-5 text-center shadow-sm border border-gray border-opacity-30 text-lg sm:text-xl font-bold text-primary-color'>Checkout our latest company news</h1>
 
    <div classNam e ='mt-28 '> 
<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold lg:pb-8 text-center'>Improving lives through learning</h3>
<p className='text-lg text-center lg:w-5/12 lg:mx-auto'>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we empower organizations and individuals with flexible and effective skill development.</p>

<div className='border h-96'>

</div>
</div>

<VisibilitySensor className='p-16 bg-[#75D8BA]'>
<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold lg:pb-8 text-center '>We just keep growing</h3>
<p className='text-lg text-center lg:w-5/12 lg:mx-auto'>Our global community and our course catalog get bigger every day.Check out our latest numbers as of September 2023.</p>
    
<div className="grid grid-cols-4 gap-10 my-container mt-12">
    <div className='text-center'>
        <h1 className="text-7xl font-semibold"><CountUp end={113} /></h1>
        <p className='uppercase'>Learner</p>
    </div>
</div>
</VisibilitySensor> */}