export interface Imovies {
    id: number,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: number,
    title: string,
    vote_average: number,
    vote_count: number,
    backdrop_path: string,
    adult: boolean,
    belongs_to_collection: string,
    genres: [{
        id:number,
        name: string
    }],
    homepage:string,
    production_companies: [{
        id: number,
        logo_path:string,
        name:string
        origin_country:string
    }],
    status:string,
    tagline:string,
    runtime: number
}
