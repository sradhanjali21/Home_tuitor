import React from "react";
import HeroPng from "../assets/images/Lesson-rafiki.svg"; // Replace with an appropriate image for your tuition service.

const Hero = () => {
  return (
    <>
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              Learn from{" "}
              <p
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
              >
                 John Smith
              </p>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg sm:text-xl text-gray-300"
            >
            I specialize in Mathematics, Science, and Coding with
            personalized lessons tailored to help students succeed.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Contact Us
                </button>
              </div>
          </div>
          {/* Image section */}
          <div
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <img
              src={HeroPng}
              alt="tutor image"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto"
            />
            <div className="bg-gradient-to-r from-primary to-secondary px-3 py-2  rounded-xl absolute top-10 left-10">
              <h1 className="text-white">Experienced Educator</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary px-3 py-2 rounded-xl absolute bottom-3 right-10">
              <h1 className="text-white">Personalized Approach</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Hero;
