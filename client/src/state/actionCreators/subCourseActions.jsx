import axios from "axios";

export const fetchExamPapers = (courseCode) => async (dispatch)=>{
    try {
        const {data} = await axios.get(`https://iitbhilairesource.onrender.com/api/subCourse/exam/${courseCode}`);
        dispatch({type:"FETCH_EXAMPAPERS_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error Fetching the Exam Papers");
    }
}

export const addExamPaper = (courseCode, examData) => async (dispatch)=>{
    try {
        const {data} = await axios.post(`https://iitbhilairesource.onrender.com/api/subCourse/exam/add/${courseCode}`, examData);
        dispatch({type: "ADD_EXAMPAPER_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error adding the exam paper.");
    }
}

export const fetchBooks = (courseCode) => async (dispatch)=>{
    try {
        const {data} = await axios.get(`https://iitbhilairesource.onrender.com/api/subCourse/book/${courseCode}`);
        dispatch({type:"FETCH_BOOKS_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error Fetching books");
    }
}

export const addBook = (courseCode, bookData) => async (dispatch)=>{
    try {
        const {data} = await axios.post(`https://iitbhilairesource.onrender.com/api/subCourse/book/add/${courseCode}`, bookData);
        dispatch({type: "ADD_BOOK_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error adding the book.");
    }
}

export const fetchDiscussions = (courseCode) => async (dispatch)=>{
    try {
        const {data} = await axios.get(`https://iitbhilairesource.onrender.com/api/subCourse/discussion/${courseCode}`);
        dispatch({type:"FETCH_DISCUSSIONS_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error Fetching Discussions");
    }
}

export const addDiscussion = (courseCode, discussionData) => async (dispatch)=>{
    try {
        const {data} = await axios.post(`https://iitbhilairesource.onrender.com/api/subCourse/discussion/add/${courseCode}`, discussionData);
        dispatch({type: "ADD_DISCUSSION_SUCCESS", payload: data});
    } catch (error) {
        console.error(error.response?.message || "Error adding the discussion.");
    }
}