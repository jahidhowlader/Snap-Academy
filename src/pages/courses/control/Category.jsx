
const Category = () => {

    // const 
    return (
        <div className='p-5 pt-0 pb-0 2xl:p-10 2xl:pt-0'>
            <h3 className='lg:text-lg 2xl:text-2xl font-semibold'>Categories</h3>

            <div className="space-y-3 pt-3 xl:pl-3 flex items-center flex-wrap gap-x-5">
                <div className="flex items-start gap-2">
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
                </div>
            </div>
        </div>
    );
};

export default Category;