const disciplineReducer = (state = { disciplines: [] }, action)=>{
    switch (action.type){
        case "ADD_DISCIPLINE_SUCCESS":
            return {...state, disciplines:[...state.disciplines, action.payload]};
        case "FETCH_DISCIPLINE_SUCCESS":
            return {...state, disciplines: action.payload}
        default:
            return state;
    }
};

export default disciplineReducer;