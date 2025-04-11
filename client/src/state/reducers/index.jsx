import { combineReducers } from "redux";
import semIndexChangeReducer from "./semIndexChange";
import examIndexChangeReducer from "./examIndexChange";
import programReducer from "./programReducer";
import disciplineReducer from "./disciplineReducer";
import SemCountReducer from "./semCountReducer";
import semesterReducer from "./semesterReducer";
import courseReducer from "./courseReducer";
import subCourseReducer from "./subCourseReducer";

const reducers = combineReducers({
    semIndex:semIndexChangeReducer,
    examIndex:examIndexChangeReducer,
    programs: programReducer, 
    disciplines: disciplineReducer,
    semCount: SemCountReducer,
    courses: semesterReducer,
    course: courseReducer,
    subCourse: subCourseReducer,
})

export default reducers;