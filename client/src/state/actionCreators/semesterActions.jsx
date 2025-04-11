import axios from "axios";

export const fetchCourses = (semId, programId, disciplineId) => async (dispatch) => {
    try{
        const {data} = await axios.get(`https://iitbhilairesource.onrender.com/api/semester/${semId}/fetch/${programId}/${disciplineId}`);
        dispatch({type: "FETCH_COURSES_SUCCESS", payload: data});
    }catch(error){
        console.error(error.response?.data || "Error Fetching the courses");
    }
}

export const addCourse = (semId, programId, disciplineId, courseData) => async (dispatch)=>{
    try{
        const {data} = await axios.post(`https://iitbhilairesource.onrender.com/api/semester/${semId}/${programId}/${disciplineId}`, courseData);
        dispatch({type: "ADD_COURSE_SUCCESS", payload: data});
    }catch (error){
        console.error(error.response?.data || "Error Adding the Course");
    }
}