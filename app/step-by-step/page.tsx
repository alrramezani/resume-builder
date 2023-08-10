"use client";
import { useState } from "react";
import Header from "@/components/header";
import Senobar from "@/components/resume_templates/senobar";

import PersonalDataForm from "./personalDataForm";
export default function Home() {
  const [step, setStep] = useState("personalData");

  const stepView = () => {
    switch (step) {
      case "personalData":
        return <PersonalDataForm />;
      //   case "workHistory":
      //     return <WorkHistoryForm />;
      //   case "education":
      //     return <EducationForm />;
      default:
        return null;
    }
  };
  return (
    <main className="">
      <Header title="Free Resume Builder" progress={0} />
      <div className="container px-4">
        <div className="my-16 flex items-start gap-8">
          {stepView()}
          <div
            className="aspect-[1/1.41] border border-gray-300"
            style={{ zoom: "50%" }}
          >
            <Senobar />
          </div>
        </div>
      </div>
    </main>
  );
}

// aspect-ratio: 1/1.41;