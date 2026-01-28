import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // PERBAIKAN: Menggunakan username kamu sendiri sebagai default
  const username = searchParams.get('username') || "FLYYY-07"; 
  
  // PERBAIKAN: Menambahkan default range waktu agar tidak kosong (0)
  const from = searchParams.get('from') || "2025-01-01T00:00:00Z"; 
  const to = searchParams.get('to') || "2026-12-31T23:59:59Z";

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

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        // Mengambil GITHUB_TOKEN dari file .env.local kamu
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username, from, to },
      }),
    });

    const result = await response.json();

    // Proteksi jika data user tidak ditemukan atau token bermasalah
    if (!result.data || !result.data.user) {
      return NextResponse.json({ error: "User not found or Invalid Token" }, { status: 404 });
    }

    return NextResponse.json(result.data.user.contributionsCollection);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}