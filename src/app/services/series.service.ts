import { Injectable } from '@angular/core';
import { SCategoryService } from './s-category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iseries } from '../models/iseries';
import { map, Observable, of } from 'rxjs';
import { IActors } from '../models/iActors';
import { ISeasons } from '../models/iSeasons';
import { IdetailedSeason } from '../models/IdetailedSeason';
import { IEpisodes } from '../models/iEpisodes';
import { IseasonsCrew } from '../models/IseasonsCrew';
import { IguestStars } from '../models/IguestStars';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
private apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY5ZTMyZTcwZTYyZDRjZjRmNjE4ZWZiOTU2Y2E5MSIsIm5iZiI6MTczNzkxODg3MS42NDgsInN1YiI6IjY3OTY4OTk3MTZmMGQ5NjBkZjIzOGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BtWPlcvtVUdBqnnv3eZTeqKTkzCYWKv4hh1Y4kXsKEc"
  constructor(private http: HttpClient, private catServ: SCategoryService) { }
  filterSeriesByCategoryId(catId: number) : Observable<Iseries[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    if (catId == 1){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", { headers }).pipe(map(res=> res.results));
    }
    if ( catId == 2 ){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=2", { headers }).pipe(map(res=> res.results));
    }
    if ( catId == 3){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/tv/popular?language=en-US&page=3", { headers}).pipe(map(res=>res.results))
    }
    if( catId == 4){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=4", { headers}).pipe(map(res=>res.results))
    }
    if ( catId == 5){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=5", { headers}).pipe(map(res=>res.results))
    }
    if ( catId == 6){
      return this.http.get<{results: Iseries[]}>("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=6", { headers}).pipe(map(res=>res.results))
    }
     return of([])
  }
  getDetailedSeries(seriesId: number): Observable<Iseries>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, { headers: headers}).pipe(
      map((res: any)=>{
        return {
          id: res.id,
          original_language: res.original_language,
          overview: res.overview,
          popularity: res.popularity,
          poster_path: res.poster_path,
          air_date: res.air_date,
          episode_type: res.episode_type,
          name: res.name,
          vote_average: res.vote_average,
          vote_count: res.vote_count,
          last_air_date: res.last_air_date,
          season_number: res.season_number,
          number_of_episodes: res.number_of_episodes,
          number_of_seasons: res.number_of_seasons,
          
        } as Iseries
      })
    )
  }
  getRecommendations(seriesId: number): Observable<Iseries[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
        return this.http.get<{results: Iseries[]}>(`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?language=en-US` , { headers}).pipe(map(res=> res.results))
    
  }
  getCast(seriesId: number): Observable<IActors>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get< IActors>(`https://api.themoviedb.org/3/tv/${seriesId}/credits`, {headers})
  }
  getAllSeasons(seriesId: number ) : Observable<ISeasons[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get< Iseries>(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,{headers}).pipe(map(res=> res.seasons))
  }
  getDetailedSeason(seriesId: number, seasonNumber: number): Observable<IdetailedSeason>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=en-US`, {headers}).pipe(
      map((res: any)=>{
        return {
          air_date: res.air_date,
          episodes: res.episodes as IEpisodes[],
          name: res.name,
          overview: res.overview,
          id: res.id,
          poster_path: res.poster_path,
          season_number: res.season_number,
          vote_average: res.vote_average
        } as IdetailedSeason
      })
    )
  }
  getDetailedEpisode(seriesId: number, seasonNumber: number, episodeNumber: number ): Observable<IEpisodes>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}?language=en-US`, {headers}).pipe(map((res: any)=>{
      return {
        air_date: res.air_date,
        episode_number: res.episode_number,
        episode_type: res.episode_type,
        id: res.id,
        name: res.name,
        overview: res.overview,
        runtime: res.runtime,
        season_number: res.season_number,
        still_path: res.still_path,
        vote_average: res.vote_average,
        crew: res.crew as IseasonsCrew[],
        guest_stars: res.guest_stars as IguestStars[]
      } as IEpisodes
    }))
  }
}
