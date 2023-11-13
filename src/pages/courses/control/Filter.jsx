import PropTypes from 'prop-types';
import { HiOutlineXMark } from 'react-icons/hi2';

const Filter = ({ selectedCategories }) => {

    return (
        <div className='p-5 pb-0 2xl:p-10 2xl:pb-0'>
            <div className='flex justify-between items-center'>
                <h3 className='lg:text-lg 2xl:text-2xl font-semibold'>Filter</h3>
                <p className='text-xs xl:text-base'>Clear all</p>
            </div>

            <div className='mt-5 list-none flex flex-wrap gap-2'>

                {
                    selectedCategories.map((category, idx) => <li
                        key={idx}
                        className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'
                    >
                        {category} <HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' />
                    </li>)
                }
                {/* <li className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'>Creative Composition<HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' /></li>
                <li className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'>Advanced Lighting<HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' /></li>
                <li className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'>Post-Processing<HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' /></li>
                <li className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'>Photography Intensive<HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' /></li>
                <li className='bg-[#EAEAEA] py-1 px-4 rounded-full flex items-center gap-1 text-xs xl:text-sm 2xl:text-base'>Commercial Photography<HiOutlineXMark className='text-sm lg:text-base 2xl:text-xl' /></li> */}
            </div>
        </div>
    );
};

Filter.propTypes = {
    selectedCategories: PropTypes.array.isRequired
};

export default Filter;