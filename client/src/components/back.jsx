import { useNavigate } from "react-router-dom";
import "../index.css"
export function Back(){
    const navigate = useNavigate();
    return (
        <div className="backButton">
            <img src={require("../assets/icons/back.png")} alt="" onClick={()=>navigate(-1)}/>
        </div>
    );
}