import clsx from "clsx";
import { ButtonProps } from "@/app/types/Type";

const Button: React.FC<ButtonProps> = ({
  text,
  widthFull,
  disabled,
  type = "button",
  onClick,
  icon: Icon,
  transparent,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `bg-primary  py-3 rounded-xl gap-2 flex items-center justify-center text-sm  disabled:bg-gray-500 disabled:cursor-not-allowed`,
        widthFull && "w-full",
        transparent
          ? "bg-transparent border-2 border-primary text-primary"
          : "text-white"
      )}
    >
      {text}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
