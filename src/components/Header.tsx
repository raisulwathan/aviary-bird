"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3 md:px-10 mx-auto">
        <div className="flex items-center gap-3">
          <button className="md:hidden relative w-6 h-6 flex flex-col mt-2   items-center" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 transform ${isOpen ? "rotate-45 absolute" : ""}`}></div>

            <div className={`w-6 h-0.5 bg-[#87CEEB] transition-all duration-300 mt-1 ${isOpen ? "opacity-0" : ""}`}></div>

            <div className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 mt-1 transform ${isOpen ? "-rotate-45 absolute" : ""}`}></div>
          </button>

          <div className="flex items-center gap-2">
            <Image src="/images/bird-logo.png" alt="Aviary Bird Logo" width={36} height={36} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">Aviary</span>
              <span className="text-sm font-medium">Bird</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/">Beranda</Link>
          <Link href="#">Lindungi Burung</Link>
          <Link href="#">Donasi</Link>
          <Link href="#">Pemantauan Live</Link>
        </nav>

        <div className="hidden md:flex space-x-2">
          <button className="px-3 py-1 text-sm border rounded-full hover:bg-black hover:text-white">Our Work</button>
          <button className="px-3 py-1 text-sm border rounded-full hover:bg-black hover:text-white">Get Involved</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 text-sm font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Lindungi Burung
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Donasi
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Pemantauan Live
            </Link>
          </nav>
          <div className="mt-3 space-y-2">
            <button className="w-full px-3 py-1 text-sm border rounded-full hover:bg-black hover:text-white">Our Work</button>
            <button className="w-full px-3 py-1 text-sm border rounded-full hover:bg-black hover:text-white">Get Involved</button>
          </div>
        </div>
      )}
    </header>
  );
}
