
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleImageChange, handleImageUpload } from "../utils/networkHelper";
import { actionCreators } from "../state";

export const ExamPaperModal = ({ handleCloseModal }) => {

    const [title, setTitle] = useState("");
    const [selectedExamType, setSelectedExamType] = useState("quiz");
    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const course = useSelector((state) => state.course);
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = async () => {
        if (!title.trim()) {
            alert("Title cannot be empty!");
            return;
        }
        if (!image) {
            alert("Image cannot be empty, Select an Image first!");
            return;
        }
        setLoading(true);
        let url = await handleImageUpload(image);
        if (!url) {
            alert("Something went wrong while uploading the image, please try again later!");
        }
        const examData = {
            title: title,
            imageUrl: url,
            examType: selectedExamType.toLowerCase(), // Convert to lowercase for consistency
        };
        dispatch(actionCreators.addExamPaper(course.code, examData));
        setLoading(false);
        handleCloseModal();
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3 className="modal-title">Add New Exam Paper</h3>
                    <div>
                        <label htmlFor="title" className="modal-label">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter exam title"
                            className="modal-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="examType" className="modal-label">
                            Exam Type:
                        </label>
                        <select
                            id="examType"
                            value={selectedExamType}
                            onChange={(e) => setSelectedExamType(e.target.value)}
                            className="modal-select"
                        >
                            <option value="quiz">Quiz</option>
                            <option value="mid">MidSem</option>
                            <option value="end">EndSem</option>
                        </select>
                    </div>
                    <div className="fileChoser">
                        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setImage)} disabled={loading} name="file" id="exampaper" required />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" disabled={loading} onClick={handleSubmit} className="modal-button">
                            {(loading)? "Uploading Image":"Submit"}
                        </button>
                        <button onClick={handleCloseModal} disabled={loading} className="modal-button cancel">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}