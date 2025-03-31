import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Imovies } from '../models/imovies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesService } from './categories.service';
import { IActors } from '../models/iActors';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY5ZTMyZTcwZTYyZDRjZjRmNjE4ZWZiOTU2Y2E5MSIsIm5iZiI6MTczNzkxODg3MS42NDgsInN1YiI6IjY3OTY4OTk3MTZmMGQ5NjBkZjIzOGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BtWPlcvtVUdBqnnv3eZTeqKTkzCYWKv4hh1Y4kXsKEc"
  constructor(private http: HttpClient, private catServ: CategoriesService) { }
  filterMoviesByCategoryId(catId: number) : Observable<Imovies[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    if ( catId == 1){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", { headers }).pipe(map(res=> res.results));
    
    }
    if ( catId == 2){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2", { headers }).pipe(map(res=> res.results))
    }
    if ( catId == 3){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=3", { headers }).pipe(map(res=> res.results))
    }
    if ( catId == 4){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4", { headers}).pipe(map(res=> res.results))
    }
    if ( catId == 5){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/movie/popular?language=en-US&page=5", { headers}).pipe(map(res=> res.results))
    }
    if ( catId == 6){
      return this.http.get<{results: Imovies[]}>("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=6", { headers: headers}).pipe(map(res=> res.results))
    }
    return of([])
  }
  getDetailedMovies(movieId: number): Observable<Imovies> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
  
    return this.http.get<any>( 
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, 
      { headers: headers }
    ).pipe(
      map((res: any) => {
        return {
          id: res.id,
          original_language: res.original_language,
          overview: res.overview,
          popularity: res.popularity,
          poster_path: res.poster_path,
          release_date: res.release_date,
          title: res.title,
          vote_average: res.vote_average,
          vote_count: res.vote_count,
          backdrop_path: res.backdrop_path,
          adult: res.adult,
          belongs_to_collection: res.belongs_to_collection,
          genres: res.genres,
          homepage: res.homepage,
          production_companies: res.production_companies,
          status: res.status,
          tagline: res.tagline,
          runtime: res.runtime,
        } as Imovies; 
      })
    );
  }
  getRecommendations(movieId: number): Observable<Imovies[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get<{results: Imovies[]}>(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US` , { headers}).pipe(map(res=> res.results))
  }
  getCast(movieId: number) : Observable<IActors>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'accept': 'application/json'
    });
    return this.http.get<IActors>(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {headers})
  }
}
