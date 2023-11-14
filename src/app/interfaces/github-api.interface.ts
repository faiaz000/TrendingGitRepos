export interface GithubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface GithubRepoSearchResults {
  total_count: number;
  items: GithubRepo[];
}
export interface RatedGithubRepo extends GithubRepo {
  rating?: number;
}