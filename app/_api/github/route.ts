// Define types for the GitHub Response
interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
        totalPullRequestReviewContributions: number;
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
}

export default async function GETGithub() {
  const username: string = "FLYYY-07";
  const token: string | undefined = process.env.GITHUB_TOKEN;
  const today = new Date();
  const todayString = today.toISOString();
  today.setFullYear(today.getFullYear() - 1);
  const fromString = today.toISOString();

  // 1. Guard clause: Check if token exists
  if (!token) {
    console.error("GITHUB_TOKEN is not set in environment variables.");
    return null;
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalPullRequestReviewContributions
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
        from: fromString,
        to: toString
      }),
      cache:'no-store',
      // Next.js specific: Revalidate cache every hour
      next: { revalidate: 3600 } 
    });

    const result: GitHubResponse = await response.json();

    // 2. Return the actual data object
    return result.data.user.contributionsCollection;

  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}