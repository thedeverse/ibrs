import { Card } from "../components/card";
import { Link } from "react-router-dom";
import '../stylesheets/programs.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index"

export function ProgramsPage() {
    const textStyle = {
        fontSize: "xx-large",
        color: "#333333",
        opacity: 0.8,
        fontWeight: 800,
    };

    const programsState = useSelector(state => state.programs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.fetchPrograms());
    }, [dispatch])

    return (
        <>
            <div className="programsPage">
                <div className="cardsContainer">
                    {
                        programsState.programs.map((program) => {
                            return <Link key={program._id} to={`/disciplines/${program._id}/${program.semCount}`}><Card key={program._id} textStyle={textStyle} text={program.name} className="c2" width="250px" image={require(`../assets/images/${program.imageUrl}`)} imageWidth="190px" /></Link>
                        })
                    }</div>
            </div>

        </>

    );
}