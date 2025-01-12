import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-800 text-white py-8 pt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 Yousuf. All rights reserved.</p>
          <div className="space-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=100058908816483"
              className="hover:text-blue-400"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              href="https://github.com/ShaikhYousuf39"
              className="hover:text-blue-400"
              target="_blank"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/"
              className="hover:text-blue-400"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
