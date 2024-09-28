import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Contact Us",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container mx-auto py-8">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-10">
          {/* Company details */}
          <div className="py-4 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> */}
              ShopMe
            </h1>
            <p className="text-gray-300">
              Your one-stop shop for all your needs. We strive to provide quality products and excellent service.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-4 px-4">
                <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-4 px-4">
                <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl transition-transform transform hover:scale-125" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-3xl transition-transform transform hover:scale-125" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-3xl transition-transform transform hover:scale-125" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+92 3267875889</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
