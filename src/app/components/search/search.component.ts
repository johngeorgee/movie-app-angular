import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { SeriesService } from '../../services/series.service';
import { Isearch } from '../../models/Isearch';
import { SearchService } from '../../services/search.service';
import { response } from 'express';
import { findIndex, map } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchQuery: string = ''
  searchResults!: any[] 
  public totalResults!: any
  constructor(private activeRoute: ActivatedRoute, private search: SearchService, private movServ: MoviesService, private serServ: SeriesService, private route: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params =>{
      this.searchQuery = String(params.get('query'))
      if (this.searchQuery){
        this.search.searchAll(this.searchQuery).pipe(
          map(response => {
            return {
              results: response.results?.filter(type => type.media_type !== 'person' && type.backdrop_path!=null),
              total_results: response.total_results,
             
            }
          })
        ).subscribe(filtered =>{
          console.log(filtered);
          this.searchResults = filtered.results
          this.totalResults = filtered.total_results
          
          
          
        })
        
      }
    })
  }
  goToDetails(id:number , type: string){
    if(type == "movie"){
      this.route.navigate(['/Movies', id])
    }
    if (type == "tv"){
      this.route.navigate(['Series', id])
    }
  }

}
