import PropTypes from 'prop-types';
import { useState } from 'react';

const categoryList = [
    { "label": "Creative Composition" },
    { "label": "Advanced Lighting" },
    { "label": "Post-Processing" },
    { "label": "Portrait Photography Intensive" },
    { "label": "Commercial Photography" }
]

const Category = ({ selectedCategories, setSelectedCategories }) => {

    const checkboxOptions = [
        { label: 'Creative Composition', value: 'Creative Composition' },
        { label: 'Advanced Lighting', value: 'Advanced Lighting' },
        { label: 'Post-Processing', value: 'Post-Processing' },
        { label: 'Portrait Photography Intensive', value: 'Portrait Photography Intensive' },
        { label: 'Commercial Photography', value: 'Commercial Photography' },
    ];


    const handleCheckboxChange = (value) => {

        const isChecked = selectedCategories.includes(value)

        if (isChecked) {
            setSelectedCategories(selectedCategories.filter((v) => v !== value));

        } else {
            setSelectedCategories([...selectedCategories, value])
        }
    };

    return (

        <>
            <div
                className='p-5 pb-0 2xl:px-10 2xl:py-0 space-y-2'
            >
                <h3 className='lg:text-lg 2xl:text-xl text-primary-color font-semibold mb-5'>Categories</h3>

                {
                    checkboxOptions.map((option) => (
                        <div
                            key={option.value}
                            className='space-x-2 '
                        >
                            <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedCategories.includes(option.value)}
                                onChange={() => handleCheckboxChange(option.value)}
                                className='cursor-pointer'
                            />
                            <label
                                className='cursor-pointer'
                                htmlFor={option.value}>
                                {option.label}
                            </label>
                        </div>
                    ))
                }
            </div>

        </>
        // <div className='p-5 pt-0 pb-0 2xl:p-10 2xl:pt-0'>
        //     <h3 className='lg:text-lg 2xl:text-xl text-primary-color font-semibold'>Categories</h3>

        //     <div className="space-y-3 pt-3 xl:pl-3 flex items-center flex-wrap gap-x-5">

        //         <div className="flex items-center gap-2">
        //             <input type="checkbox" id="compositionCheckbox" className="cursor-pointer" />
        //             <label htmlFor="compositionCheckbox">Creative Composition</label><br />
        //         </div>

        //         <div className="flex items-center gap-2">
        //             <input type="checkbox" id="lightingCheckbox" className="cursor-pointer" />
        //             <label htmlFor="lightingCheckbox">Advanced Lighting</label><br />
        //         </div>

        //         <div className="flex items-center gap-2">
        //             <input type="checkbox" id="postProcessingCheckbox" className="cursor-pointer" />
        //             <label htmlFor="postProcessingCheckbox">Post-Processing</label><br />
        //         </div>

        //         <div className="flex items-center gap-2">
        //             <input type="checkbox" id="portraitCheckbox" className="cursor-pointer" />
        //             <label htmlFor="portraitCheckbox">Portrait Photography Intensive</label><br />
        //         </div>

        //         <div className="flex items-center gap-2">
        //             <input type="checkbox" id="commercialCheckbox" className="cursor-pointer" />
        //             <label htmlFor="commercialCheckbox">Commercial Photography</label><br />
        //         </div>
        //     </div>
        // </div>
    );
};

Category.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setSelectedCategories: PropTypes.func.isRequired,
};

export default Category;


{/* {
                    categoryList.map(categoty => <div
                        key={categoty.name}
                        className="flex items-start gap-2"
                    >
                        <input
                            onChange={handleCategories}
                            type="checkbox"
                            name={categoty.name}
                            checked={categoty?.isChecked || false}
                            className="cursor-pointer" />
                        <label >{categoty.name}</label><br />
                    </div>)
                } */}