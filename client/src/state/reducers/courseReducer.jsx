const courseReducer = (state={}, action)=>{
    switch (action.type){
        case "FETCH_COURSE_SUCCESS":
            return action.payload;
        default :
            return state;
    }
}

export default courseReducer;