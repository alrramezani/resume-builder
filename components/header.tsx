interface IHeader {
  title: string;
  caption?: string;
  progress?: number;
}
const Header = ({ title, caption, progress }: IHeader) => {
  let bw = progress ? `before:w-[${progress}%]` : "before:w-0";
  return (
    <header
      className={`w-full relative border border-b-gray-200 pt-4 pb-2 before:content:[''] before:bg-black before:absolute before:bottom-[-1px] before:left-0 before:shadow before:h-[1px] ${bw}`}
    >
      <div className="container font-sans font-extralight">
        <h1 className="text-2xl">{title}</h1>
        {caption && <h3 className="text-xl text-gray-600">{caption}</h3>}
      </div>
    </header>
  );
};
export default Header;
