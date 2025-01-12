import React from "react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const features = [
  {
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    title: "HTML",
    description:
      "Learn the foundational language for creating the structure of web pages.",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    title: "CSS",
    description:
      "Style your web pages with beautiful designs, layouts, and animations.",
  },
  {
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    title: "JavaScript",
    description:
      "Bring interactivity and dynamic functionality to your web applications.",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Explore Our Web Development Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
