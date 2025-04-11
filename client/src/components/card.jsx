import '../stylesheets/card.css'
import {Image} from './image' 
export function Card({backgroundColor, width, height, image, imageWidth, imageHeight, text, textStyle}){
    const Style={
        width: width==null? (height==null)?"200px":height:width,
        height: height==null? (width==null)?"200px":width:height, 
        backgroundColor:backgroundColor==null? "white":backgroundColor,
    };
    
    return <div className="card" style={Style}>
        <div className="up">
            <Image source={image} imageHeight={imageHeight} imageWidth={imageWidth}/>
        </div>
        <div className="down" style={textStyle}>{text}</div>
    </div>
} 

