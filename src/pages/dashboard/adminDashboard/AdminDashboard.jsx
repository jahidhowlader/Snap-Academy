import useRetriveDataFromDB from '../../../hooks/useRetriveDataFromDB';

const AdminDashboard = () => {

    const { allUsers, allCourses } = useRetriveDataFromDB()

    console.log('8', allCourses);

    return (
        <section>
            <div className='grid sm:grid-cols-2 xl:grid-cols-4 xl:items-center xl:justify-between gap-5 lg:gap-10 w-full px-5 xl:px-0 lg:mx-0 mt-5'>

                {/* <div className='border h-20 w-full'>

                </div> */}
                <div className='bg-green bg-opacity-70 w-full h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white uppercase'>
                    <h5>User</h5>
                    <h4 className='text-4xl font-bold'>{allUsers?.length}</h4>
                </div>
                <div className=' bg-light-green bg-opacity-70  h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white uppercase p-5'>
                    <h5>Courses</h5>
                    <h4 className='text-4xl font-bold'> {allCourses?.length}</h4>
                </div>
                <div className='  bg-black uppercase bg-opacity-70 h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white'>
                    <h5>Instructor</h5>
                    <h4 className='text-4xl font-bold'> 7</h4>
                </div>
                <div className='bg-error bg-opacity-60 h-[150px] flex flex-col justify-center items-center rounded xl:rounded-md text-white uppercase'>
                    <h5>Enrolled</h5>
                    <h4 className='text-4xl font-bold'> {allCourses && allCourses.reduce((acc, cur) => acc + cur.enrolled, 0)}</h4>
                </div>

            </div>
        </section>
    );
};

export default AdminDashboard;