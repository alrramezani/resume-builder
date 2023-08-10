import React from "react";
interface ITextareaProps {
  name: string;
  onChange: any;
  value: string;
  label?: string;
  notice?: string;
  icon?: any;
  placeholder?: string;
  error?: string;
  required?: boolean;
}
const Textarea = ({
  name,
  onChange,
  value,
  label,
  placeholder,
  notice,
}: ITextareaProps) => {
  return (
    <div className="w-full">
      {label ? <label className=" text-sm text-gray-600">{label}</label> : null}
      {notice ? (
        <span className=" block text-gray-600 text-xs mb-2">{notice}</span>
      ) : null}
      <div className="w-full relative">
        <textarea
          className=" rounded border border-gray-300 px-3 py-2 w-full h-32 resize-none leading-6"
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default Textarea;
