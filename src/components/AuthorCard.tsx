import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const AuthorCard = () => {
  return (
    <div className="bg-gray-800 p-6 my-16 mt-32 rounded-lg shadow-lg max-w-xs mx-auto text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src="/authorimage.jpg"
          alt={`avatar`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">Yousuf</h3>
      <p className="text-gray-300 text-sm mb-4">
        A passionate web developer with a love for learning and creating amazing
        web applications.
      </p>

      <div className="flex justify-center space-x-4">
        <Link
          href="https://www.facebook.com/profile.php?id=100058908816483"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors"
        >
          <FaFacebook className="text-2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          href="https://github.com/ShaikhYousuf39"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors"
        >
          <FaGithub className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
