import { Tab } from "../../components/tab";
import { ImageCard } from "../../components/imageCard"
import { Image } from "../../components/image";
import { Back } from "../../components/back";
import "../../stylesheets/course.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExamPaperModal } from "../../components/examPaperModal";


export function ExamPapersPage() {

    const dispatch = useDispatch();
    const { changeExamIndex } = bindActionCreators(actionCreators, dispatch);

    const { courseId } = useParams();
    const course = useSelector((state) => state.course);

    const examType = useSelector(state => state.examIndex);
    const subCourseState = useSelector(state => state.subCourse);
    const examPapers = subCourseState.examPapers;

    useEffect(() => {
        if (Object.keys(course).length === 0) {
            dispatch(actionCreators.fetchCourse(courseId));
        } else {
            dispatch(actionCreators.fetchExamPapers(course.code));
        }
    }, [course, courseId, dispatch]);


    const findElem = (type) => {
        var quiz = 0, mid = 0, end = 0;
        examPapers.map((examPaper) => {
            if (examPaper.examType === "quiz") quiz++;
            if (examPaper.examType === "mid") mid++;
            if (examPaper.examType === "end") end++;
            return "";
        });
        if (type === "quiz") return quiz;
        if (type === "mid") return mid;
        if (type === "end") return end;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Close modal and reset form
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Back />
            <div className="container">
                <div className="heading">
                    <div className="courseCode">{course.code}</div>
                    <div className="courseTitle">{course.title}</div>
                </div>
                <div className="tabBar">
                    <Tab onClick={() => { changeExamIndex("quiz") }} name={`Quiz`} classes={(examType === "quiz") ? "active" : ""} />
                    <Tab onClick={() => { changeExamIndex("mid") }} name={`MidSem`} classes={(examType === "mid") ? "active" : ""} />
                    <Tab onClick={() => { changeExamIndex("end") }} name={`EndSem`} classes={(examType === "end") ? "active" : ""} />
                </div>
                <div className="examCardContainer">
                    {
                        (findElem("quiz") === 0 && examType === "quiz") ? "No Quiz papers till now" : ""
                    }
                    {
                        (findElem("mid") === 0 && examType === "mid") ? "No MidSem papers till now" : ""
                    }
                    {
                        (findElem("end") === 0 && examType === "end") ? "No EndSem papers till now" : ""
                    }
                    {
                        examPapers.map((examPaper) => {
                            return (examPaper.examType === examType) ? <ImageCard key={examPaper._id} text={examPaper.title.substring(0, 15) + ((examPaper.title.length > 15) ? "..." : "")} image={examPaper.imageUrl} /> : "";
                        })
                    }

                </div>
                {isModalOpen && <ExamPaperModal handleCloseModal={handleCloseModal}/>}
                <button className="add-exam-paper-button" onClick={handleOpenModal}><Image imageHeight={"24px"} source={require("../../assets/icons/add.png")}/></button>

            </div>
        </>
    );
}