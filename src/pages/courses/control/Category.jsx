import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const categoryList = [{ "name": "Creative Composition" }, { "name": "Advanced Lighting" }, { "name": "Post-Processing" }, { "name": "Portrait Photography Intensive" }, { "name": "Commercial Photography" }]

const Category = ({ selectedCategories, setSelectedCategories }) => {

    const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     setCategories(categoryList)
    // })

    const handleCategories = (e) => {


        const { name, checked } = e.target
        let tempCategory = categories.map(category => category.name === name ? { ...category, isChecked: checked } : category)
        setCategories(tempCategory)

        // console.log(e.target.value);

        // setCategories(categories.push(e.target.value))
    }


    return (
        <div className='p-5 pt-0 pb-0 2xl:p-10 2xl:pt-0'>
            <h3 className='lg:text-lg 2xl:text-2xl font-semibold'>Categories</h3>

            <div className="space-y-3 pt-3 xl:pl-3 flex items-center flex-wrap gap-x-5">

                {
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
                }
                {/* <div className="flex items-start gap-2" onClick={() => setSelectedCategories(selectedCategories.compositionCheckbox = true)}>
                    <input type="checkbox" id="compositionCheckbox" className="cursor-pointer" />
                    <label htmlFor="compositionCheckbox">Creative Composition</label><br />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="lightingCheckbox" className="cursor-pointer" />
                    <label htmlFor="lightingCheckbox">Advanced Lighting</label><br />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="postProcessingCheckbox" className="cursor-pointer" />
                    <label htmlFor="postProcessingCheckbox">Post-Processing</label><br />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="portraitCheckbox" className="cursor-pointer" />
                    <label htmlFor="portraitCheckbox">Portrait Photography Intensive</label><br />
                </div>

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="commercialCheckbox" className="cursor-pointer" />
                    <label htmlFor="commercialCheckbox">Commercial Photography</label><br />
                </div> */}
            </div>
        </div>
    );
};

Category.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setSelectedCategories: PropTypes.func.isRequired,
};

export default Category;