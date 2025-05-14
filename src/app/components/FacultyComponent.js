import next from "next";

export default function () {
  var data = [
    {
      img: "https://media.istockphoto.com/id/2180113330/photo/latino-arabian-woman-female-student-learn-calling-inviting-hand-gesture-study-educate-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=2QFb91klK4oyGsJDmBSgB7CD7oOL2F4akcFlmyC93q4=",
      name: "CA Priti Yadav",
      grad: "B.com, ACA",
      exp: "5 Years+ experience",
    },
    {
      img: "https://media.istockphoto.com/id/2160473960/photo/happy-satisfied-math-teacher-in-elementary-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=88SRHMeAozO221getjzwDbXMBKHyYN7qEbGWTZPHV7A=",
      name: "CA Siddharth Kapoor",
      grad: "B.com, M.com, LLB, PHD Commerce, UGC Net",
      exp: "5Years+  experience",
    },
    {
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "CA Neha Sharma",
      grad: "B.com, ACA, CSE",
      exp: "10 years+ experience",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
          <div key={index} className="w-[20%] h-[350px] flex flex-col bg-white items-center justify-center shadow-xl ">
            <div className="relative w-full h-[100px] bg-[#fff7f7]">
              <div className="absolute top-10 left-[20%] translate-x-[50%] -translate-y-[0%] overflow-hidden rounded-full bg-[#dc2626] p-0.5">
                <img
                  className="object-cover w-[120px] h-[120px] rounded-full"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-[250px] flex flex-col items-center justify-center bg-white rounded-t-full">
              <h2 className="text-2xl text-center text-[#dc2626] font-bold">
               {item.name}
              </h2>
              <div>
                <p className="text-center">{item.grad}</p>
                <p className="text-center">{item.exp}</p>
              </div>
            </div>
          </div>
      ))}
    </>
  );
}
