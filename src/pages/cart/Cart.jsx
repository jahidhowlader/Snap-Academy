import { Helmet } from 'react-helmet-async';
import { HiArrowLongRight, HiOutlineInformationCircle, HiOutlineXMark } from 'react-icons/hi2';
import useGetCourses from '../../hooks/useGetCourses';
import './Cart.css'
import { useState } from 'react';

const Cart = () => {


    // GET CARD LIST FROM LOCAL STORAGE
    const myCartList = JSON.parse(localStorage.getItem('cart'))

    // STATE FOR MONITOR CART LIST UPDATE RESULT
    const [updatedCartList, setUpdatedCartListCart] = useState(myCartList)

    // use HOOK FOR GET ALL COURSES AND FUNCTIONALITY
    const { courses } = useGetCourses()

    const carts = courses?.filter(course => myCartList?.includes(course._id))
    const totalOrderPrice = carts?.reduce((acc, cur) => acc + cur.price, 0)

    // HANDLER REMOVE COURSE FROM COURSE LIST
    const handlerRemoveCourseItem = (id) => {

        const newCartList = myCartList.filter(course => course !== id)

        setUpdatedCartListCart(newCartList)
        localStorage.setItem('cart', JSON.stringify(newCartList))

    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Cart | Snap Academy</title>
            </Helmet>

            <section className="my-[60px] overflow-scroll">

                <div className={`w-full ${!updatedCartList?.length ? 'h-[calc(100vh-500px)]' : 'h-[calc(100vh-100px)]'}`}>

                    {
                        !updatedCartList?.length ?
                            <>
                                <div className='flex justify-center items-center gap-2'>
                                    <HiOutlineInformationCircle size={30} />
                                    <h3 className='py-24 text-2xl'> You have no items in your cart</h3>
                                </div>
                            </> :
                            (
                                <>
                                    <div className="overflow-x-auto h-3/4">
                                        <table className="w-full" id="cart">
                                            {/* head */}
                                            <thead className="text-left bg-primary-color text-white" id='cardHead'>
                                                <tr className="">
                                                    <th className="">Course Title</th>
                                                    <th>Instructor</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                {/* row 1 */}
                                                {
                                                    carts.map(course => <tr
                                                        key={course._id}
                                                        className=" px-20">
                                                        <td className="w-1/2">
                                                            <div className="flex items-center space-x-3">
                                                                <div className=" w-32 h-auto">
                                                                    <img src={course.photo} alt="Course Image" className="w-full" />
                                                                </div>
                                                                <div className="">
                                                                    <div className="font-bold">{course.title}</div>
                                                                    <div className="text-sm opacity-50">REVIEW</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td>{course.instructors.map(instructor => <span key={instructor}>{instructor}, <br /></span>)}</td>
                                                        <td>${course.price}</td>
                                                        <td>
                                                            <button className="bg-primary-color px-2 text-white rounded-md text-sm">Purchase</button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => handlerRemoveCourseItem(course._id)} className="border rounded-full hover:text-error">
                                                                <HiOutlineXMark className='p-0.5 ' />
                                                            </button>
                                                        </td>
                                                    </tr>)
                                                }


                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="">
                                        <hr />
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 mt-5">

                                            {/* Cupon code */}
                                            <div className=" md:flex items-center gap-2 hidden">
                                                <input type="text" className="px-5 py-2 bg-opacity-0 bg-black border outline-primary-color border-primary-color rounded-md" placeholder="Cupon Code" />
                                                <button className="px-5 py-2 font-semibold text-primary-color bg-opacity-0 bg-black border border-primary-color rounded-md">Apply</button>
                                            </div>

                                            {/* Total Price */}
                                            <div className="flex items-end">
                                                <h5 className="uppercase text-xl font-bold">total: </h5>
                                                <h2 className="text-primary-color font-bold text-4xl">${totalOrderPrice} </h2>
                                            </div>

                                            {/* Order Button */}
                                            <div>
                                                <button className="bg-primary-color text-white px-5 py-2 rounded-md flex items-center gap-2 my-5 lg:my-0">PLACE TO ORDER <HiArrowLongRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;