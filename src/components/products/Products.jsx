import ProductsData from "../../UI/data";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className=" container">
        <div className="text-center mb-10 max-w-[600px]">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-up="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            porro repellendus sed.
          </p>
        </div>
      </div>
      {/* body */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}

          {ProductsData.map((data) => (
            <div
              key={data.id}
              className=" -y-3"
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 data-aos="fade-up" className=" font-semibold">
                  {data.title}
                </h3>
                <p data-aos="fade-up" className="text-sm text-gray-600">
                  {data.color}
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* all buton  */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
