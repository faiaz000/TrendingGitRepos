import { GithubRepo } from '../interfaces/github-api.interface';

export const mockRepos: GithubRepo[] = [
  {
    name: 'Repo 1',
    description: 'Description 1',
    stargazers_count: 100,
    open_issues_count: 10,
    created_at: '2022-01-01T00:00:00Z',
    owner: { login: 'User1', avatar_url: 'https://github.com/user1.png' },
  },
  {
    name: 'Repo 2',
    description: 'Description 2',
    stargazers_count: 200,
    open_issues_count: 20,
    created_at: '2022-02-02T00:00:00Z',
    owner: { login: 'User2', avatar_url: 'https://github.com/user2.png' },
  },
  {
    name: 'Repo 3',
    description: 'Description 3',
    stargazers_count: 300,
    open_issues_count: 30,
    created_at: '2022-03-03T00:00:00Z',
    owner: { login: 'User3', avatar_url: 'https://github.com/user3.png' },
  },
  {
    name: 'Repo 4',
    description: 'Description 4',
    stargazers_count: 400,
    open_issues_count: 40,
    created_at: '2022-04-04T00:00:00Z',
    owner: { login: 'User4', avatar_url: 'https://github.com/user4.png' },
  },
  {
    name: 'Repo 5',
    description: 'Description 5',
    stargazers_count: 500,
    open_issues_count: 50,
    created_at: '2022-05-05T00:00:00Z',
    owner: { login: 'User5', avatar_url: 'https://github.com/user5.png' },
  },
];
