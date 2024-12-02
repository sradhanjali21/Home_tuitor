import React from "react";
import Exam_Preparation from "../assets/images/ExamPreparation.png";
import Personalized_Tutoring from "../assets/images/tutoring.png"; 
import SkillDevelopment from "../assets/images/skilldevelopement.png"; 

// Replace with relevant images for services.
const ServicesData = [
  {
    id: 1,
    img: Personalized_Tutoring,
    name: "Personalized Tutoring",
    description:
      "Tailored lessons to meet individual learning needs, ensuring every student progresses confidently and effectively.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Exam_Preparation,
    name: "Exam Preparation",
    description:
      "Comprehensive coaching for board and competitive exams, including detailed practice sessions and study plans.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: SkillDevelopment,
    name: "Skill Development",
    description:
      "Interactive sessions to develop coding, analytical, and problem-solving skills for students of all levels.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-gray-50">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Our Educational Services
            </h1>
            <p className="text-gray-600 mt-4">
              Empowering students through customized lessons and skill-building sessions.
            </p>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
             
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[80px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] h-32 block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
