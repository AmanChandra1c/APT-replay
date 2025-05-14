import Image from "next/image";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import SubjectPage from "./pages/SubjectPage";
import FacultyPage from "./pages/FacultyPage";

export default function Home() {
  return <>
  <div className="bg-[#fff7f7]">
    {/* <Navbar /> */}
    <HomePage />
    <SubjectPage />
    {/* <FacultyPage /> */}
  </div>
  </>
}
