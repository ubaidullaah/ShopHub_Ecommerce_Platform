import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import DarkMode from "./DarkMode";
import { MdShoppingCart } from "react-icons/md"; // Changed icon

const Menu = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Shoes",
    link: "/shoes",
  },
  {
    id: 2,
    name: "Pants",
    link: "/pants",
  },
  {
    id: 3,
    name: "Shirts",
    link: "/shirts",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Best Selling",
    link: "/products",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const navigate = useNavigate(); // Create a navigate function

  // Function to handle the Go to Cart button click
  const handleGoToCart = () => {
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-primary to-secondary py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl flex items-center gap-2 text-white">
            <MdShoppingCart size="30" />
            ShopHub
          </Link>

          {/* Search bar */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 py-2 px-4
                text-sm focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-slate-800 dark:text-white"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 group-hover:text-primary" />
            </div>

            {/* Order button */}
            <button
              onClick={handleOrderPopup}
              className="bg-white text-primary py-2 px-6 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all duration-200 hover:bg-primary hover:text-white"
            >
              Order Now
              <FaCartShopping className="text-xl" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white dark:bg-slate-800 py-3 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex items-center gap-6 text-lg">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-primary transition-all duration-200"
                >
                  {data.name}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 text-gray-800 dark:text-gray-200 px-4 py-2 hover:text-primary transition-all duration-200"
              >
                Trending Products
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              {/* Dropdown menu */}
              <div className="absolute left-0 top-full hidden group-hover:block w-[200px] mt-2 bg-white dark:bg-slate-800 shadow-lg rounded-md">
                <ul className="p-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-all duration-200"
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Go to Cart button - positioned to the right */}
          <button
            onClick={handleGoToCart}
            className="bg-primary text-white py-1 px-3 rounded-md flex items-center gap-1 font-semibold shadow-lg transition-all duration-200 hover:bg-secondary ml-auto" // Added ml-auto to push it to the right
          >
            Go to Cart
            <MdShoppingCart className="text-lg" /> {/* Adjusted icon size */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
