export interface IUserDetails {
    login: string;
    html_url: string
    type: string;
    avatar_url:string
}

export interface IRepoUserDetails {
    name: string;
    full_name: string;
    owner: IUserDetails;
    html_url: string;
    description?: string;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage?: string;
    language: string;
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    subscribers_count: number;
}