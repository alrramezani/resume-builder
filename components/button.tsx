import { ImSpinner8 } from "react-icons/im";
interface IButtonProps {
  title?: string;
  onClick?: any;
  btn?: string | undefined;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({
  title,
  onClick,
  btn,
  disabled,
  loading,
  size,
  type,
}: IButtonProps) => {
  const btnTypeStyle = () => {
    switch (btn) {
      case "info":
        return "bg-white border border-black text-black";
      default:
        return "bg-black border-0 text-white";
    }
  };
  return (
    <button
      className={`px-3 py-2 rounded font-grotesk text-base font-normal relative transition-all cursor-pointer ${btnTypeStyle()} ${
        disabled ? " opacity-70 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      <span className={`${loading ? "opacity-10" : ""}`}>{title}</span>
      {loading && (
        <ImSpinner8 className=" absolute left-[calc(50% - 12px)] text-2xl animate-spin" />
      )}
    </button>
  );
};
export default Button;
