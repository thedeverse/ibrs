import '../stylesheets/imageCard.css'
import { Image } from './image'
import { downloadImage } from "../utils/networkHelper.js"

export function ImageCard({ backgroundColor, width, height, image, imageWidth, imageHeight, text="Untitled" }) {
    const Style = {
        width: width == null ? (height == null) ? "200px" : height : width,
        height: height == null ? (width == null) ? "200px" : width : height,
        backgroundColor: backgroundColor == null ? "white" : backgroundColor,
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
    }

    return <div className="imagecard" style={Style}>
        <div className="image-up">
            <Image style={imageStyle} source={image} imageHeight={imageHeight} imageWidth={imageWidth} />
        </div>
        <div className="name">
            <div className="paper-text">{text}</div>
            <div className="button-down " onClick={() => downloadImage(image, text)}><Image source={require("../assets/icons/download.png")} imageHeight={"25px"} imageWidth={"25px"} /></div>
            
        </div>
    </div>
}

