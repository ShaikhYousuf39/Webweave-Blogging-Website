"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(
        date.toLocaleDateString("en-US", options)
      );
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <header className="bg-slate-800 py-7 px-3">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center ">
          <div className="text-white">
            <span>{currentDateTime}</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-slate-300 justify-center">
            <Link
              href="/"
              className="mr-5 hover:text-white transition-colors duration-500 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="mr-5 hover:text-white transition-colors duration-500 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="#blog"
              className="mr-5 hover:text-white transition-all duration-500 hover:scale-110"
            >
              Blog
            </Link>
            <Link
              href="#comment"
              className="mr-5 hover:text-white  transition-all duration-500 hover:scale-110"
            >
              Comment
            </Link>
          </nav>
          <Link href="https://portfolio-five-phi-74.vercel.app/" target="_blank" className="md:mt-0 mt-5 bg-slate-800 transition-all duration-300 text-slate-400 border hover:text-gray-800 hover:bg-slate-300 hover:scale-110 border-gray-500 py-2 px-5 ">
            Visit Website
          </Link>
        </div>
      </header>
    </div>
  );
}
