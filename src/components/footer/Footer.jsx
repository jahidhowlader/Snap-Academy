import React from 'react';
import Subscribation from '../../pages/home/subscribation/Subscribation';

const Footer = () => {
    return (
        <>
            <Subscribation />

            <nav className='bg-primary-color pt-[145px] pb-[110px] text-white px-5'>

                <div className='max-w-[1520px] mx-auto '>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div>
                            <h5 className='uppercase text-xl lg:pb-5'>Contact Us</h5>

                            <ul className='lg:space-y-5'>
                                <li>32 East Bashabo, Dhaka - 1214</li>
                                <li>01625 405959</li>
                                <li>jahidhowlader.info@gmail.com</li>
                            </ul>

                            <div className='hidden lg:block'>
                                <h5 className='text-xl pt-5 lg:pt-12'>PAYMENT</h5>
                                <ul className='flex items-center gap-4'>
                                    <li>VISA</li>
                                    <li>PayPal</li>
                                    <li>Pay</li>
                                    <li className='leading text-right text-xs'>AMERICAN <br /> EXPRESS</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h5 className='uppercase text-xl lg:pb-5'>INFORMATION</h5>
                            <ul className='lg:space-y-5'>
                                <li>About us</li>
                                <li>Delivery Information</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className='uppercase text-xl lg:pb-5'>MY ACCOUNT</h5>
                            <ul className='lg:space-y-5'>
                                <li>My Account</li>
                                <li>Order History</li>
                                <li>Wish List</li>
                                <li>Specials</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className='uppercase text-xl lg:pb-5'>CUSTOMER SERVICE</h5>
                            <ul className='lg:space-y-5'>
                                <li>Contact Us</li>
                                <li>Site Map</li>
                                <li>Gift Certificates</li>
                                <li>Affiliate</li>
                                <li>Returns</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Footer;