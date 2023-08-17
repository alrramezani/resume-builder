interface ISelectProps {
  name: string;
  options: { value: string | number; title: string | number }[];
  onChange: any;
  value: string;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disable?: boolean;
}
const Select = (props: ISelectProps) => {
  return (
    <div className="w-full">
      <label className=" text-sm text-gray-600">{props.label}</label>
      <div className="w-full relative">
        <select
          className={`rounded border border-gray-300 px-3 py-2 w-full leading-6 ${
            props.disable ? " cursor-not-allowed" : ""
          }`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disable}
        >
          {props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        {props.error && (
          <span className=" absolute right-0 text-red-500 text-xs bottom-0 bg-white mx-[2px] my-2 rounded leading-[9px]">
            {props.error}
          </span>
        )}
      </div>
    </div>
  );
};
export default Select;
