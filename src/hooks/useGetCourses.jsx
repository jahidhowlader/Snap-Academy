import { useEffect, useState } from 'react';

const useGetCourses = () => {

    // ALL STATE ARE HERE
    const [minPrice, setMinPrice] = useState(0) //FOR USER SEE MINIMUM PRICE OF COURSES 
    const [maxPrice, setMaxPrice] = useState(0) //FOR USER SEE MAXIUM PRICE OF COURSES
    const [sortingCourses, setSortingCourses] = useState('default') // FOR USER CAN SORTING ON ACCENDING AND DESENCING ORDER
    const [priceQuery, setPriceQuery] = useState('') // FOR USER FILTER COURSES BY PRICE
    const [courseLoading, setCourseLoading] = useState(true); // LOADING FOR WHEN DATA PROCCESSING FROM BACKEND
    const [courses, setCourses] = useState([]); // COURSES CONTAINER FORM DATABASE
    const [searchQuery , setSearchQuery] = useState('')

    useEffect(() => {
        fetch(`https://snap-academy-server.vercel.app/courses?priceQuery=${priceQuery}&searchQuery=${searchQuery}`)
            .then(res => res.json())
            .then(data => {

                setCourses(data.courses);
                setMinPrice(data.minPrice)
                setMaxPrice(data.maxPrice)
                setCourseLoading(false);
            });
    }, [priceQuery, searchQuery ])

    // HANDLER DATA SORTING BY TITLE
    const handlerSortingCourses = (e) => {
        // SET SORTING FROM SELECT OPTION
        setSortingCourses(e.target.value)
    }

    return { courses, setCourses, minPrice, setMinPrice, maxPrice, setMaxPrice, sortingCourses, setSortingCourses, priceQuery, setPriceQuery, courseLoading, setCourseLoading, handlerSortingCourses, searchQuery, setSearchQuery }
};

export default useGetCourses;