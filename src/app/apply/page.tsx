import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Added more icons


export default function Apply() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Before continuing to the application, please subscribe on these social media platforms.
      </h1>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4 mb-8">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl text-blue-600" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-blue-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-pink-500" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-4xl text-red-500" />
        </a>
      </div>

      {/* Continue Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-700">
        CONTINUE
      </button>

      {/* Admit Card Link */}
      <p className="text-center">
        Already applied?{" "}
        <Link href="/admit-card" className="text-blue-600 underline hover:text-blue-800">
          Get Admit Card
        </Link>
      </p>
    </div>
  );
}