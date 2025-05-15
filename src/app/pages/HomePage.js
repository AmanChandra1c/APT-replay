import next from "next";
import HomepageComponent1 from "../components/HomepageComponent1";

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto bg-[#fff7f7]">
        <div className="container mx-auto px-10 max-w-full text-black max-[1600px]:pt-20 max-[1600px]:px-10 bg-[#FDEFEF] max-[4300px]:pt-50 max-[3500px]:pt-40 pt-50 pb-30 flex">
          <div>
            <div className="pb-50 max-[1600px]:pb-10 max-[4300px]:pb-50 max-[3500px]:pb-30 max-[3000px]:pb-20 max-[350px]:pb-30">
              <h3 className="max-[3000px]:text-4xl max-[570px]:text-2xl text-7xl">
                {" "}
                <span className="text-gray-600 text-bold">Home</span> / Course
              </h3>
            </div>
            <div>
              <h1 className="text-9xl font-bold max-[3500px]:text-8xl max-[3000px]:text-6xl max-[770px]:text-4xl max-[570px]:text-3xl">
                <span className="text-[#dc2626] italic">Mastering</span>{" "}
                Accountancy Basics
              </h1>
              <p className="w-[90%] text-7xl text-gray-500 max-[1600px]:text-2xl max-[570px]:text-normal max-[3000px]:text-4xl max-[1600px]:mt-10 max-[3000px]:mt-20 mt-30 max-[4300px]:text-6xl max-[4300px]:mt-40 max-[3500px]:text-5xl">
                Designed to help beginners and learners refresh key concepts
                with ease. It simplifies core accounting principles and builds a
                strong foundation for further studies or real-world application.
              </p>
            </div>
            <div className="mt-40 max-[4300px]:mt-40 max-[3000px]:mt-20 max-[1600px]:mt-12 ">
              <HomepageComponent1 />
            </div>
            <div className="mt-40 max-[4300px]:mt-80 flex items-center max-[1000px]:gap-20 gap-10 max-[3500px]:mt-50 max-[3000px]:mt-30 max-[1600px]:mt-20 max-[570px]:flex-col max-[570px]:gap-10">
              <div className="flex"> 
                <img
                  src="/image copy 2.png"
                  alt=""
                  className="w-[150px] h-[150px] object-cover rounded-full max-[5500px]:w-[300px] max-[1600px]:-ml-5 max-[5500px]:h-[300px] max-[4300px]:w-[200px] max-[4300px]:h-[200px] max-[3500px]:w-[100px] max-[3500px]:h-[100px] max-[1600px]:w-[70px] max-[1600px]:h-[70px]"
                />
                <img
                  src="/image copy.png"
                  alt=""
                  className="w-[150px] h-[150px] object-cover rounded-full max-[3500px]:-ml-10 max-[1600px]:-ml-5 -ml-10 max-[5500px]:w-[300px] max-[5500px]:h-[300px] max-[4300px]:w-[200px] max-[4300px]:h-[200px] max-[3500px]:w-[100px] max-[3500px]:h-[100px] max-[1600px]:w-[70px] max-[1600px]:h-[70px]"
                />
                <img
                  src="/image copy 3.png"
                  alt=""
                  className="w-[150px] h-[150px] object-cover max-[3500px]:-ml-10 rounded-full max-[1600px]:-ml-5 -ml-10 max-[5500px]:w-[300px] max-[5500px]:h-[300px] max-[4300px]:w-[200px] max-[4300px]:h-[200px] max-[3500px]:w-[100px] max-[3500px]:h-[100px] max-[1600px]:w-[70px] max-[1600px]:h-[70px]"
                />
              </div>
              <div>
                <p className="text-4xl leading-[1.5] max-[4300px]:text-6xl max-[3000px]:text-4xl max-[1600px]:text-2xl">
                  Instructors: CA Shashikant Dubey, CA Neha Sharma <br />{" "}
                  <span className="text-[#dc2626] underline">+2 more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] relative">
            <img
              src="image.png"
              alt=""
              className=" object-fit absolute top-[0%] right-[50%]  max-[1600px]:hidden max-[5000px]:top-[10%] max-[7000px]:right-[20%] max-[6000px]:right-[30%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
