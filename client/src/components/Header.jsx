import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#1E3A8A] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl text-white ">
            CarRental
          </h1>
        </Link>
        {/* todo */}

        <ul className="flex items-center gap-3 text-black">
          <Link href="/" className="">
            <li className="hidden md:inline text-[#edf0f5] hover:underline hover:text-[#FACC15]">
              Home
            </li>
          </Link>

          <Link href="/about" className="">
            <li className="hidden md:inline text-[#edf0f5] hover:underline hover:text-[#FACC15]">
              About
            </li>
          </Link>

          <Link href="/auth/sign-In">
            <li className="hidden md:inline text-[#edf0f5] hover:underline hover:text-[#FACC15]">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
