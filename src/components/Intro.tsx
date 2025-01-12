import React from "react";

const IntroductionSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to the World of Web Development
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Dive into the exciting journey of creating websites with HTML, CSS, and JavaScript. 
          Whether you&apos;re a beginner or looking to enhance your skills, our platform provides 
          resources, tutorials, and guides to help you master the art of web development. 
          Let&apos;s build something amazing together!
        </p>
        <a
          href="#features"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-all"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default IntroductionSection;
