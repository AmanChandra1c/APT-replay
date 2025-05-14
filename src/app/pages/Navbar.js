import next from "next";
import { IoReorderThreeOutline } from "react-icons/io5";


export default function Navbar() {
    return (
        <div className="navbar h-[100px] border border-gray-300 border-b-2 w-screen bg-[#fdefef] font-black flex items-center px-10">
            <div className="text-black text-5xl"> <IoReorderThreeOutline /> </div>
            <div className="text-[#e40000] text-5xl ml-10"> <h1>APT</h1> </div>
        </div>
    );
}