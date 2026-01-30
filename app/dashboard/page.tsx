"use client"; // Wajib ditambahkan agar animasi bisa berjalan

import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useEffect, useState } from 'react';
import GETGithub from '../_api/github/route';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  // Mengambil data GitHub saat pertama kali masuk
  useEffect(() => {
    const fetchData = async () => {
      const result = await GETGithub();
      setData(result);
    };
    fetchData();
  }, []);

  const infos = [
    { title: 'Total Commits', data: data?.totalCommitContributions ?? 0},
    { title: 'Pull Requests', data: data?.totalPullRequestContributions ?? 0},
    { title: 'Issues', data: data?.totalIssueContributions ?? 0},
    { title: 'Reviews', data: data?.totalPullRequestReviewContributions ?? 0}
  ]
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold py-3">GitHub Contributions 2026</h1>

      <div className='py-5 gap-5 flex flex-col'>
        {/* Bagian Statistik Angka dengan Animasi Fade In & Up */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {infos.map((keys, index) => (
            <motion.div 
              key={keys.title}
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah & transparan
              animate={{ opacity: 1, y: 0 }}    // Berakhir di posisi asli
              transition={{ delay: index * 0.1, duration: 0.5 }} // Muncul bergantian
              className="bg-gray-950 p-6 rounded-xl border border-gray-800 text-center"
            >
              <p className="text-gray-200 text-sm">{keys.title}</p>
              <p className="text-3xl font-bold text-yellow-400">{keys.data}</p>
            </motion.div>
          ))}
        </div>

        {/* Bagian Grafik Kotak Hijau dengan Animasi "Puzzle Scale" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }} // Efek puzzle belum fokus
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}    // Rapi & Tajam
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="bg-gray-950 p-2 rounded-xl border border-gray-800 overflow-hidden"
        >
          <p className="py-3 text-gray-200 text-sm text-center">Year-long activities</p>
          <div className="flex justify-center gap-2">
            <GitHubCalendar 
              username="FLYYY-07" 
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}