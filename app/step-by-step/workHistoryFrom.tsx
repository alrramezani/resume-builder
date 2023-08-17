"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import Input from "@/components/input";
import Wysiwyg from "@/components/wysiwyg";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import DatePicker from "@/components/datePicker";
import { IoPencilSharp, IoTrashOutline } from "react-icons/io5";
export interface IWorkHistoryData {
  title?: string;
  employer?: string;
  location?: string;
  description?: string;
  current?: boolean;
  start?: string;
  end?: string;
}
export default function WorkHistoryForm() {
  const [histories, setHistories] = useState<IWorkHistoryData[]>([]);
  const [formData, setFormData] = useState<IWorkHistoryData>({
    current: false,
  });
  const [editMode, setEditMode] = useState<number>(-1);
  useLayoutEffect(() => {
    const loc = localStorage.getItem("workHistories");
    if (loc) {
      let historiesArray = JSON.parse(loc);
      if (typeof historiesArray === "object") {
        setHistories(historiesArray);
      }
    }
  }, []);
  const clear = () => {
    setFormData({ current: false });
    setEditMode(-1);
  };
  const saveWorkHistory = () => {
    let newHistories = [...histories];
    if (editMode >= 0) {
      newHistories[editMode] = formData;
    } else {
      newHistories.push(formData);
    }
    setHistories(newHistories);
    clear();
  };
  const removeItem = (index: number) => {
    let newHistories = [...histories];
    newHistories = newHistories.splice(index, 1);
    setHistories(newHistories);
    clear();
  };
  useEffect(() => {
    localStorage.setItem("workHistories", JSON.stringify([...histories]));
  }, [histories]);
  const handleChange = (e: any) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const itemStyle = "flex";
  const linesStyle = "w-[25px] relative";
  const halfLineStyle = "h-1/2 border-l border-l-gray-300";
  const circleBoxStyle =
    "absolute top-[calc(50% - 5px)] left-[-5px] after:content-[''] after:bg-white after:w-[10px] after:h-4 after:z-0 after:top-[-8px] after:left-0";
  const circleStyle =
    "w-[10px] h-[10px] border-[2px] border-gray-600 rounded-full bg-white z-10 absolute top-[-5px] left-0";
  return (
    <div className="flex flex-wrap justify-between">
      <div>
        <div className={itemStyle}>
          <div className={linesStyle}>
            <div className={halfLineStyle} />
            <div className={circleBoxStyle}>
              <span className={circleStyle} />
            </div>
            <div className={`${halfLineStyle} border-dashed`} />
          </div>
          <div className=" w-full rounded-lg border border-gray-400 shadow-sm p-4 flex flex-wrap justify-between mb-4">
            <div className=" w-full mb-4 text-lg font-normal">
              Add work history:
            </div>
            <div className="w-1/2 pr-4 mb-4">
              <Input
                name="title"
                value={formData.title || ""}
                label="Job Title"
                placeholder="e.g. Senior Front End Developer"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 pr-4 mb-4">
              <Input
                name="employer"
                value={formData.employer || ""}
                label="Employer"
                placeholder="e.g. Apple"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3 pr-4 mb-4">
              <Input
                name="location"
                value={formData.location || ""}
                label="Location"
                placeholder="e.g. Tehran, Iran"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3 pr-4 mb-4">
              <DatePicker
                name="start"
                value={formData.start || ""}
                max={formData.end || ""}
                label="Start Date"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3 pr-4 mb-4">
              <DatePicker
                name="end"
                value={formData.end || ""}
                min={formData.start || ""}
                label="End Date"
                onChange={handleChange}
                disable={formData.current}
              />
              <br />
              <Checkbox
                name="current"
                label="I currently work here"
                value={formData.current || false}
                onChange={handleChange}
              />
            </div>
            <Wysiwyg
              name="description"
              label="Job Description"
              notice="Enter basic information about your previous jobs so employers can see where you've worked."
              value={formData.description || ""}
              placeholder="e.g. Managed team of employees, overseeing hiring, training and professional growth of employees.
          Worked flexible hours across night, weekend and holiday shifts..."
              onChange={handleChange}
            />
            <div className=" mt-4 flex gap-2">
              <Button
                title={editMode >= 0 ? "Edit History" : "Add History"}
                onClick={saveWorkHistory}
              />
              <Button btn="info" title="Clear" onClick={clear} />
            </div>
          </div>
        </div>
        {histories &&
          histories.map((history, index) => (
            <div className={itemStyle} key={index}>
              <div className={linesStyle}>
                <div
                  className={`${halfLineStyle} ${
                    index === 0 ? " border-dashed" : ""
                  }`}
                />
                <div className={circleBoxStyle}>
                  <span className={circleStyle} />
                </div>
                <div className={halfLineStyle} />
              </div>
              <div className=" w-full rounded border border-gray-300 shadow-sm p-4 mb-4">
                <header className=" flex justify-between mb-4 font-grotesk">
                  <span className=" bg-black text-white p-1 rounded-full w-6 h-6 flex justify-center items-center text-xs">
                    {index + 1}
                  </span>
                  <div className="flex gap-2">
                    <IoPencilSharp
                      className=" cursor-pointer"
                      onClick={() => {
                        setEditMode(index);
                        setFormData(history);
                      }}
                    />
                    <IoTrashOutline
                      className=" cursor-pointer"
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </header>
                <div className=" text-gray-600 text-xs mb-2">
                  <span className=" text-base text-black">{history.title}</span>{" "}
                  | <span>{history.employer}</span> |{" "}
                  <span>{history.start}</span> -{" "}
                  <span>{history.current ? "current" : history.end}</span>
                </div>
                <div
                  className=" text-gray-600 text-xs leading-6 h-16 overflow-hidden relative after:content-[''] after:w-full after:h-full after:absolute after:bottom-0 after:left-0"
                  dangerouslySetInnerHTML={{
                    __html: history.description || "",
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
