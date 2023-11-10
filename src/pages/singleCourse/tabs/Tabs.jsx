import { useState } from 'react';
import UserReviews from './UserReviews';
import Description from './Description';
import AdditionalInformation from './AdditionalInformation';

const Tabs = () => {

    const [tab, setTabs] = useState('DESCRIPTION')

    return (
        <div className="2xl:pt-[150px] 2xl:pb-[100px] w-1/2 mx-auto ">
            <div className="flex 2xl:items-center 2xl:justify-center text-primary-color font-medium pb-[100px]">
                <div className="border-b w-10 py-2"> <span className="opacity-0">###</span></div>
                <div
                    className={`py-2 px-[50px] cursor-pointer  ${tab === 'DESCRIPTION' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'}`}
                    onClick={() => setTabs('DESCRIPTION')}
                >
                    DESCRIPTION
                </div>

                <div
                    className={`py-2 px-[50px] cursor-pointer  ${tab === 'ADDITIONAL' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'}`}
                    onClick={() => setTabs('ADDITIONAL')}
                >ADDITIONAL INFORMATION</div>

                <div
                    className={`py-2 px-[50px] cursor-pointer  ${tab === 'REVIEWS' ? 'border border-b-0  rounded-lg rounded-br-none rounded-bl-none' : 'border-b'} `}
                    onClick={() => setTabs('REVIEWS')}
                >
                    REVIEWS
                </div>

                <div className={`w-10 py-2 border-b`}> <span className="opacity-0">###</span></div>
            </div>

            {
                tab === 'DESCRIPTION' ? <Description /> : tab === 'ADDITIONAL' ? <AdditionalInformation /> : tab === 'REVIEWS' ? <UserReviews /> : ''

            }
        </div>
    );
};

export default Tabs;