import { BookCard } from "../../components/bookCard"
import { Back } from "../../components/back";
import { Image } from "../../components/image";
import "../../stylesheets/course.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state";
import { useEffect, useState } from "react";
import { BookModal } from "../../components/bookModal";


export function BooksPage() {

    const dispatch = useDispatch();

    const { courseId } = useParams();
    const course = useSelector((state) => state.course);

    const subCourseState = useSelector(state => state.subCourse);
    const books = subCourseState.books;

    useEffect(() => {
        if (Object.keys(course).length === 0) {
            dispatch(actionCreators.fetchCourse(courseId));
        } else {
            dispatch(actionCreators.fetchBooks(course.code));
        }
    }, [course, courseId, dispatch]);


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
                <div className="courseCardsContainer bookCardContainer">
                    {
                        (books.length===0)? 
                        "Currently no book available for this course!"
                        :
                        books.map((book) => {
                            var val = book.title;
                            return <BookCard key={book._id} text={val.substring(0, 15) + ((val.length > 15) ? "..." : "")} pdfUrl={book.fileUrl} pdfName={`${book.title}.pdf`} image={"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"} />
                        })
                    }

                </div>
                {
                    (isModalOpen && <BookModal handleCloseModal={handleCloseModal}/>)
                }
                <button className="add-exam-paper-button" onClick={handleOpenModal}><Image imageHeight={"24px"} source={require("../../assets/icons/add.png")}/></button>
            </div>
        </>
    );
}