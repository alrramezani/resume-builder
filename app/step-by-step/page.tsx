"use client";
import { useState } from "react";
import Header from "@/components/header";
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
      <div className="container">{stepView()}</div>
    </main>
  );
}
