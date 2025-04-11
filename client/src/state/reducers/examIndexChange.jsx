const examIndexChangeReducer = (state="quiz", action)=>{
    if(action.type==="examIndexChange"){
        state = action.payload;
    }
    return state;
}

export default examIndexChangeReducer;