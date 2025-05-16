import next from "next";
import SubjectComponents from "../components/SubjectComponents";

export default function SubjectPage() {
  return (
    <>
  
      <div className="container mx-auto px-4 text-black bg-[#fff7f7] max-[500px]:pl-1 pl-[50px] pt-[100px] pb-[150px] max-h-full- max-w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-serif">
            All <span className="text-[#dc2626] font-cursive">Subjects</span>
          </h1>
        </div>
        <div className="mt-20 flex flex-wrap gap-[2%] overflow-hidden items-center container mx-auto max-[500px]:px-1 px-4 max-[1025px]:flex-col">
            <SubjectComponents/>
        </div>
      </div>
    </>
  );
}
