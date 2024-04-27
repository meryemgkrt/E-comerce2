import { Menu } from "./DataList";
import { DropdownLinks } from "./DataList";
import { FaCaretDown } from "react-icons/fa";

const ListNav = () => {
  return (
    <div data-aos="zoom-in" className="flex justify-center">
      <ul className="sm:flex hidden lg:text-xl md:text-[18px] items-center gap-4 sm:text-xs">
        {Menu.map((data) => (
          <li key={data.link}>
            <a
              className="inline-block px-4 hover:text-primary duration-200"
              href={data.link}
            >
              {data.name}{" "}
            </a>
          </li>
        ))}
        <li className="group relative cursor-pointer">
          <a className="flex items-center gap-[2px] py-2" href="">
            Trending Products
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180:" />
            </span>
          </a>
          <div
            className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md
          "
          >
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 transition-all"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListNav;
