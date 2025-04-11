
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePdfChange, handlePdfUpload } from "../utils/networkHelper";
import { actionCreators } from "../state";

export const BookModal = ({ handleCloseModal }) => {

    const [title, setTitle] = useState("");
    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(false);

    const course = useSelector((state) => state.course);
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = async () => {
        if (!title.trim()) {
            alert("Title cannot be empty!");
            return;
        }
        if (!pdf) {
            alert("Pdf cannot be empty, Select a PDF first!");
            return;
        }
        setLoading(true);
        let url = await handlePdfUpload(pdf);
        if (!url) {
            alert("Something went wrong while uploading the pdf, please try again later!");
        }
        const bookData = {
            title: title,
            fileUrl: url,
        };
        dispatch(actionCreators.addBook(course.code, bookData));
        setLoading(false);
        handleCloseModal();
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3 className="modal-title">Add New Book</h3>
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
                    <div className="fileChoser">
                        <input type="file" accept=".pdf" onChange={(e) => handlePdfChange(e, setPdf)} disabled={loading} name="file" id="exampaper" required />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" disabled={loading} onClick={handleSubmit} className="modal-button">
                            {(loading)? "Uploading PDF":"Submit"}
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