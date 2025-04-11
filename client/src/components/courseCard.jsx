import '../stylesheets/courseCard.css'
export function CourseCard({BackgroundImage, width, height, headingText, text, textStyle}){
    const Style={
        width: width==null? "auto":width,
        height: height==null? "auto":height,
        backgroundImage: `url(${BackgroundImage})`,
    };
    
    return <div className="courseCard" style={Style}>
        <div className="up">
            <p className="HeadingText">{headingText}</p>
        </div>
        <hr width="140px"/>
        <div className="down" style={textStyle}>{text}</div>
    </div>
} 

