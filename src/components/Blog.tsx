import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

const BlogCards = () => {
  const blogs = [
    {
      id:1,
      title: "Introduction to HTML",
      description:
        "HTML stands for HyperText Markup Language. It is the standard language for creating web pages. In this post, we’ll explore the basics of HTML...",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      link: "/intro-to-html",
    },
    {
      id:2,
      title: "Introduction to CSS",
      description:
        "CSS stands for Cascading Style Sheets. It is used to style HTML documents. In this post, we’ll dive into the basics of CSS...",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      link: "/intro-to-css",
    },
    {
      id:3,
      title: "Introduction to JavaScript",
      description:
        "JavaScript is a programming language that adds interactivity to websites. In this post, we’ll cover the basics of JavaScript...",
      icon: <FaJs className="text-yellow-500 text-5xl" />,
      link: "/intro-to-js",
    },
    {
      id:4,
      title: "Getting Started with React",
      description:
        "React is a JavaScript library for building user interfaces. Learn the basics of React and how it simplifies front-end development...",
      icon: <FaReact className="text-blue-400 text-5xl" />,
      link: "/intro-to-react",
    },
    {
      id:5,
      title: "Introduction to Next.js",
      description:
        "Next.js is a React framework for production-grade web applications. Discover the power of server-side rendering and static site generation...",
      icon: <SiNextdotjs className="text-gray-300 text-5xl" />,
      link: "/intro-to-nextjs",
    },
    {
      id:6,
      title: "Using Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for creating modern, responsive designs. Learn how to use Tailwind for rapid styling...",
      icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
      link: "/intro-to-tailwind",
    },
  ];

  return (
    <section id="blog" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Our Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{blog.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="inline-block text-blue-400 hover:bg-blue-400 hover:text-white border-2 border-blue-400 px-4 py-2 rounded-md transition-all"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
