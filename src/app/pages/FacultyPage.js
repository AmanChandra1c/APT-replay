import next from "next";
import FacultyComponent from "../components/FacultyComponent";

export default function FacultyPage() {
  return (
    <>
      <div className="w-full p-[50px]">
        <div className="flex flex-col items-center justify-center text-black pb-20">
          <h1 className="text-4xl">
            <sapn className="text-[#dc2626] italic">Meet</sapn> Our Faculty
          </h1>
          <p className="text-gray-500">
            Meet our highly qualified faculty team with years of experience in
            shaping future finance leaders. Our mentors bring unparalleled
            expertise and dedication to every class.
          </p>
        </div>
        <div className=" flex items-center justify-center bg-[#fdefef] py-20">
          <div className="w-[50%] h-[320px] flex bg-[#fdefef] gap-5 text-black">
            <div className="w-[50%] flex flex-col items-center bg-white justify-center shadow-xl relative">
              <div>
                <h2 className="text-2xl text-[#dc2626] font-bold">
                  CA Manoj Dubey
                </h2>
              </div>
              <div>
                <p className="text-2xl text-center">
                  B.com, FCA <br />
                  25 Years+ experience
                </p>
              </div>
              <div className="absolute -left-35 overflow-hidden rounded-full bg-[#dc2626] p-0.5">
                <div className="">
                  <img
                    className="object-cover w-[200px] h-[200px] rounded-full"
                    src="https://media.istockphoto.com/id/2160439329/photo/happy-multiethnic-male-teacher-smiling-at-primary-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdPmcoCHEpW1o58vsDrVl-sl0X4d9x_5UV5I0rO-QJw="
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-[50%] flex flex-col bg-white items-center justify-center shadow-xl relative">
              <div>
                <h2 className="text-2xl text-[#dc2626] font-bold">
                  CA Rachna Parakh Dubey
                </h2>
              </div>
              <div>
                <p className="text-2xl text-center">
                  B.com, FCA,LLB, DISA <br />
                  25 Years+ experience
                </p>
              </div>
              <div className="absolute -right-35 overflow-hidden rounded-full bg-[#dc2626] p-0.5">
                <div className="">
                  <img
                    className="object-cover w-[200px] h-[200px] rounded-full"
                    src="https://media.istockphoto.com/id/1310208267/photo/portrait-of-indian-woman-as-a-teacher-in-sari-standing-isolated-over-white-background-stock.webp?a=1&b=1&s=612x612&w=0&k=20&c=m7WUhtpenSClkfBkWFr447QoZKJLpr_RzC7nUBz3cpc="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-black  gap-10 pt-10 pb-20 flex items-center justify-start flex-wrap bg-[#fdefef]">
            <FacultyComponent />
        </div>
        
      </div>
    </>
  );
}
