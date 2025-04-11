const subCourseReducer = (state={examPapers:[], books: [], discussions:[]}, action)=>{
    switch (action.type) {
        case "FETCH_EXAMPAPERS_SUCCESS":
            return {...state, examPapers:action.payload};
        case "ADD_EXAMPAPER_SUCCESS":
            return {...state, examPapers: [...state.examPapers, action.payload]};
        case "FETCH_BOOKS_SUCCESS":
            return {...state, books:action.payload};
        case "ADD_BOOK_SUCCESS":
            return {...state, books: [...state.books, action.payload]};
        case "FETCH_DISCUSSIONS_SUCCESS":
            return {...state, discussions:action.payload};
        case "ADD_DISCUSSION_SUCCESS":
            return {...state, discussions: [...state.discussions, action.payload]};
        default:
            return state;
    }
}

export default subCourseReducer;