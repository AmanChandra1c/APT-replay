import next from "next";
import { LuFileVideo2 } from "react-icons/lu";
import { WiTime2 } from "react-icons/wi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { MdLibraryBooks } from "react-icons/md";

export default function SubjectComponents() {
  var data = [
    {
      name: "Introduction to Accounting",
      Description:
        "Explore the basics of accounting as the language of business, covering its purpose, key principles, and how financial transactions are recorded and organized.",
      img: "https://plus.unsplash.com/premium_photo-1661326350444-8d0e57e4cdad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWNjb3VudGFuY3l8ZW58MHx8MHx8fDA%3D",
      lecture: "10",
      duration: "100hr",
      series: "10",
      notes: "yes",
    },
    {
      name: "The Accountiong Equation",
      Description:
        "Explore the basics of accounting as the language of business, covering its purpose, key principles, and how financial transactions are recorded and organized.",
      img: "https://plus.unsplash.com/premium_photo-1661326350444-8d0e57e4cdad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWNjb3VudGFuY3l8ZW58MHx8MHx8fDA%3D",
      lecture: "10",
      duration: "100hr",
      series: "10",
      notes: "yes",
    },
    {
      name: "Ledger & posting",
      Description:
        "Understand how to organize financial transactions by posting journal entries into ledger accounts and preparing account balances.",
      img: "https://plus.unsplash.com/premium_photo-1661378421687-7a1d255ac7df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFjY291bnRhbmN5fGVufDB8fDB8fHww",
      lecture: "10",
      duration: "100hr",
      series: "10",
      notes: "yes",
    },
    {
      name: "Cash Book and  Reconciliation",
      Description:
        "Learn how to record cash and bank transactions accurately and match them with bank statements to identify errors, omissions, or discrepancies.",
      img: "https://media.istockphoto.com/id/2148804792/photo/two-data-analysts-working-on-data-analysis-dashboard-for-business-strategy.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOHRPex7aXhOYASJ9gpqSB8NXNTvC5-UAZ-Gfh40gp4=",
      lecture: "10",
      duration: "100hr",
      series: "10",
      notes: "yes",
    },
    {
      name: "Final Accounts - Basics",
      Description:
        "Understand how to organize financial transactions by posting journal entries into ledger accounts and preparing account balances.",
      img: "https://media.istockphoto.com/id/2037006388/photo/technology-and-financial-advisory-services-concept-business-teamwork-and-working-on-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZZrgiqUE2R27iZT5uRfbJl8vH16RD5YAqLpw5wZ38g8=",
      lecture: "10",
      duration: "100hr",
      series: "10",
      notes: "yes",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="w-[47%] relative bg-white rounded p-8 overflow-hidden whitespace-normal mb-5 shadow-xl">
          <h1 className="text-2xl font-bold">{index + 1}. {item.name}</h1>
          <div className="flex justify-between items-start mt-5">
            <p className="text-gray-500">
              {item.Description}
            </p>
            <img
              className=" w-[200px] rounded h-[120px] object-cover"
              src={item.img}
              alt="subject"
            />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <LuFileVideo2 className="text-2xl text-[#dc2626]" />
                <h1> Total Lectures: {item.lecture}</h1>
              </div>
              <div className="flex gap-6">
                <MdLibraryBooks className="text-2xl text-[#dc2626]" />
                <h1> Test Series: {item.series}</h1>
              </div>
            </div>
            <div className="flex gap-6 flex-col">
              <div className="flex gap-6">
                <WiTime2 className="text-2xl text-[#dc2626]" />
                <h1> Duration: {item.duration}</h1>
              </div>
              <div className="flex gap-6">
                <CgNotes className="text-2xl text-[#dc2626]" />
                <h1> Notes: {item.notes}</h1>
              </div>
            </div>
          </div>
          <div className="absolute right-7 bottom-3">
            <MdOutlineKeyboardArrowRight className="text-4xl text-gray-500" />
          </div>
        </div>
      ))}
    </>
  );
}
