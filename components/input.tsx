interface IInputProps {
  type?: string;
  name: string;
  onChange: any;
  value: string;
  label?: string;
  icon?: any;
  ltr?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disable?: boolean;
}
const Input = (props: IInputProps) => {
  const modes: any = {
    text: "text",
    number: "numeric",
    password: "password",
    email: "email",
  };

  return (
    <div className="w-full">
      <label className=" text-sm text-gray-600">{props.label}</label>
      <div className="w-full relative">
        {props.icon}
        <input
          className=" rounded border border-gray-300 px-2 py-3 w-full leading-7 placeholder:text-gray-600 placeholder:opacity-50 disabled:cursor-not-allowed"
          type={props.type ? props.type : "text"}
          inputMode={props.type ? modes[props.type] : "text"}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disable}
        />
        {props.error && (
          <span className=" absolute right-0 text-red-500 text-xs bottom-0 bg-white mx-[2px] my-2 rounded leading-[9px]">
            {props.error}
          </span>
        )}
      </div>
    </div>
  );
};
export default Input;
