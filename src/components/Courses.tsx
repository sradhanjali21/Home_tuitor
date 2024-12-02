import React, { useState } from "react";

const CourseData = [
  {
    id: 1,
    name: "6th-12th Classes",
    description:
      "Comprehensive tutoring for students from 6th to 12th grade in subjects like Physics, Chemistry, Mathematics, and more.",
  },
  {
    id: 2,
    name: "ICSE Curriculum",
    description:
      "In-depth tutoring for students following the ICSE syllabus, covering a range of subjects with a focus on building strong fundamentals.",
  },
  {
    id: 3,
    name: "CBSE Curriculum",
    description:
      "Expert coaching for CBSE students, with personalized lesson plans and practice material to excel in board exams and competitions.",
  },
  {
    id: 4,
    name: "Physics",
    description:
      "Physics tutoring for school and college-level students, focusing on problem-solving, theory, and practical application of concepts.",
  },
  {
    id: 5,
    name: "Chemistry",
    description:
      "Learn Chemistry in-depth with clear explanations, experiments, and tips to ace exams, both theoretical and practical.",
  },
  {
    id: 6,
    name: "Graduation Courses",
    description:
      "Specialized coaching for undergraduate students in subjects related to science, engineering, and other graduate courses.",
  },
];

const Courses = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    if (currentSlide < CourseData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to first slide
    }
  };

  // Function to handle previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(CourseData.length - 1); // Loop to last slide
    }
  };

  return (
    <div className="py-10 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-gray-600 text-lg">
            Offering personalized coaching for students from school to graduation level.
          </p>
        </div>

        {/* Courses Slider Section */}
        <div className="relative">
          {/* Slide Content */}
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {CourseData.map((course) => (
                <div
                  key={course.id}
                  className="px-4 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {course.name}
                      </h2>
                      <p className="text-gray-500 mt-4">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
          >
            &gt;
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {CourseData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
