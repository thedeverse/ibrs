export const changeIndexSemesters = (index)=>{
    return (dispatch)=>{
        dispatch({
            type:'semIndexChange',
            payload: index,
        });
    }
}

export const changeExamIndex = (type)=>{
    return (dispatch)=>{
        dispatch({
            type:'examIndexChange',
            payload: type,
        });
    }
}

export const changeSemCount = (count) => {
    return (dispatch)=>{
        dispatch({
            type: "CHANGE_SEM_COUNT",
            payload: count,
        })
    };
}