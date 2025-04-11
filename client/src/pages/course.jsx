import '../stylesheets/course.css'
import { Card } from '../components/card'
import { Link } from "react-router-dom"
import { Back } from '../components/back';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state';
export function CoursePage({code, title}){

    const { courseId } = useParams();

    const course = useSelector((state) => state.course);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionCreators.fetchCourse(courseId));
    },[dispatch, courseId]);

    return (
        <>
            <Back />
            <div className="container">
                    <div className="heading">
                    <div className="courseCode">{course.code}</div>
                    <div className="courseTitle">{course.title}</div>
                    </div>

                    <div className="courseContent">

                        <Link to={`/disciplines/semesters/course/exams/${course._id}`}><Card imageHeight={"150px"} image={require('../assets/icons/exams.png')} text={"Exam Papers"}/></Link>
                        <Link to={`/disciplines/semesters/course/books/${course._id}`}><Card imageHeight={"150px"} image={require('../assets/icons/books.png')} text={"Books"}/></Link>
                        <Link to={`/disciplines/semesters/course/discussion/${course._id}`}><Card imageHeight={"150px"} image={require('../assets/icons/discussion.png')} text={"Discussion"}/></Link>
                        <Card imageHeight={"150px"} image={require('../assets/icons/others.png')} text={"Others"}/>
                    </div>
            </div>
        </>
    );
}