import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SearchCourse = ({ courses, searchQuery, setSearchQuery }) => {

    const [clickSearch, setClickSearch] = useState(false)

    const handlerSearchCourse = (e) => {
        console.log('search', e.target.value);
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const closePopup = (event) => {
            if (clickSearch && event.target.closest('.popup-content') === null) {
                setClickSearch(false);
            }
        };

        if (clickSearch) {
            document.body.addEventListener('click', closePopup);
        }

        return () => {
            document.body.removeEventListener('click', closePopup);
        };
    }, [clickSearch, setClickSearch]);


    return (
        <>
            <div
                className='relative w-full popup-content'
                onClick={() => setClickSearch(true)}
            >
                <input
                    type="text"
                    className='shadow-sm border border-gray border-opacity-30 rounded-md px-5 w-full'
                    placeholder="Search courses"
                    onChange={handlerSearchCourse}
                />
                <HiMiniMagnifyingGlass className='absolute top-1/2 right-1 -translate-y-1/2' />

                {/* POPUP SEARCH */}
                {
                    clickSearch && (
                        <>
                            <div className="bg-white p-3 w-full rounded xl:rounded-md top-9 left-1/2 -translate-x-1/2 z-10 absolute shadow-sm border border-gray border-opacity-30 ">

                                {
                                    searchQuery === '' ? (
                                        <>
                                            <div className="space">
                                                <div className="shadow-sm border border-gray border-opacity-30 p-2 rounded xl:rounded-md mb-1">
                                                    <Link to={`/course/655c9794e82b9a9897477c20`} className="hover:underline">Advertising Photography Essentials by<span className="text-xs font-bold"> Christopher Parker</span></Link>
                                                </div>
                                                <div className="shadow-sm border border-gray border-opacity-30 p-2 rounded xl:rounded-md">
                                                    <Link to={`/course/655c9794e82b9a9897477c21`} className="hover:underline">Corporate Headshots and Branding Photography <span className="text-xs font-bold">by Lily King</span></Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        courses && courses.slice(0, 5).map(course => <div
                                            key={course._id}
                                            className="shadow-sm border border-gray border-opacity-30 p-2 rounded xl:rounded-md mb-1"
                                        >
                                            <Link to={`/course/${course._id}`} className="hover:underline">
                                                <span>{course.title} <span className="text-xs font-bold">by {course.instructor}</span></span>
                                            </Link>
                                        </div>)
                                    )
                                }

                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

SearchCourse.propTypes = {
    courses: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};


export default SearchCourse;