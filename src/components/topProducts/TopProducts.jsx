import ProductsDatas from "../../UI/productsData";
import { FaStar } from "react-icons/fa";
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div data-aos="fade-up" className="text-left mb-24">
          <p className="text-sm text-primary">Top Reatad Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            porro repellendus sed.
          </p>
        </div>
        {/* body section */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 palce-items-center"
        >
          {ProductsDatas.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800
            hover:bg-black/80 dark:hover:bg-primary hover:text-white
            relative shadow-xl duratiom-300 group max max-w-[300px] cursor-pointer "
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20
                 group-hover:scale-105 duration-300
                 drop-sadow-md sm:flex "
                />
              </div>
              {/* dataist section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title} </h1>
                <p className="text-gray-400 duration-300 text-sm line-clamp-2 group-hover:text-white">
                  {data.description}
                </p>
                <button
                  className=" bg-primary hover:scale-105 duration-300
                text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
