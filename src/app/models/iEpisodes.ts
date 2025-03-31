import { IguestStars } from "./IguestStars";
import { IseasonsCrew } from "./IseasonsCrew";

export interface IEpisodes {
    episode_number: number,
    episode_type: string,
    id: number,
    air_date: string,
    name: string,
    overview: string,
    runtime: number,
    season_number: number,
    still_path: string,
    vote_average: number,
    crew: IseasonsCrew[],
    guest_stars: IguestStars[]
}
