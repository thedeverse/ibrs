import '../stylesheets/imageCard.css'
import { Image } from './image'
import { downloadPdf } from "../utils/networkHelper.js"

export function BookCard({ backgroundColor, width, height, text="Untitled", pdfUrl, pdfName="iitbhilai.pdf"}) {
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
            <Image style={imageStyle} source={require("../assets/icons/book.png")}/>
        </div>
        <div className="name">
            <div className="paper-text">{text}</div>
            <div className="button-down " onClick={()=>downloadPdf(pdfUrl, pdfName)} ><Image source={require("../assets/icons/download.png")} imageWidth={"20px"}/></div>
            
        </div>
    </div>
}

