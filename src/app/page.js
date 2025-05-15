import Image from "next/image";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import SubjectPage from "./pages/SubjectPage";
import FacultyPage from "./pages/FacultyPage";
import LectureHeader from "./pages/LectureHeader";

export default function Home() {
  return <>
  <div className="bg-[#fff7f7] h-screen w-full overflow-auto">
    {/* <Navbar /> */}
    {/* <HomePage />*/}
    {/* <SubjectPage />  */}
    {/* <FacultyPage /> */}
    <LectureHeader />
  </div>
  </>
}
