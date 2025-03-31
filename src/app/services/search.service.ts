import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isearch } from '../models/Isearch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
searchQuery!: string;
private apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY5ZTMyZTcwZTYyZDRjZjRmNjE4ZWZiOTU2Y2E5MSIsIm5iZiI6MTczNzkxODg3MS42NDgsInN1YiI6IjY3OTY4OTk3MTZmMGQ5NjBkZjIzOGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BtWPlcvtVUdBqnnv3eZTeqKTkzCYWKv4hh1Y4kXsKEc"

constructor(private http: HttpClient) { }
searchAll(query: string) : Observable<Isearch>{
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apiKey}`,
    'accept': 'application/json'
  });
  return this.http.get<Isearch>(` https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${this.apiKey}` , {headers})

}
}
