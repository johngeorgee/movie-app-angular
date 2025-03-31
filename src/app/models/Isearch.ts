export interface Isearch {
    results: [{
        backdrop_path: string;
        id: number;
        title: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        original_language: string;
        popularity: number;
        release_date: string;
        vote_average: number;
        vote_count: number;
    }]

    total_results: number;
}
