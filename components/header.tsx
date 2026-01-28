import { 
  GoArrowRight,
  GoPerson,
  GoPeople,
  GoMail
} from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { FcOk } from "react-icons/fc"; 
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex min-h-screen fixed">
      {/* SIDEBAR  */}
      <aside className="w-64 bg-[#224 71.4% 4.1%] text-white p-6 flex flex-col justify-between">
        <div>
          {/* 1. Circle Photo dengan sedikit hiasan */}
          <div className="relative w-30 h-30 overflow-hidden rounded-full mb-1 border-2 border-gray-500 shadow-lg animate-bounce" style={{alignItems: 'center'}}>
            <Image src={`/f1-alonso.png`} alt={`test`}
                fill
                style={{
                    objectFit:'cover'
                }}
            />
          </div>
          <div style={{alignItems: 'left'}}></div>
          <span className="text-2xl font-bold mb-20 block">My Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z "  />
            </svg>
          </span>

          {/* 2. Navigasi dengan Efek Hover */}
          <nav className="flex flex-col space-y-2">
            
            {/* Contoh Link dengan Animasi */}
            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white group
            ">
              <GoPerson size={20}/> 
              <span className="ml-1">About</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <AiFillGithub size={20} />
              <span className="ml-1">Git</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <GoPeople size={20} />
              <span className="ml-1">Social Media</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <GoMail size={20} />
              <span className="ml-1">Contact</span>
              <GoArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </nav>
        </div>

        {/* 3. Copyright di bagian paling bawah */}
        <div className="text-[10px] text-gray-500 mt-auto pb-85 pt-6 border-t border-gray-800/50">
          <p>COPYRIGHT © 2026</p>
          <p>{"insert the name"}. All rights reserved.</p>
        </div>
      </aside>
    </div>
  );
}