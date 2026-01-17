export default function Header() {
    return (
        <div className="flex min-h-screen">
        {/* SIDEBAR (Yang temanmu sebut Header) */}
        <aside className="w-64 bg-gray-100 p-10 border-r">
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-10"></div> {/* Circle Photo */}
            <nav className="flex flex-col space-y-4">
            <a href="#">About</a>
            <a href="#">Contact</a>
            {/* Tombol sosmed lainnya */}
            </nav>
        </aside>

        {/* BAGIAN KANAN */}
        <div className="flex-1 flex flex-col">
            {/* NAVBAR ATAS */}
            <nav className="h-16 border-b flex items-center px-10 space-x-8">
            <a href="#">Intro</a>
            <a href="#">Project</a>
            </nav>

            {/* ISI UTAMA */}
            <main className="p-10">
            <h1 className="text-4xl font-bold">Main Content Area</h1>
            </main>
        </div>
        </div>
    );
}