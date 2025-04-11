import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { Tab } from "../components/tab";
import { CourseCard } from "../components/courseCard";
import { Back } from "../components/back";
import "../stylesheets/semesters.css";
import { useEffect } from "react";

// { code: "CYP102", title: "Chemistry lab" },
// { code: "PHP102", title: "Physics lab" },
// Course data for BTech in Computer Science and Engineering (all 8 semesters)
// const ecCourses = {
//     "Electronics and Communication Engineering": {
//       1: [
//         { code: "CSL100", title: "Introduction to programming" },
//         { code: "CYP102/PHP102", title: "Chemistry lab/Physics lab" },
//         { code: "MAL100", title: "Mathematics-I" },
//         { code: "CYL100", title: "Applied Chemistry" },
//         { code: "PHL101", title: "Physics for Engineers" },
//         { code: "CYL101", title: "Environmental Science" },
//         { code: "NCN100", title: "Practices for Comprehensive wellbeing" },
//       ],
//       2: [
//         { code: "MEP102", title: "Digital fabrication" },
//         { code: "EEL101", title: "Basic Electrical Engineering" },
//         { code: "CYP102", title: "Chemistry lab" },
//         { code: "PHP102", title: "Physics lab" },
//         { code: "MAL101", title: "Mathematics-II" },
//         { code: "ECL101", title: "Basic Electronics Engineering" },
//         { code: "BML101", title: "Biology for Engineers" },
//         { code: "LAN103", title: "Professional Ethics" },
//       ],
//       3: [
//         { code: "ECL201", title: "Digital Design" },
//         { code: "ECL202", title: "Signals and Systems" },
//         { code: "ECL203", title: "Network Theory" },
//         { code: "ECL234", title: "Solid State Devices" },
//         { code: "LAL100", title: "Introduction to Communication Skills" },
//         // LA Courses (x-x-x-1) are not specified with codes/titles, so omitted
//       ],
//       4: [
//         { code: "ECL211", title: "Microcontroller and Interfacing" },
//         { code: "ECL212", title: "Digital Signal Processing" },
//         { code: "ECL213", title: "Communication Systems" },
//         { code: "ECL214", title: "Solid State Devices" },
//         { code: "ECP211", title: "Microcontroller and Embedded Systems" },
//         { code: "LAL101", title: "Introduction to Finance" },
//         { code: "ECP212", title: "Digital Signal Processing Lab" },
//       ],
//       5: [
//         { code: "ECL301", title: "Digital Communication" },
//         { code: "ECL302", title: "Electromagnetic Theory" },
//         { code: "ECL303", title: "Control Systems" },
//         { code: "ECL304", title: "Analog Electronics" },
//         { code: "ECP304", title: "Analog Electronics Lab" },
//         { code: "ECP301", title: "Communication Lab" },
//         { code: "ECP305", title: "Digital Communication Lab" },
//         // LA Courses (x-x-x-2) are not specified with codes/titles, so omitted
//       ],
//       6: [
//         { code: "ECL351", title: "VLSI Technology" },
//         { code: "ECL312", title: "FPGA for Digital Design" },
//         { code: "ECPXXX", title: "PE" }, // Placeholder for Program Elective
//         { code: "UGQ301", title: "Interdisciplinary Undergraduate Project" },
//         // LA Courses (x-x-x-3) are not specified with codes/titles, so omitted
//         // OE (x-x-x-3) is not specified with codes/titles, so omitted
//       ],
//       7: [
//         { code: "ECQ411", title: "Device Fabrication" },
//         // PE (x-x-x-8.5) is not specified with codes/titles, so omitted
//         // LA Courses (x-x-x-1) are not specified with codes/titles, so omitted
//         // OE (x-x-x-6) is not specified with codes/titles, so omitted
//       ],
//       8: [
//         // PE (x-x-x-8) is not specified with codes/titles, so omitted
//         // LA Courses (x-x-x-2) are not specified with codes/titles, so omitted
//         // OE (x-x-x-6) is not specified with codes/titles, so omitted
//       ],
//     },
//   };
// Note: Semesters 6, 7, and 8 primarily consist of Departmental Electives (DE), Open Electives (OE), 
// and Creative and Liberal Arts (CALA) courses without specific course codes/titles in the PDF.
// For this example, I'll leave them empty. You can extend this by including elective course examples 
// from "Part B: Course Contents" if needed (e.g., CS550 "Machine Learning" as a DE).

const textStyle = {
    fontSize: "x-large",
    color: "#333333",
    opacity: 0.8,
    fontWeight: 800,
};

export function SemestersPage() {
    const dispatch = useDispatch();
    const { changeIndexSemesters } = bindActionCreators(actionCreators, dispatch);

    const semIndex = useSelector((state) => state.semIndex);
    const semCount = useSelector((state) => state.semCount);
    if (semIndex > semCount) {
        changeIndexSemesters(1);
    }

    const { courses } = useSelector((state) => state.courses);
    const { programId, disciplineId } = useParams();

    useEffect(() => {
        dispatch(actionCreators.fetchCourses(semIndex, programId, disciplineId));
    }, [dispatch, semIndex, programId, disciplineId]);

    const handleTabClick = (i) => {
        changeIndexSemesters(i);
        dispatch(actionCreators.fetchCourses(i, programId, disciplineId));
    };

    // const handleOnClick = () => {
    //     const semesterCourses = ecCourses["Electronics and Communication Engineering"][semIndex] || [];
    //     semesterCourses.forEach((course) => {
    //         const courseData = {
    //             code: course.code,
    //             title: course.title,
    //             semester: semIndex,
    //             program: programId,
    //             discipline: disciplineId,
    //             examPapers: [],
    //             books: [],
    //             discussions: [],
    //         };
    //         dispatch(actionCreators.addCourse(semIndex, programId, disciplineId, courseData));
    //     });
    //     console.log(`Added ${semesterCourses.length} courses for Semester ${semIndex}`);
    // };

    return (
        <>
            <Back />
            <div className="container">
                <div className="tabBar">
                    {Array.from({ length: semCount }, (_, i) => {
                        return (
                            <Tab
                                key={i + 1}
                                onClick={() => {
                                    handleTabClick(i + 1);
                                }}
                                name={`Sem ${i + 1}`}
                                classes={semIndex === i + 1 ? "active" : ""}
                            />
                        );
                    })}
                </div>
                <div className="tabViewContainer">
                    <div className="tabview">
                        {courses.length === 0 ? (
                            "No Courses Available"
                        ) : (
                            courses.map((course) => {
                                var randomNum = Math.floor(Math.random() * 5) + 1;
                                return (
                                    <Link key={course._id} to={`/disciplines/semesters/course/${course._id}`}>
                                        <CourseCard
                                            BackgroundImage={require(`../assets/images/background/${randomNum}.png`)}
                                            headingText={course.code}
                                            textStyle={textStyle}
                                            text={course.title}
                                        />
                                    </Link>
                                );
                            })
                        )}
                    </div>
                </div>
                {/* <div className="add-btn">
                    <button onClick={handleOnClick}>Add Courses</button>
                </div> */}
            </div>
        </>
    );
}