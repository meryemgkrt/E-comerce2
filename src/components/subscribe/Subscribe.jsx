import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white mb-20"
      data-aos="zoom-in"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center sm:text-left font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            data-aos="fade-up"
            placeholder="Enter your email"
            className="w-full p-3 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
