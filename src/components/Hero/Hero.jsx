import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Exclusive Deals on Men's Wear",
    description:
      "Explore our premium collection of men's wear with up to 50% off. Don't miss out on top trends at incredible prices.",
  },
  {
    id: 2,
    img: Image2,
    title: "Stylish Women's Wear at 30% Off",
    description:
      "Discover stunning women's wear with 30% off. From casual to formal, elevate your wardrobe with our unique pieces.",
  },
  {
    id: 3,
    img: Image3,
    title: "Mega Sale - Up to 70% Off!",
    description:
      "Shop now and save up to 70% on all products. Limited-time offer on our best-selling items!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-blue-100 flex justify-center items-center duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-primary to-secondary/40 absolute -top-1/2 right-0 rounded-full rotate-45 -z-10"></div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-800"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-base sm:text-lg text-gray-600"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full shadow-lg"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
