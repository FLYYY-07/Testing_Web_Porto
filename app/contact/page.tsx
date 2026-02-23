"use client";
import { useState } from "react";

export default function ContactPage() {
  // State untuk menyimpan input user secara sementara
  const [submittedData, setSubmittedData] = useState<{ name: string; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setSubmittedData({
      name: formData.get("name") as string,
      message: formData.get("message") as string,
    });
  };

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Contact Me</h1>
      
      {/* Form Input */}
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 border p-6 rounded-xl border-gray-800">
        <div>
          <label className="block text-sm mb-1">Nama</label>
          <input 
            name="name"
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500" 
            placeholder="Masukkan nama kamu..."
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Pesan (Coba masukkan script XSS di sini)</label>
          <textarea 
            name="message"
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white h-32 focus:outline-none focus:border-blue-500"
            placeholder="Tulis sesuatu..."
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Kirim Pesan
        </button>
      </form>

      {/* Area Penampilan Data - Titik Serangan XSS */}
      {submittedData && (
        <div className="mt-10 p-6 border-t border-gray-800 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4 text-green-500">Pesan Terkirim!</h2>
          
          <div className="space-y-2">
            <p><strong>Dari:</strong> {submittedData.name}</p>
            
            <div className="p-4 bg-gray-900 rounded border border-gray-700">
              <strong>Pesan:</strong> 
              {/* VULNERABILITY POINT:
                Kita gunakan dangerouslySetInnerHTML agar script XSS kamu bisa tereksekusi.
              */}
              <div 
                className="text-gray-300 mt-2"
                dangerouslySetInnerHTML={{ __html: submittedData.message }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}