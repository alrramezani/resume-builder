"use client";
import "./base.css";
import { IoPrintOutline } from "react-icons/io5";
import Senobar from "@/components/resume_templates/senobar";
const ResumePage = () => {
  const print = () => {
    window.print();
  };
  return (
    <div className="container">
      <div id="print-button" className="fixed bottom-8 right-8 cursor-pointer text-3xl p-2 rounded bg-gray-100" onClick={print}>
        <IoPrintOutline />
      </div>
      <Senobar />
    </div>
  );
};
export default ResumePage;
