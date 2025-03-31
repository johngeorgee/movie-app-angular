import { IEpisodes } from "./iEpisodes";

export interface IdetailedSeason {
    air_date: string,
    episodes: IEpisodes[],
    name: string,
    overview: string,
    id: number,
    poster_path: string,
    season_number: number,
    vote_average: number

}
