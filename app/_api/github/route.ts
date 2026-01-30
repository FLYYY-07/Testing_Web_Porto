export default async function GETGithub() {
  // Menggunakan username kamu: FLYYY-07
  const username = "FLYYY-07"; 
  
  // Mengatur rentang waktu khusus tahun 2026 saja
  const today = new Date();
  const to = today.toISOString();
  today.setFullYear(today.getFullYear() - 1);
  const from = today.toISOString();


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