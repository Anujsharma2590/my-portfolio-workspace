import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 text-center border-t text-sm space-y-1 text-gray-500">
      <div className="flex justify-center divide-x">
        <Link href="/privacy" className="px-3">
          Privacy Policy
        </Link>
        <Link href="/about" className="px-3">
          About
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
