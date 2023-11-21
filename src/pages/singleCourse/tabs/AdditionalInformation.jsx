
const AdditionalInformation = ({ course }) => {
    return (
        <div className="">

            <div className="text- space-y-2 ">
                <p className=""><span className="font-bold">Category :</span> {course.category}</p>
                <p className=""><span className="font-bold">Instructor :</span> {course.instructor}</p>
                <p className=""><span className="font-bold">Duration :</span> {course.duration}</p>
                <p className=""><span className="font-bold">Lectures :</span> {course.lectures}</p>
                <p className=""><span className="font-bold">Level :</span> {course.level}</p>
                <p className=""><span className="font-bold">Schedule :</span> {<span className="uppercase text-sm bg-opacity-10 "> <span className="font-bold">DAY: </span>{course.schedule[0].day} || <span className="font-bold">TIME:</span> {course.schedule[0].time}  </span>}</p>
                <p className=""><span className="font-bold">Enrolled :</span> {course.enrolled}</p>
                <p className=""><span className="font-bold">Requirements :</span> {course.requirements.map((requirement, idx) => <span key={idx}>{requirement}, </span>)}</p>
            </div>
        </div>
    );
};

export default AdditionalInformation;