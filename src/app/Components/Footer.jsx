"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

   
        <div>
          <h2 className="text-2xl font-bold text-amber-400">
            BookBorrow
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover, borrow, and enjoy books anytime. Your reading journey starts here.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <Link href="#">
              <FaFacebook className="hover:text-amber-400 cursor-pointer" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-amber-400 cursor-pointer" />
            </Link>
            <Link href="#">
              <FaGithub className="hover:text-amber-400 cursor-pointer" />
            </Link>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>

          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-amber-400" />
            support@bookborrow.com
          </p>

          <p className="text-sm mt-2">
            Kaliganj, Bangladesh
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BookBorrow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;