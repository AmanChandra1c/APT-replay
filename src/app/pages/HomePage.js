import next from "next";
import HomepageComponent1 from "../components/HomepageComponent1";

export default function HomePage() {
  return (
    <>
      <div className="w-screen mx-auto max-w-full text-black bg-[#fdefef] pl-[50px] pt-[100px] pb-[150px]">
        <div className="mb-[100px]">
          <h1 className="text-gray text-2xl">
            {" "}
            Hello / <span className="text-black">Course</span>
          </h1>
        </div>
        <div className="w-100%]">
          <h1 className="text-5xl font-bold mb-[20px] max-[800px]:text-4xl max-[600px]:text-3xl max-[520px]:text-2xl">
            <span className="italic text-[#dc2626]">Mastering</span> Accountancy Basics
          </h1>

          <div className="w-[80%]">
            <p className="text-2xl text-gray-500 mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
              euismod euismod nisi. Donec euismod, nisl eget consectetur
              sagittis, nisl nunc euismod nisi, euismod euismod nisi.
            </p>
            <div className="mt-10">
              <HomepageComponent1 />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-10 mt-30 max-[668px]:flex-col">
          <div className="flex items-center">
            <img className="w-[65px] h-[65px] rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZly544rjV2hbPSMKjUWE6B7x2MAdYz_IQw&s" alt="Lights" />
            <img className="w-[65px] h-[65px] -ml-4 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9u62M7e0iKDQW31tgDta55vrs95CUceLlzA&s" alt="Lights" />
            <img className="w-[65px] h-[65px] -ml-4 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMgjNuh9LEmJ4JWgSRedPX9TDdfcInwz9Tw&s" alt="Lights" />
          </div>
          <div>
            <h3 className="text-2xl">
                Instructors: CA Shashikant Dubey, CA Neha Sharma <br/>
              <span className="text-[#dc2626] font-bold underline">+2 more</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
