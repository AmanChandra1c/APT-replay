import next from "next";
import { LuFileVideo2 } from "react-icons/lu";
import { WiTime2 } from "react-icons/wi";
import { CgNotes } from "react-icons/cg";
import { MdLibraryBooks } from "react-icons/md";



export default function LectureComponent() {
  var data1 = [
    { icon: <LuFileVideo2/>, name: "Total Lectures: 10" },
    { icon: <WiTime2/>, name: "Duration: 100hr" },
  ];
  var data2 = [
    { icon: <MdLibraryBooks/>, name: "Test Series: 10" },
    { icon: <CgNotes/>, name: "Notes: yes" },
  ]
  return (
    <>
      <div className="flex items-start flex-col gap-10 text-2xl max-[680px]:text-base max-[360px]:gap-5 max-[323px]:text-sm">
        {data1.map((item, index) => (
                <div key={index} className="flex items-star gap-3 max-[360px]:gap-1">
                    <div className="text-[#dc2626]"> {item.icon}</div>
                    <div> {item.name}</div>
                </div>
        ))}
      </div>
      <div className="flex items-start flex-col gap-10 text-2xl max-[680px]:text-base max-[360px]:gap-5 max-[323px]:text-sm">
        {data2.map((item, index) => (
                <div key={index} className="flex items-start gap-3 max-[360px]:gap-1">
                    <div className="text-[#dc2626]"> {item.icon}</div>
                    <div> {item.name}</div>
                </div>
        ))}
      </div>
    </>
  );
}
