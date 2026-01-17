import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || "your-username";
  const from = searchParams.get('from'); // e.g., 2023-01-01T00:00:00Z
  const to = searchParams.get('to');     // e.g., 2023-12-31T23:59:59Z

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: { username, from, to },
    }),
  });

  const result = await response.json();
  return NextResponse.json(result.data.user.contributionsCollection);
}