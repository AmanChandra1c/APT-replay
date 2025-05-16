import next from "next";
import LectureComponent from "../components/LectureComponent";
export default function LectureHeader() {
  return (
    <>
      <section className="container mx-auto px-4 text-black">
        <div className="container w-full mx-auto flex px-10 bg-[#FDEFEF] py-20 max-[680px]:px-5">
          <div>
            <div className="text-2xl leading-[1.5]">
              <h3 className="max-[360px]:-mt-10">
                <span className="text-gray-500">Home / Course / </span> Subject
              </h3>
            </div>
            <div>
              <h1 className="text-6xl mt-30 max-[360px]:mt-5 max-[1200px]:mt-20 max-[1200px]:text-5xl max-[680px]:mt-10 max-[680px]:text-3xl">
                Introduction to{" "}
                <span className="text-[#dc2626]">Accounting</span>
              </h1>
              <p className="text-gray-500 max-[360px]:mt-5 text-3xl mt-10 max-[1200px]:text-2xl max-[680px]:text-base ">
                Explore the basics of accounting as the language of business,
                covering its purpose, key principles, and how financial
                transactions are recorded and organized.
              </p>
            </div>
            <div className="flex gap-20 max-[680px]:gap-5 mt-15 max-[360px]:mt-8 max-[400px]:gap-2">
              <LectureComponent />
            </div>
            <div className="mt-15 w-full ">
              <button className="text-2xl py-4 max-[360px]:-mt-10 px-30 max-[680px]:px-[38.5%] max-[680px]:text-md max-[680px]:py-2 text-center rounded-md text-white font-bold bg-[#dc2626]">
                Enroll
              </button>
              <p className="text-lg mt-10 max-[680px]:text-base">
                <span className="text-2xl text-[#dc2626] font-bold max-[680px]:text-lg">
                  34,098
                </span>{" "}
                already enrolled
              </p>
            </div>
          </div>
          <div>
            <img src="/image.png" alt="" className=" max-[1200px]:hidden" />
          </div>
        </div>
      </section>
    </>
  );
}
