import { GitHubCalendar } from 'react-github-calendar';
import GETGithub from '../_api/github/route';

export default async function DashboardPage() {
  const data = await GETGithub();

  return (
    <div className="p-8 text-white bg-[#0d1117] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">GitHub Contributions 2026</h1>
      
      {/* Bagian Statistik Angka (Filter Tahun 2026) */}
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

      {/* Bagian Grafik Kotak Hijau (Tahun 2026) */}
      <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 overflow-hidden">
        <p className="text-gray-400 mb-4 text-sm text-center">Aktivitas kontribusi kamu di tahun 2026</p>
        <div className="flex justify-center">
          <GitHubCalendar 
            username="FLYYY-07" 
            year={2026} // Menampilkan grafik hanya tahun 2026
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </div>
    </div>
  );
}