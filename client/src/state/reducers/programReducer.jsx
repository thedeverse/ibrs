const programReducer = (state = { programs: [] }, action)=>{
    switch (action.type){
        case "ADD_PROGRAM_SUCCESS":
            return {...state, programs:[...state.programs, action.payload]};
        case "FETCH_PROGRAMS_SUCCESS":
            return {...state, programs: action.payload}
        default:
            return state;
    }
};

export default programReducer;