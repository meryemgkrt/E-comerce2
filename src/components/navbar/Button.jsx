import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Button = ({ handleOrderPopup }) => {
  return (
    <div className=" flex justify-center items-center">
      <button
        onClick={() => handleOrderPopup()}
        className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex justify-center items-center gap-3 group"
      >
        <span className="group-hover:block hidden transition-all duration-200">
          Order
        </span>
        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
      </button>
      {/* dark mode */}
      <DarkMode />
    </div>
  );
};

export default Button;
