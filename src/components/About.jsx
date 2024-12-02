import React from "react";
import BannerImg from "../assets/images/books.png"; // Replace with a suitable about image.
import { MdSecurity } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
// import BgImg from "../assets/images/education_background.jpg"; // Replace with a suitable background.

// const bgImage = {
//   backgroundImage: `url(${BgImg})`,
//   backgroundColor: "#f8f9fa", // Light theme for education.
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const About = () => {
  return (
    <>
      <span id="about"></span>
      <div>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="Tutor"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.2)]"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive text-brandDark"
                >
                  About Home Tuition by <span className="text-primary">John Smith</span>
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-700 tracking-wide leading-6"
                >
                  John Smith is a highly experienced tutor specializing in Mathematics, 
                  Science, and Coding. With a passion for teaching and a tailored 
                  approach, John has helped hundreds of students excel academically and 
                  achieve their goals.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <MdSecurity className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                      <span>Trusted Educator</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaBookReader className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                      <span>Comprehensive Lessons</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiTeacher className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Personalized Tutoring</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-brandDark">
                      Our Mission
                    </h1>
                    <p className="text-sm text-gray-700">
                      To empower students with the tools and confidence to excel 
                      academically and personally through personalized, high-quality tutoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
