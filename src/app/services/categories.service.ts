import { Injectable } from '@angular/core';
import { Icategory } from '../models/icategory';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  catList: Icategory[]
  // private selectedCatID = new BehaviorSubject<number>(1)
  // selectedCat$ = this.selectedCatID.asObservable()
  constructor() {
    this.catList = [{
      name: "All Movies",
      id: 1,
      title: "all-movies",
      type: "movie"
    },
    {
      name: "Now Playing Movies",
      id: 2,
      title: "now-playing",
      type: "movie"
    },
    {
      name: "Trending Movies",
      id: 3,
      title: "trending",
      type: "movie"
    },
    {
      name: "Top-Rated Movies",
      id: 4,
      title: "top-rated",
      type: "movie"
    },
    {
      name: "Popular Movies",
      id: 5,
      title: "popular",
      type: "movie"
    },
    {
      name: "Upcoming Movies",
      id: 6,
      title: "upcoming",
      type: "movie"
    },
   
  
  ]
   }
   getMoviesCategory(): Icategory[]{
    return this.catList
  }
}

