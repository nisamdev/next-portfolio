"use client";

import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="/skills"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/mail2nisam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/nisamudheen-kalampulan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              LinkedIn
            </Link>
          </div>

          {/* Copyright Notice */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} n.kalampulan. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};