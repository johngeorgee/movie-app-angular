import { ISeasons } from "./iSeasons"

export interface Iseries {
    id: number,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    air_date: string,
    name: string,
    vote_average: number,
    vote_count: number,
    backdrop_path: string,
    adult: boolean
    last_air_date: string,
    episode_type: string,
    season_number: number,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],

    seasons: ISeasons[],
    spoken_languages:{
        english_name: string,
        name: string
    }[],
    status: string,
    tagline: string,
    type: string,
  
}
