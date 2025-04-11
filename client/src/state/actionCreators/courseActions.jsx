import axios from "axios";

export const fetchCourse = (courseId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://iitbhilairesource.onrender.com/api/course/${courseId}`);
        dispatch({ type: "FETCH_COURSE_SUCCESS", payload: data });
    } catch (error) {
        console.log(error.response?.message || "Something went wrong!");
    }
}