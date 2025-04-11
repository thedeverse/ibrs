import axios from "axios";

export const addDiscipline = (programId, disciplineData) => async (dispatch) => {
    try{
        const { data } = await axios.post(`https://iitbhilairesource.onrender.com/api/discipline/${programId}`, disciplineData);
        dispatch({type: "ADD_DISCIPLINE_SUCCESS", payload: data});
    }catch (error){
        console.error(error.response?.message || "Error adding discipline");
    }
}

export const fetchDisciplines = (programId) => async (dispatch)=>{
    try{
        const { data } = await axios.get(`https://iitbhilairesource.onrender.com/api/discipline/fetch/${programId}`);
        dispatch({type: "FETCH_DISCIPLINE_SUCCESS", payload: data});
    }catch (error){
        console.error(error.response?.message || "Error fetching disciplines");
    }
}