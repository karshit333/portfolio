
import { GitHubRepo } from '../types';

export const fetchGithubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    const data: GitHubRepo[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
