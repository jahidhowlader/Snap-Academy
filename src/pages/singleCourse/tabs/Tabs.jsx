import PropTypes from "prop-types";
import { useState } from 'react';
import Description from './Description';
import AdditionalInformation from './AdditionalInformation';
import CourseReviews from './CourseReviews';

const Tabs = ({ course }) => {

    const [tab, setTabs] = useState('DESCRIPTION')

    return (
        <div className="m-24 2xl:mt-[150px] 2xl:mb-[100px] md:w-10/12 lg:w-8/12  xl:w-1/2 mx-auto mb-40 px-5 m:px-0">
            <div className="flex 2xl:items-center justify-center text-primary-color font-medium mb-10 sm:pb-10 2xl:pb-[100px] text-xs 2xl:text-base">
                <div className="border-b w-10 py-2"> <span className="opacity-0">###</span></div>
                <div
                    className={`py-2 px-2 sm:px-10 2xl:px-[50px] cursor-pointer  ${tab === 'DESCRIPTION' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'}`}
                    onClick={() => setTabs('DESCRIPTION')}
                >
                    DESCRIPTION
                </div>

                <div
                    className={`py-2 px-2 sm:px-10 2xl:px-[50px] cursor-pointer  ${tab === 'ADDITIONAL' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'}`}
                    onClick={() => setTabs('ADDITIONAL')}
                >ADDITIONAL <span className='hidden'>INFORMATION</span></div>

                <div
                    className={`py-2 px-2 sm:px-10 2xl:px-[50px] cursor-pointer  ${tab === 'REVIEWS' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'} `}
                    onClick={() => setTabs('REVIEWS')}
                >
                    REVIEWS
                </div>

                <div className={`w-10 py-2 border-b`}> <span className="opacity-0">###</span></div>
            </div>

            {
                tab === 'DESCRIPTION' ? <Description description={course.description}/> : tab === 'ADDITIONAL' ? <AdditionalInformation course={course}/> : tab === 'REVIEWS' ? <CourseReviews review  ={course.review} /> : ''
            }
        </div>
    );
};

Tabs.propTypes = {
    course: PropTypes.object.isRequired
};

export default Tabs;