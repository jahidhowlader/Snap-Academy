import { useState } from 'react';
import Description from './Description';
import AdditionalInformation from './AdditionalInformation';

const Tabs = () => {

    const [tab, setTabs] = useState('DESCRIPTION')

    return (
        <div className="mt-24 2xl:mt-[150px] mb-10 2xl:mb-[100px] 2xl:w-1/2 mx-auto ">
            <div className="flex 2xl:items-center justify-center text-primary-color font-medium mb-10 2xl:pb-[100px] text-xs">
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
                tab === 'DESCRIPTION' ? <Description /> : '' //tab === 'ADDITIONAL' ? <AdditionalInformation /> : tab === 'REVIEWS' ? <UserReviews /> : ''

            }
        </div>
    );
};

export default Tabs;