export interface GitHubSearchResult {
    total_count: number;
    items: Array<{
        name: string;
        description: string | null;
        stargazers_count: number;
        forks: number;
        created_at: string;
        updated_at: string;
        html_url: string;
        owner: {
            avatar_url: string;
        };
    }>;
}