export interface IRepoData {
  incomplete_results: boolean;
  items: IRepoDetails[];
  total_count: number;
}

export interface IRepoDetails {
  id:number;
  name: string
  full_name: string
  owner: IRepoOwner
  description: string
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  language: string
  visibility: string
  forks: number
  open_issues: number
  stargazers_count:number
  watchers: number
  default_branch: string
}

export interface IRepoOwner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  type: string
  site_admin: boolean
}