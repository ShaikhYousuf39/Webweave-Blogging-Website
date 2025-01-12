"use client";
import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaCode, FaEdit, FaLaptopCode } from "react-icons/fa"; 
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface BlogPost {
  title: string;
  content: string;
  date: string;
  codeExample: string;
  keyFeatures: string[];
  bestEditor: string;
  link?: string;
  icon?: JSX.Element;
}

const BlogPost = ({ params }: { params: { id: string } }) => {
  const blogPost: Record<number, BlogPost> = {
    1: {
      title: "What is HTML?",
      content:
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
      date: "25 December 2024",
      codeExample: `
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
      `,
      keyFeatures: [
        "Defines web structure",
        "Supports multimedia elements like images and videos",
        "Enables linking between pages",
      ],
      bestEditor: "VS Code",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: <FaHtml5 className="text-6xl text-orange-500" />,
    },
    2: {
      title: "What is CSS?",
      content:
        "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
      date: "25 December 2024",
      codeExample: `
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}
      `,
      keyFeatures: [
        "Customizes web appearance",
        "Supports animations and transitions",
        "Responsive design with media queries",
      ],
      bestEditor: "VS Code with Live Server extension",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <FaCss3Alt className="text-6xl text-blue-500" />,
    },
    3: {
      title: "What is JavaScript?",
      content:
        "JavaScript is a versatile programming language that powers interactive features on web pages and supports full-stack development.",
      date: "25 December 2024",
      codeExample: `
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
      `,
      keyFeatures: [
        "Client-side and server-side capabilities",
        "Supports event-driven programming",
        "Wide array of libraries and frameworks",
      ],
      bestEditor: "VS Code with ESLint and Prettier extensions",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <FaJs className="text-6xl text-yellow-500" />,
    },
    4: {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM.",
      date: "25 December 2024",
      codeExample: `
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the world of components.</p>
    </div>
  );
}

export default App;
      `,
      keyFeatures: [
        "Component-based architecture",
        "Virtual DOM for performance optimization",
        "Rich ecosystem with hooks and context",
      ],
      bestEditor: "VS Code with React Developer Tools",
      link: "https://reactjs.org/docs/getting-started.html",
      icon: <FaReact className="text-6xl text-cyan-500" />,
    },
    5: {
      title: "What is Next.js?",
      content:
        "Next.js is a React-based framework for building scalable web applications with server-side rendering and static site generation.",
      date: "25 December 2024",
      codeExample: `
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
      `,
      keyFeatures: [
        "Server-side rendering and static site generation",
        "API routes for backend logic",
        "Automatic routing and code splitting",
      ],
      bestEditor: "VS Code with Next.js snippets extension",
      link: "https://nextjs.org/docs",
      icon: <SiNextdotjs className="text-6xl text-gray-300" />,
    },
    6: {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS.",
      date: "25 December 2024",
      codeExample: `
<div class="bg-gray-800 text-white p-4 rounded">
  <h1 class="text-xl font-bold">Hello, Tailwind!</h1>
  <p>This is a sample card using Tailwind CSS classes.</p>
</div>
      `,
      keyFeatures: [
        "Utility-first CSS framework",
        "Highly customizable with configuration files",
        "Built-in responsive design utilities",
      ],
      bestEditor: "VS Code with Tailwind IntelliSense extension",
      link: "https://tailwindcss.com/docs",
      icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
    },
  };

  const id = params.id;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      const postId = Number(id);
      const foundPost = blogPost[postId];
      setPost(foundPost);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!post) {
    return <div className="text-center py-10 text-gray-200">Post not found!</div>;
  }

  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-900 min-h-screen p-8 font-sans text-gray-100">
      <div
        className={`max-w-3xl mx-auto bg-slate-700 shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${poppins.className}`}
      >
        <div className="p-8">
          <div className="flex justify-center mb-4">
            <div className="text-center">{post.icon}</div>
          </div>

          <h1 className="text-4xl font-semibold text-blue-300 text-center">{post.title}</h1>
          <p className="text-sm text-gray-400 text-center mb-4">{post.date}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{post.content}</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
            <code>{post.codeExample}</code>
          </pre>
          <div className="mt-6">
            <h2 className="text-xl text-blue-300 mb-2 flex items-center">
              <FaCode className="mr-2 text-blue-400" />
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {post.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl text-blue-300 mb-2 flex items-center">
              <FaEdit className="mr-2 text-blue-400" />
              Best Editor
            </h2>
            <p className="text-gray-300">
              <FaLaptopCode className="inline mr-2 text-gray-400" />
              {post.bestEditor}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link href={post.link || "#"} passHref>
            <button className="px-6 py-3 mb-3 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out shadow-md">
              Documentation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
