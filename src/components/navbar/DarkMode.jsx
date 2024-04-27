import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="flex justify-center items-center relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer duration-300 drop-shadow_[1px_1px_1px_rgba(0,0,0,0.1)] transition-all absolute right-0 z-10 ${
          theme == "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        className="w-12 cursor-pointer duration-300 drop-shadow_[1px_1px_1px_rgba(0,0,0,0.1)] transition-all"
      />
    </div>
  );
};

export default DarkMode;
