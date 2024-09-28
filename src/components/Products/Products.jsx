// src/pages/Products.js
import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Img1 from "../../assets/women/women.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../../App"; // Access addToCart from context
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Products data
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Green",
    price: 1500,
    aosDelay: "0",
    category: "best-selling",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "White",
    price: 2000,
    aosDelay: "200",
    category: "regular",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Blue",
    price: 800,
    aosDelay: "400",
    category: "best-selling",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Black",
    price: 1200,
    aosDelay: "600",
    category: "regular",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "White",
    price: 1100,
    aosDelay: "800",
    category: "regular",
  },
];

// Products component
const Products = ({ category }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filter products based on category
  const filteredProducts =
    category === "best-selling"
      ? ProductsData.filter((product) => product.category === "best-selling")
      : ProductsData;

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
            navigate("/cart"); // Navigate to the cart page when button clicked
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
    <div className="mt-14 mb-12">
      <div className="container">
        <ToastContainer /> {/* Render toast notifications */}

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
            Discover a wide range of stylish and trendy products just for you!
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Product Cards */}
            {filteredProducts.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                key={product.id}
                className="border p-4 rounded-lg shadow-md space-y-3"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                  <p className="font-bold">Price: Rs. {product.price}</p>
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)} // Handle Add to Cart
                    className="mt-2 bg-primary text-white py-1 px-3 rounded-md hover:bg-secondary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
