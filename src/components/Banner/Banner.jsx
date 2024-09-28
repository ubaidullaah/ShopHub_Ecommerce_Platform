import React from "react";
import BannerImg from "../../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105 border-2 border-blue-200"
            />
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left text-purple-700"
            >
              Winter Sale Up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg text-gray-700 tracking-wide leading-7 text-center sm:text-left"
            >
              Discover amazing deals and enjoy our quality products during this
              winter sale. Don't miss out on these exclusive offers!
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: <GrSecure className="text-4xl" />, text: "Quality Products", bgColor: "bg-violet-200" },
                { icon: <IoFastFood className="text-4xl" />, text: "Fast Delivery", bgColor: "bg-orange-200" },
                { icon: <GiFoodTruck className="text-4xl" />, text: "Easy Payment Method", bgColor: "bg-green-200" },
                { icon: <GiFoodTruck className="text-4xl" />, text: "Get Offers", bgColor: "bg-yellow-200" },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className={`flex items-center gap-4 p-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105 ${item.bgColor}`}
                >
                  <div className={`h-12 w-12 flex items-center justify-center shadow-md rounded-full ${item.bgColor.replace("200", "400")}`}>
                    {item.icon}
                  </div>
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
