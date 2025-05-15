import next from "next";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LuFileVideo2 } from "react-icons/lu";



export default function HomepageComponent1() {
  var data = [
    { icon: <MdOutlineLibraryBooks/>, name: "5 Subjects" },
    { icon: <LuFileVideo2/>, name: "60 Lectures" },
  ];
  return (
    <>
      <div className="flex items-start gap-40 max-[770px]:gap-30 max-[1600px]:gap-50 text-7xl max-[1600px]:text-2xl max-[3000px]:text-4xl max-[668px]:flex-col max-[668px]:gap-10 max-[3500px]:text-5xl">
        {data.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className="text-[#dc2626]"> {item.icon}</div>
                    <div> {item.name}</div>
                </div>
        ))}
      </div>
    </>
  );
}
