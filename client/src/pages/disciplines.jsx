import { Card } from "../components/card";
import { Back } from "../components/back";
import '../stylesheets/disciplines.css';
import { actionCreators } from "../state";

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



export function DisciplinesPage(){
    const textStyle = {
        fontSize: "xx-large",
        color: "#333333",
        opacity: 0.8,
        fontWeight: 800,
    };


    const {programId, semCount} = useParams();

    const disciplineState = useSelector(state => state.disciplines);

    const dispatch = useDispatch();

    useEffect(() => {
        if(programId){
            dispatch(actionCreators.fetchDisciplines(programId));
        }
        if(semCount){
            dispatch(actionCreators.changeSemCount(semCount));
        }
    }, [dispatch, programId, semCount]);

    // const value = {
    //     name: "physics",
    //     imageUrl: "physics.png",
    //     programId: programId,
    // }
    
    // const handleOnClick = () => {
    //     dispatch(actionCreators.addDiscipline(programId, value));
    // }

    return (
    <>
        <Back></Back>
        {
            (programId)? 
            <div className="disciplinesPage">
            <div className="disciplineCardsContainer">
            {
                disciplineState.disciplines.map((discipline)=>{
                    return <Link key={discipline._id} to={`/disciplines/${programId}/${discipline._id}/semesters`}><Card key={discipline._id} textStyle={textStyle} text={discipline.name}  width="250px" image={require(`../assets/images/${discipline.imageUrl}`)} imageWidth="170px"/></Link>;
                })
            }
            </div>
            
            </div>:
            <div className="center">Server Error</div>
        }
        {/* <div className="add-btn">
                <button onClick={handleOnClick} >Add Discipline</button>
            </div> */}
    
    </>
    
);
}