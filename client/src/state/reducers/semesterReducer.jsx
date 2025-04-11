const semesterReducer = (state={courses: []}, action)=>{
    switch (action.type) {
        case "ADD_COURSE_SUCCESS":
            return {...state, courses: [...state.courses, action.payload]};
        case "FETCH_COURSES_SUCCESS":
            return {...state, courses: action.payload};
        default:
            return state;
    }
}

export default semesterReducer;