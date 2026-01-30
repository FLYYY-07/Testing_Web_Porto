import { GitHubCalendar } from 'react-github-calendar';
import GETGithub from '../_api/github/route';

export default async function DashboardPage() {
  const data = await GETGithub();

  const infos = [
    { title: 'Total Commits', data: data?.totalCommitContributions ?? 0},
    { title: 'Pull Requests', data: data?.totalPullRequestContributions ?? 0},
    { title: 'Issues', data: data?.totalIssueContributions ?? 0},
    { title: 'Reviews', data: data?.totalPullRequestReviewContributions ?? 0}
  ]
  
  return (
    <div className="p-8 text-white bg-[#0d1117] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">GitHub Contributions 2026</h1>
      
      {/* Bagian Statistik Angka (Filter Tahun 2026) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {infos.map((keys) => (
          <div key={keys.title} className="bg-[#161b22] p-6 rounded-xl border border-gray-800 text-center">
            <p className="text-gray-400 text-sm mb-1">{keys.title}</p>
            <p className="text-3xl font-bold text-yellow-400">{keys.data}</p>
          </div>
        ))}
    </div>

      {/* Bagian Grafik Kotak Hijau (Tahun 2026) */}
      <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 overflow-hidden">
        <p className="text-gray-400 mb-4 text-sm text-center">Aktivitas kontribusi kamu di tahun 2026</p>
        <div className="flex justify-center">
          <GitHubCalendar 
            username="FLYYY-07" 
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </div>
    </div>
  );
}