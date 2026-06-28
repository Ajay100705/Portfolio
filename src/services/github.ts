export interface Language {
  name: string;
  color: string;
  percent: number;
}

const GITHUB_USERNAME = "Ajay100705";

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  C: "#555555",
  "C++": "#F34B7D",
  Shell: "#89E051",
};

function calculateLanguages(repos: any[]): Language[] {
  const counts: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language) {
      counts[repo.language] =
        (counts[repo.language] || 0) + 1;
    }
  });

  const total = Object.values(counts).reduce(
    (sum, count) => sum + count,
    0
  );

  return Object.entries(counts)
    .map(([name, count]) => ({
      name,
      color: languageColors[name] || "#8A8A8A",
      percent: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.percent - a.percent);
}

export async function getGitHubData() {
  const userResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );

  const user = await userResponse.json();

  const reposResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
  );

  const repos = await reposResponse.json();

  return {
    repos: user.public_repos,
    followers: user.followers,
    languages: calculateLanguages(repos), // ← Add this
  };
}

export async function getContributions(): Promise<number> {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  const result = await response.json();

  return (
    result.data.user.contributionsCollection
      .contributionCalendar.totalContributions
  );
}