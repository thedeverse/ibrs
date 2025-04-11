const semIndexChangeReducer = (state=1, action)=>{
    if(action.type==="semIndexChange"){
        state = action.payload;
    }
    return state;
}

export default semIndexChangeReducer;