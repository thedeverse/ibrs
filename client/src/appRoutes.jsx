import { Routes, Route } from "react-router-dom";
import { ProgramsPage } from './pages/programs';
import { DisciplinesPage } from "./pages/disciplines";
import { SemestersPage } from "./pages/semesters";
import { CoursePage } from "./pages/course";
import { ExamPapersPage } from "./pages/course/examPapers";
import { BooksPage } from "./pages/course/books";
import { DiscussionPage } from "./pages/course/discussion";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ProgramsPage/>}/>
            <Route path="/disciplines/:programId/:semCount" element={<DisciplinesPage/>}/>
            <Route path="/disciplines/:programId/:disciplineId/semesters" element={<SemestersPage/>}/>
            <Route path="/disciplines/semesters/course/:courseId" element={<CoursePage />}/>
            <Route path="/disciplines/semesters/course/exams/:courseId" element={<ExamPapersPage />}/>
            <Route path="/disciplines/semesters/course/books/:courseId" element={<BooksPage />}/>
            <Route path="/disciplines/semesters/course/discussion/:courseId" element={<DiscussionPage />}/>
            </Routes>
    );
}