interface ICheckboxProps {
  name: string;
  onChange: any;
  value: boolean;
  label?: string;
  error?: string;
  required?: boolean;
}
import { BsCheck } from "react-icons/bs";
const Checkbox = (props: ICheckboxProps) => {
  return (
    <div className="w-full">
      <label className=" text-sm text-gray-600 cursor-pointer flex">
        <div
          className={`border border-gray-300 text-white ${
            props.value ? " bg-blue-600" : " bg-white"
          } w-5 h-5 rounded mr-2 flex justify-center items-center text-3xl transition-all`}
        >
          {props.value ? <BsCheck /> : null}
        </div>
        {props.label}
        <input
          className="hidden"
          type="checkbox"
          checked={props.value || false}
          onChange={() =>
            props.onChange({
              target: {
                name: props.name,
                value: !props.value,
              },
            })
          }
        />
        {props.error && (
          <span className="absolute right-0 text-red-500 text-xs bottom-0 bg-white mx-[2px] my-2 rounded leading-[9px]">
            {props.error}
          </span>
        )}
      </label>
    </div>
  );
};
export default Checkbox;
