"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface IWysiwygProps {
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
const Wysiwyg = ({
  name,
  onChange,
  value,
  label,
  placeholder,
  notice,
}: IWysiwygProps) => {
  return (
    <div className="w-full">
      {label ? <label className="text-sm text-gray-600">{label}</label> : null}
      {notice ? (
        <span className="text-xs text-gray-600 block mb-2">{notice}</span>
      ) : null}
      <div>
        <ReactQuill
          className=" h-44 rounded mb-11"
          theme="snow"
          value={value}
          placeholder={placeholder}
          onChange={(data) => {
            onChange({ target: { value: data, name: name } });
          }}
        />
      </div>
    </div>
  );
};
export default Wysiwyg;
