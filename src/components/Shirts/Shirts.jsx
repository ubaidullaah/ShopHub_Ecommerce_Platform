import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/shirt4.png";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../../App"; // Assuming useCart is part of your context
import { useNavigate } from "react-router-dom"; // For navigation

// Products data with price as numbers
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Men's Casual Shirt",
    rating: 4.9,
    color: "Light Blue",
    price: 1000, // Changed to a number
    aosDelay: "0",
    category: "best-selling",
  },
  {
    id: 2,
    img: Img2,
    title: "Men's Formal Shirt",
    rating: 4.6,
    color: "White",
    price: 1200,
    aosDelay: "200",
    category: "regular",
  },
  {
    id: 3,
    img: Img3,
    title: "Graphic Tee",
    rating: 4.8,
    color: "White",
    price: 1500,
    aosDelay: "400",
    category: "best-selling",
  },
  {
    id: 4,
    img: Img4,
    title: "Short Sleeve Shirt",
    rating: 4.4,
    color: "Orange Black",
    price: 1300,
    aosDelay: "600",
    category: "regular",
  },
  {
    id: 5,
    img: Img2,
    title: "Polo Shirt",
    rating: 4.7,
    color: "White & Blue",
    price: 1400,
    aosDelay: "800",
    category: "regular",
  },
];

// Shirts Component
const Shirts = ({ category }) => {
  const { addToCart } = useCart(); // Hook to handle cart actions
  const navigate = useNavigate(); // Hook for navigation

  // Filter products based on category
  const filteredProducts =
    category === "best-selling"
      ? ProductsData.filter((product) => product.category === "best-selling")
      : ProductsData;

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    addToCart(product);

    // Show a toast notification with the product details and "Go to Cart" button
    toast(
      <div>
        <p>
          <strong>{product.title}</strong> (Price: Rs. {product.price}) has been
          added to your cart!
        </p>
        <button
          onClick={() => {
            navigate("/cart"); // Redirect to Cart page
          }}
          className="mt-2 bg-secondary text-white py-1 px-2 rounded-md hover:bg-primary"
        >
          Go to Cart
        </button>
      </div>,
      {
        position: "top-right",
        autoClose: 5000, // Automatically close after 5 seconds
      }
    );
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <ToastContainer /> {/* Toast notifications container */}
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            {category === "best-selling"
              ? "Best Selling Products for you"
              : "Top Selling Products for you"}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {category === "best-selling" ? "Best Selling" : "Products"}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our latest collection of stylish shirts for every occasion.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Product Cards */}
            {filteredProducts.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <p className="text-sm font-semibold">
                    Price: Rs. {data.price}
                  </p>
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(data)}
                    className="mt-2 bg-primary text-white py-1 px-3 rounded-md hover:bg-secondary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shirts;
