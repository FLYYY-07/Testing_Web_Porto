import { 
  GoArrowRight,
  GoPerson,
  GoPeople,
  GoMail
} from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link"; // Wajib diimport untuk navigasi Next.js

export default function Header() {
  return (
    <div className="flex min-h-screen fixed">
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between border-r border-gray-800/50">
        <div>
          {/* 1. Circle Photo */}
          <div className="relative w-24 h-24 overflow-hidden rounded-full mb-6 border-2 border-gray-500 shadow-lg mx-auto">
            <Image 
                src="/f1-alonso.png" 
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
            />
          </div>

          <span className="text-2xl font-bold mb-10 flex items-center gap-2 justify-center">
            My Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </span>

          {/* 2. Navigasi */}
          <nav className="flex flex-col space-y-2">
            
            <Link href="/about" className="flex items-center px-4 py-3 rounded-xl bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105 text-gray-400 hover:text-white group">
              <GoPerson size={20}/> 
              <span className="ml-3">About</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href="/git" className="flex items-center px-4 py-3 rounded-xl bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105 text-gray-400 hover:text-white group">
              <AiFillGithub size={20} />
              <span className="ml-3">Git</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href="/social" className="flex items-center px-4 py-3 rounded-xl bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105 text-gray-400 hover:text-white group">
              <GoPeople size={20} />
              <span className="ml-3">Social Media</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Link Contact yang mengarah ke folder app/contact/page.tsx */}
            <Link href="/contact" className="flex items-center px-4 py-3 rounded-xl bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105 text-gray-400 hover:text-white group">
              <GoMail size={20} />
              <span className="ml-3">Contact</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </nav>
        </div>

        {/* 3. Copyright (Sudah disesuaikan tingginya) */}
        <div className="text-[10px] text-gray-500 mt-auto pb-12 pt-6 border-t border-gray-800/50">
          <p className="tracking-widest uppercase font-semibold">COPYRIGHT © 2026</p>
          <p className="mt-1">Katharina. All rights reserved.</p>
        </div>
      </aside>
    </div>
  );
}