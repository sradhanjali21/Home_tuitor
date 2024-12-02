import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Home Tuition</h2>
          <p className="text-gray-400">
            Providing quality education right at your doorstep. Learn from the
            best tutors in your area.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/courses" className="hover:text-gray-300">
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Phone: +91 12345 67890</p>
          <p className="text-gray-400 mb-2">Email: info@hometuition.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Home Tuition. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
