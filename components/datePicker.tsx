"use client"
import { useState, useEffect, useRef } from "react";
import { IoCalendarClearOutline, IoBan } from "react-icons/io5";
interface IDatePickerProps {
  name: string;
  onChange: any;
  value: string;
  min?: string;
  max?: string;
  label?: string;
  error?: string;
  disable?: boolean;
}
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DatePicker = ({
  label,
  error,
  onChange,
  name,
  value,
  min,
  max,
  disable,
}: IDatePickerProps) => {
  const [selectorStatus, setSelectorStatus] = useState(false);
  const [selectedYear, setSelectedYear] = useState<null | number>(null);
  const wrapperRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSelectorStatus(false);
        setSelectedYear(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const years = () => {
    let result = [];
    let now = new Date();
    let minArr = min ? min.split("-") : null;
    let minIndex = minArr ? Number(minArr[0]) : 1980;
    let maxArr = max ? max.split("-") : null;
    let maxIndex = maxArr ? Number(maxArr[0]) : now.getFullYear();
    for (let index = maxIndex; index >= minIndex; index--) {
      result.push(index);
    }
    return result;
  };
  const submit = (value: number) => {
    setSelectorStatus(false);
    onChange({
      target: {
        name: name,
        value: selectedYear + "-" + (value < 10 ? "0" + value : value),
      },
    });
    setSelectedYear(null);
  };
  const monthStatus = () => {
    let result = { min: 0, max: 12 };
    let minArr = min ? min.split("-") : [];
    let maxArr = max ? max.split("-") : [];
    if (Number(minArr[0]) === selectedYear) {
      result.min = Number(minArr[1]);
    }
    if (Number(maxArr[0]) === selectedYear) {
      result.max = Number(maxArr[1]);
    }
    return result;
  };
  const itemStyle =
    "block rounded border border-gray-300 py-[2px] px-1 w-[30%] cursor-pointer text-center mb-1";
  return (
    <div className={`w-full transition-all ${disable ? " opacity-60" : ""}`}>
      <label className="text-sm text-gray-600">{label}</label>
      <div className=" w-full relative" ref={wrapperRef}>
        <div
          className={`rounded border px-3 py-2 w-full leading-6 flex justify-between items-center ${
            disable ? "cursor-not-allowed" : "cursor-pointer"
          } ${selectorStatus ? " border-black" : "border-gray-300"}`}
          onClick={() => (disable ? null : setSelectorStatus(!selectorStatus))}
        >
          <span className="text">{value || "--"}</span>
          {disable ? (
            <IoBan className="icon" />
          ) : (
            <IoCalendarClearOutline className="icon" />
          )}
        </div>

        <div
          className={`${
            selectorStatus ? "block" : "hidden"
          } rounded border border-gray-300 px-3 py-2 w-full h-40 pr-5 absolute z-50 bg-white top-[calc(100% + 2px)] before:content-[""] before:absolute before:w-[3px] before:h-[3px] before:bg-gray-300 before:right-2 before:rounded-sm before:top[calc(100% - 16px)]`}
        >
          <div className=" h-full w-full overflow-y-auto leading-6 flex items-center flex-wrap justify-between no-scrollbar">
            {!selectedYear
              ? years().map((year) => (
                  <div
                    className={`${itemStyle} hover:bg-gray-300`}
                    key={year}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </div>
                ))
              : months.map((month, index) => (
                  <div
                    className={`${itemStyle} ${
                      index > monthStatus().min - 2 && index < monthStatus().max
                        ? " hover:bg-gray-300"
                        : " opacity-60 cursor-not-allowed hover:bg-none"
                    }`}
                    key={month}
                    onClick={() =>
                      index > monthStatus().min - 2 && index < monthStatus().max
                        ? submit(index + 1)
                        : null
                    }
                  >
                    {month}
                  </div>
                ))}
          </div>
        </div>
        {error && (
          <span className="absolute right-0 text-red-500 text-xs bottom-0 bg-white mx-[2px] my-2 rounded leading-[9px]">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
export default DatePicker;
