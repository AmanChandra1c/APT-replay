import next from "next";
import SubjectComponents from "../components/SubjectComponents";

export default function SubjectPage() {
  return (
    <>
      <div className="w-screen text-black bg-[#fdefef] pl-[50px] pt-[100px] pb-[150px]">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">
            All <span className="text-[#dc2626] italic">Subjects</span>
          </h1>
        </div>
        <div className="mt-20 flex flex-wrap gap-[2%] overflow-hidden items-center">
            <SubjectComponents/>
        </div>
      </div>
    </>
  );
}
