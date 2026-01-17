export default function Header() {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR (Yang temanmu sebut Header) */}
      <aside className="w-64 bg-[#121212] text-white p-6 border-r border-gray-800 flex flex-col justify-between">
        <div>
          {/* 1. Circle Photo dengan sedikit hiasan */}
          <div className="w-20 h-20 bg-gray-600 rounded-full mb-10 border-2 border-gray-500 shadow-lg"></div>

          {/* 2. Navigasi dengan Efek Hover */}
          <nav className="flex flex-col space-y-2">
            
            {/* Contoh Link dengan Animasi */}
            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white group
            ">
              <span>About</span>
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <span>Git</span>
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <span>Social Media</span>
            </a>

            <a href="#" className="
              flex items-center px-4 py-3 rounded-xl
              bg-transparent transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:scale-105 active:scale-95
              text-gray-400 hover:text-white
            ">
              <span>Contact</span>
            </a>
          </nav>
        </div>

        {/* 3. Copyright di bagian paling bawah */}
        <div className="text-[10px] text-gray-500 mt-auto pt-10 border-t border-gray-800">
          <p>COPYRIGHT © 2026</p>
          <p>Katharina. All rights reserved.</p>
        </div>
      </aside>
    </div>
  );
}