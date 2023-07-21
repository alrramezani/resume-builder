import Header from "@/components/header";
import { TbForms, TbFileImport } from "react-icons/tb";
export default function Home() {
  const cardStyle =
    "w-full md:w-[35%] cursor-pointer rounded-lg font-grotesk border border-gray-400 py-6 md:py-16 px-6 transition-all hover:bg-gray-100 text-center";
  return (
    <main className="">
      <Header title="Free Resume Builder" progress={0} />
      <div className="container px-4">
        <div className=" pt-16 text-center">
          <h1 className=" font-grotesk mb-4 text-2xl md:text-4xl">
            Create a Professional Resume
          </h1>
          <div className="w-full md:w-2/4 text-gray-600 text leading-8 m-auto text-justify">
            Finding a job can be stressful, confusing, and tedious. And yeah,
            resume writing is an extra pain, I create this resume maker for
            myself and am glad to share it with you. Hope it helps you.
          </div>
        </div>

        <div className="flex md:px-16 py-8 justify-center gap-8 flex-wrap">
          <div className={cardStyle}>
            <TbForms className=" text-5xl inline-block" />
            <h5 className=" my-6 text-bold">Create new resume</h5>
            <div className=" text-gray-600">
              with step-by-step resume builder, you can create your resume very
              fast.
            </div>
          </div>
          <div className={cardStyle}>
            <TbFileImport className=" text-5xl inline-block" />
            <h5 className=" my-6 text-bold">Import resume data</h5>
            <div className=" text-gray-600">
              import your valid JSON resume data.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
