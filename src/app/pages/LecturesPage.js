import LectureComponent2 from "../components/LectureComponent2"


export default function LecturesPage() {
    return <>
    <section className="container mx-auto px-4 text-black pt-20 pb-30">
        <div>
             <div className="flex justify-center items-center pb-15">
          <h1 className="text-3xl font-semibold">
            All <span className={`text-[#dc2626] italic`}>Lectures</span>
          </h1>
        </div>

        <div className={`flex  `}></div>

        <div className="flex-wrap items-start justify-start flex gap-5">
          <LectureComponent2 />
        </div>
        </div>
    </section>
    </>
}