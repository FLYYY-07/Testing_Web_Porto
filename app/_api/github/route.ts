export default async function GETGithub() {
  // Menggunakan username kamu: FLYYY-07
  const username = "FLYYY-07"; 
  
  // Mengatur rentang waktu khusus tahun 2026 saja
  const from = "2026-01-01T00:00:00Z";
  const to = "2026-12-31T23:59:59Z";

  // Memastikan URL memanggil parameter yang sudah kita isi di atas
  const url = `http://localhost:3000/_api/github?username=${username}&from=${from}&to=${to}`;
  
  try {
    const res = await fetch(url, {
      cache: 'no-store' // Memastikan data selalu fresh
    });
    
    if (!res.ok) return null;
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Gagal mengambil data GitHub:", error);
    return null;
  }
}