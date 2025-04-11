const SemCountReducer = (state=8, action) => {
    if(action.type==="CHANGE_SEM_COUNT"){
        return action.payload;
    }else return state;
}

export default SemCountReducer;