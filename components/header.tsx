import { 
  GoArrowRight,
  GoPerson,
  GoPeople,
  GoMail
} from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { FcOk } from "react-icons/fc"; 

export default function Header() {
  return (
    <div className="flex min-h-screen fixed">
      {/* SIDEBAR  */}
      <aside className="w-64 bg-[#224 71.4% 4.1%] text-white p-6 flex flex-col justify-between">
        <div>
          {/* 1. Circle Photo dengan sedikit hiasan */}
          <div className="w-30 h-30 bg-gray-600 rounded-full mb-1 border-2 border-gray-500 shadow-lg animate-bounce" style={{alignItems: 'center'}}></div>
          <div style={{alignItems: 'left'}}></div>
          <span className="text-2xl font-bold mb-20 block">My Portfolio <FcOk className="color-blue"/></span>

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