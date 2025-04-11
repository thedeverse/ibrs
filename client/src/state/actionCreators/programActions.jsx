import axios from "axios";

export const addProgram = (programData) => async (dispatch)=>{
    try{
        const {data} = await axios.post("https://iitbhilairesource.onrender.com/api/programs/", programData);
        dispatch({type: "ADD_PROGRAM_SUCCESS", payload:data});
    }catch (error){
        console.log(error.reponse.data);
    }
}

export const fetchPrograms = () => async (dispatch)=>{
    try{
        const { data } = await axios.get("https://iitbhilairesource.onrender.com/api/programs/fetch");
        dispatch({type: "FETCH_PROGRAMS_SUCCESS", payload: data});
    }
    catch (error){
        console.error(error.reponse.data);
    }
}