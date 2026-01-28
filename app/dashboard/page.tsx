import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

async function getGithubData() {
  const username = "satriabahari";
  // Mengambil data dari setahun yang lalu agar muncul angka 600+
  const from = "2026-01-01T00:00:00Z";
  const to = "2026-12-31T23:59:59Z";

  // Memastikan URL yang dipanggil menyertakan semua parameter
  const url = `http://localhost:3000/_api/github?username=${username}&from=${from}&to=${to}`;
  
  const res = await fetch(url, {
    cache: 'no-store' // Pakai ini dulu agar tidak nyangkut di cache lama
  });
  
  if (!res.ok) return null;
  const result = await res.json();
  return result;
}

export default async function DashboardPage() {
  const data = await getGithubData();

  return (
    <div className="p-8 text-white bg-[#0d1117] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">GitHub Contributions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-1">Total Commits</p>
          <p className="text-3xl font-bold text-yellow-400">{data?.totalCommitContributions ?? 0}</p>
        </div>
        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-1">Pull Requests</p>
          <p className="text-3xl font-bold text-yellow-400">{data?.totalPullRequestContributions ?? 0}</p>
        </div>
        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-1">Issues</p>
          <p className="text-3xl font-bold text-yellow-400">{data?.totalIssueContributions ?? 0}</p>
        </div>
        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-1">Reviews</p>
          <p className="text-3xl font-bold text-yellow-400">{data?.totalPullRequestReviewContributions ?? 0}</p>
        </div>
      </div>

      <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800">
        <div className="flex justify-center">
          <GitHubCalendar username="satriabahari" theme={{ dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'] }} />
        </div>
      </div>
    </div>
  );
}