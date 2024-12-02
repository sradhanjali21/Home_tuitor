import React from "react";
import Logo from "../assets/images/logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",   
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about",
  },
  {
    id: 3,
    name: "Courses",
    link: "/courses",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md  text-white">
        <div className=" py-2 px-6">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="/"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Learnest
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white font-semibold hover:text-[#2C3E50] duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
