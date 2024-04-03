import { Link } from "react-router-dom";

type BtnType = {
  color: string;
  text: string;
  bgColor: string;
  border: string;
  borderColor: string;
  weight: string;
  opacity: string;
  hoverBg: string;
  id: string;
};
function Button({
  color,
  text,
  bgColor,
  border,
  borderColor,
  weight,
  opacity,
  hoverBg,
  id,
}: BtnType) {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={`/detail/product/${id}`}>
      <button
        className={`w-[160px] text-[13px] ${weight} tracking-[1px] text-${color} bg-${bgColor} py-[15px] ${border} ${borderColor} ${opacity} ${hoverBg}`}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
