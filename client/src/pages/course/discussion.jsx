import { Back } from "../../components/back";
import { DiscussionCard } from "../../components/discussionCard"
import { Image } from "../../components/image";
import { Input } from "../../components/input";
import { FormatDate } from "../../utils/formatDate";
import "../../stylesheets/course.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionCreators } from "../../state";


export function DiscussionPage() {

    
    const dispatch = useDispatch();
    
    const {courseId} = useParams();
    const course = useSelector(state=> state.course);

    const subCourseState = useSelector(state=>state.subCourse);
    const discussions = subCourseState.discussions;

    useEffect(()=>{

        if(Object.keys(course).length===0){
            dispatch(actionCreators.fetchCourse(courseId));
        }else{
            dispatch(actionCreators.fetchDiscussions(course.code));
        }
    }, [dispatch, course, courseId]);



    
    var message="";
    const handleOnClick = ()=>{
        if(message.trim()===""){
            window.alert("Message can't be empty!");
            return;
        }
        var currDate = new Date();
        const discussionData = {
            time: FormatDate(currDate) + ", " + (currDate.toLocaleTimeString()),
            data: message,
        };
        dispatch(actionCreators.addDiscussion(course.code, discussionData));
        message="";
    }


    const scrollToBottom=()=>{window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });};



    return (
        <>
            <Back />
            <div className="dcontainer">
                <div className="heading">
                    <div className="courseCode">{course.code}</div>
                    <div className="courseTitle">{course.title}</div>
                </div>
                <div className="discussionContainer">
                    {
                        (discussions.length===0)? "No discussions till now, Be the first one to start the discussion":discussions.map((discussion)=>{
                            return <DiscussionCard key={discussion._id} message={discussion.data} time={discussion.time} />;
                        })
                    }
                </div>

                <div className="discussion-input-container">
                    <Input id="message-input" onChange={(e)=>{message=e.target.value;}} onKeyDown={(e)=>{if(e.key==="Enter") handleOnClick()}}  placeholder={"Enter your message!"} />
                    <button onClick={handleOnClick} className="dinput-submit-button"><Image imageHeight={"40px"} source={require("../../assets/icons/right.png")}/></button>
                </div>

                <button className="scrollToBottomBtn" onClick={scrollToBottom}><Image imageHeight={"24px"} source={require("../../assets/icons/down.png")}/></button>
            </div>
        </>
    );
}