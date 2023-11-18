import PropTypes from 'prop-types';
import { HiOutlineXMark } from 'react-icons/hi2';

const Filter = ({ selectedCategories, setSelectedCategories }) => {

    // HANDLER CLEAR FILTER
    const handlerClearFilter = () => {
        setSelectedCategories([])
    }

    // handlerRemoveFilter
    const handlerRemoveFilter = (category) => {

        setSelectedCategories(selectedCategories.filter((v) => v !== category));
    }

    return (
        <div className='p-5 pb-0 2xl:p-10 2xl:pb-0 h-56 sm:h-40 md:h-32 lg:h-64 2xl:h-72 overflow-hidden'>
            <div className='flex justify-between items-center'>
                <h3 className='lg:text-lg 2xl:text-xl text-primary-color font-semibold'>Filter</h3>
                <button onClick={handlerClearFilter} className='text-xs'>Clear all</button>
            </div>

            <div className='mt-5 list-none flex flex-wrap gap-2'>

                {
                    selectedCategories.length < 1 ? <space className="opacity-60">You have not added any categories yet!</space> :selectedCategories.map((category, idx) => <li
                        key={idx}
                        className='bg-[#EAEAEA] py-1 pl-3 pr-2 rounded-full flex items-center gap-1 text-xs xl:text-sm'
                    >
                        {category} <HiOutlineXMark onClick={() => handlerRemoveFilter(category)} className='text-sm cursor-pointer' />
                    </li>
                    )
                }
            </div>
        </div>
    );
};

Filter.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setSelectedCategories: PropTypes.func.isRequired
};

export default Filter;