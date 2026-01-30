import { GitHubCalendar } from 'react-github-calendar';
import GETGithub from '../_api/github/route';

export default async function DashboardPage() {
  const data = await GETGithub();
  console.log("GitHub API Response:", data);

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
        {/* Bagian Statistik Angka (Filter Tahun 2026) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {infos.map((keys) => (
            <div key={keys.title} className="bg-gray-950 p-6 rounded-xl border border-gray-800 text-center">
              <p className="text-gray-200 text-sm">{keys.title}</p>
              <p className="text-3xl font-bold text-yellow-400">{keys.data}</p>
            </div>
          ))}
        </div>

        {/* Bagian Grafik Kotak Hijau (Tahun 2026) */}
        <div className="bg-gray-950 p-2 rounded-xl border border-gray-800 overflow-hidden">
          <p className="py-3 text-gray-200 text-sm text-center">Year-long activities</p>
          <div className="flex justify-center gap-2">
            <GitHubCalendar 
              username="FLYYY-07" 
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}