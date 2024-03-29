import { HiArrowLongRight, HiOutlineXMark } from "react-icons/hi2";
import './UserCart.css'
import { Helmet } from "react-helmet-async";

const UserCart = () => {
    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Cart | Snap Academy</title>
            </Helmet>

            <section className="my-[60px] grid grid-cols-5">

                <div className="w-full h-[calc(100vh-100px)] col-span-4">
                    <div className="overflow-x-auto h-3/4">
                        <table className="w-full" id="userCart">
                            {/* head */}
                            <thead className="text-left bg-primary-color  text-white">
                                <tr className="">
                                    <th className="rounded- pl-4">Course Title</th>
                                    <th>Instructor</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                {/* row 1 */}
                                <tr className=" px-20">
                                    <td className="w-1/2 pl-3">
                                        <div className="flex items-center space-x-3">
                                            <div className=" w-32 h-auto">
                                                <img src="/home/course2.png" alt="Course Image" className="w-full" />
                                            </div>
                                            <div className="">
                                                <div className="font-bold">Hart Hagerty Hart Hagerty</div>
                                                <div className="text-sm opacity-50">REVIEW</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Jahid Howlader</td>
                                    <td>$200</td>
                                    <td>
                                        <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                    </td>
                                    <th>
                                        <button className="border rounded-full hover:text-error">
                                            <HiOutlineXMark className='p-0.5 ' />
                                        </button>
                                    </th>
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>

                    <div className="">
                        <hr />
                        <div className="flex justify-between items-center mt-5">

                            {/* Cupon code */}
                            <div className=" flex items-center gap-2">
                                <input type="text" className="px-5 py-2 bg-opacity-0 bg-black border outline-primary-color border-primary-color rounded-md" placeholder="Cupon Code" />
                                <button className="px-5 py-2 font-semibold text-primary-color bg-opacity-0 bg-black border border-primary-color rounded-md">Apply</button>
                            </div>

                            {/* Total Price */}
                            <div className="flex items-end">
                                <h5 className="uppercase text-xl font-bold">total: </h5>
                                <h2 className="text-primary-color font-bold text-4xl">$700 </h2>
                            </div>

                            {/* Order Button */}
                            <div>
                                <button className="bg-primary-color text-white px-5 py-2 rounded-md flex items-center gap-2">PLACE TO ORDER <HiArrowLongRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default UserCart;