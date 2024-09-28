import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Img1 from "../../assets/shoes/shoes1.jpg";
import Img2 from "../../assets/shoes/shoes2.jpg";
import Img3 from "../../assets/shoes/shoes3.jpg";
import Img4 from "../../assets/shoes/shoes4.jpg";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../../App"; // Access addToCart from context
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Shoes data with prices
const ShoesData = [
  {
    id: 1,
    img: Img1,
    title: "Running Shoes",
    rating: 4.9,
    color: "Black",
    aosDelay: "0",
    category: "best-selling",
    price: 2500,
  },
  {
    id: 2,
    img: Img2,
    title: "Casual Sneakers",
    rating: 4.7,
    color: "White",
    aosDelay: "200",
    category: "regular",
    price: 2000,
  },
  {
    id: 3,
    img: Img3,
    title: "Soft Sneakers",
    rating: 4.5,
    color: "Brown",
    aosDelay: "400",
    category: "best-selling",
    price: 3000,
  },
  {
    id: 4,
    img: Img4,
    title: "Sports Shoes",
    rating: 4.8,
    color: "Pink",
    aosDelay: "600",
    category: "regular",
    price: 2200,
  },
];

// Shoes Component
const Shoes = ({ category }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filter shoes based on category (best-selling or regular)
  const filteredShoes =
    category === "best-selling"
      ? ShoesData.filter((shoe) => shoe.category === "best-selling")
      : ShoesData;

  // Handle Add to Cart
  const handleAddToCart = (shoe) => {
    addToCart(shoe);

    // Show toast notification with product details and "Go to Cart" button
    toast(
      <div>
        <p>
          <strong>{shoe.title}</strong> (Price: Rs. {shoe.price}) has been added to your cart!
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
              ? "Best Selling Shoes for you"
              : "Top Selling Shoes for you"}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {category === "best-selling" ? "Best Selling" : "Shoes Collection"}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our latest collection of stylish and comfortable shoes.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Product Cards */}
            {filteredShoes.map((shoe) => (
              <div
                data-aos="fade-up"
                data-aos-delay={shoe.aosDelay}
                key={shoe.id}
                className="border p-4 rounded-lg shadow-md space-y-3"
              >
                <img
                  src={shoe.img}
                  alt={shoe.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{shoe.title}</h3>
                  <p className="text-sm text-gray-600">{shoe.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{shoe.rating}</span>
                  </div>
                  <p className="font-bold">Price: Rs. {shoe.price}</p>
                  <button
                    onClick={() => handleAddToCart(shoe)} // Handle Add to Cart
                    className="mt-2 bg-primary text-white py-1 px-3 rounded-md hover:bg-secondary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
