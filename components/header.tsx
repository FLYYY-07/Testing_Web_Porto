import { GoArrowRight } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { GoMail } from "react-icons/go";

export default function Header() {
  return (
    <div className="flex min-h-screen fixed">
      {/* SIDEBAR  */}
      <aside className="w-64 bg-[#224 71.4% 4.1%] text-white p-6 flex flex-col justify-between">
        <div>
          {/* 1. Circle Photo dengan sedikit hiasan */}
          <div className="w-20 h-20 bg-gray-600 rounded-full mb-10 border-2 border-gray-500 shadow-lg animate-bounce"></div>
          <div style={{alignItems: 'left'}}></div>

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
          <p>Katharina. All rights reserved.</p>
        </div>
      </aside>
    </div>
  );
}