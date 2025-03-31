import { Injectable } from '@angular/core';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class SCategoryService {
  seriesCategory: Icategory[]
  constructor() {
  this.seriesCategory = [  {
      name: "All Series",
      id: 1,
      title: "all-series",
      type: "tv"
    },
    {
      name: "Airing Today Series",
      id: 2,
      title: "airing-today",
      type: "tv"
    },
    {
      name: "Popular Series",
      id: 3,
      title: "popular",
      type: "tv"
    },
    {
      name: "Top-Rated Series",
      id: 4,
      title: "top-rated",
      type: "tv"
    },
    {
      name: "Trending Series",
      id: 5,
      title: "trending",
      type: "tv"
    },
    {
      name: "On The Air Series ",
      id: 6,
      title: "on-air",
      type: "tv"
    }]
   }
   getSeriesCategory(): Icategory[]{
    return this.seriesCategory
  }
}
