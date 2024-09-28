import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../App"; // Use Cart context to add to cart
import { useNavigate } from "react-router-dom"; // Navigation for Cart page

// Customized Products Data
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Stay comfortable all day with our lightweight casual wear. Perfect for a relaxed day out or lounging at home.",
    price: 1200, // Price in numeric format for easier calculations
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Make a statement with this vibrant printed shirt. Designed for those who love to stand out with bold, artistic prints.",
    price: 1500, 
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Elegant and chic, this women's shirt blends comfort with style, making it ideal for both casual and semi-formal occasions.",
    price: 1300, 
  },
];

const TopProducts = () => {
  const { addToCart } = useCart(); // Access addToCart from Cart context
  const navigate = useNavigate();

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    addToCart(product);

    // Show toast notification with product details and "Go to Cart" button
    toast(
      <div>
        <p>
          <strong>{product.title}</strong> (Price: Rs. {product.price}) has been added to your cart!
        </p>
        <button
          onClick={() => {
            navigate("/cart"); // Navigate to the cart page
          }}
          className="mt-2 bg-secondary text-white py-1 px-2 rounded-md hover:bg-primary"
        >
          Go to Cart
        </button>
      </div>,
      {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
      }
    );
  };

  return (
    <div>
      <div className="container">
        <ToastContainer /> {/* Toast container for notifications */}
        
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our top-rated products, designed to offer style and comfort.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <p className="text-lg font-semibold mt-2">Rs. {data.price}</p> {/* Price displayed */}

                {/* Add to Cart Button */}
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleAddToCart(data)} // Add to Cart handler
                >
                  Add to Cart
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
