import { WiTime4 } from "react-icons/wi";
import { MdOutlineFileCopy } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";

export default function LectureComponent2() {
  var data = [
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "What is Accounting?",
      description:
        "Understanding the definition, purpose, and real-world importance of accounting.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "Branches of Accounting",
      description:
        "A brief overview of financial, managerial, cost, and tax accounting.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "Users of Accounting Information",
      description:
        "Internal vs external users — management, investors,government, etc.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "Objectives & Functions of Accounting",
      description:
        "Recording, classifying, summarizing, analyzing, and interpreting transactions.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "Accounting Terms & Terminologies",
      description:
        "Basic terms like assets, liabilities, capital, income, expense, etc.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "The Accounting Process / Cycle",
      description:
        "Steps from identifying transactions to preparing financial statements.",
      duration: "4hr",
      test: "1",
    },
    {
      vdo: "https://www.pond5.com/stock-footage/item/77762820-time-lapse-sunrise-over-dallas-silhouette-few-seconds-nice",
      title: "Types of Accounts & Golden Rules of Accounting",
      description:
        "Personal, Real, Nominal accounts and rules of Debit/Credit.",
      duration: "4hr",
      test: "1",
    },
  ];
  return (
    <>
      {data.map((itm, ind) => (
        <div
          key={ind}
          className="container w-[48%] bg-white shadow rounded-lg overflow-hidden max-[770px]:w-[98%]"
        >
          <div className="relative">
            <video
              src={itm.vdo}
              className="object-cover origin-top w-[100%] h-60"
              controls
              autoPlay
            />
            <img
              src="image copy 4.png"
              className="w-15 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            />
          </div>
          <div className="py-10 px-5 max-[400px]:py-4 max-[330px]:px-3">
            <div className="text-2xl flex justify-between items-start pr-5 cursor-pointer max-[500px]:pr-0 max-[500px]:text-lg max-[1023px]:text-lg">
              <h2 className="font-bold">
                {ind + 1}. {itm.title}
              </h2>
              <h2 className="text-[#dc2626]">
                {ind > 1 ? <LuLockKeyhole /> : "Free"}
              </h2>
            </div>
            <p className="text-lg text-gray-500 mt-5 tracking-wider w-[90%] max-[500px]:text-sm ">
              {itm.description}
            </p>
            <div className="mt-5 flex items-center gap-10 max-[330px]:gap-5">
              <div className="flex items-center gap-2">
                <WiTime4 className="text-[#dc2626] text-lg font-semibold" />
                <h3>Duration: {itm.duration}</h3>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineFileCopy className="text-[#dc2626] text-lg font-semibold" />
                <h3>Test : {itm.test}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
