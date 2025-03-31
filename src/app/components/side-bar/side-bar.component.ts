import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { MoviesService } from '../../services/movies.service';
import { CategoriesService } from '../../services/categories.service';
import { SeriesService } from '../../services/series.service';
import { SCategoryService } from '../../services/s-category.service';
import { Imovies } from '../../models/imovies';
import { Iseries } from '../../models/iseries';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  
 moviesCategory: Icategory[] = []
 seriesCategory: Icategory[] = []
 moviesList: Imovies[]=[]
 seriesList: Iseries[]=[]
 selectedMovieId: number = 0;
 selectedSeriesId: number = 0;
  @Output() categoryMSelected = new EventEmitter<number>();
  @Output() categorySSelected = new EventEmitter<number>()
 
 constructor( private moviesServ: MoviesService, private moviesCat: CategoriesService, private seriesServ: SeriesService, private seriesCat: SCategoryService){
  
 }
  ngOnInit(): void {
   this.moviesCategory = this.moviesCat.getMoviesCategory()
   this.seriesCategory = this.seriesCat.getSeriesCategory()
 
   
  }
 selectMovie(id: number){
  this.selectedMovieId = id
  this.moviesServ.filterMoviesByCategoryId(id).subscribe()
  this.categoryMSelected.emit(id)
  this.selectedSeriesId=0
 
 }
 selectSeries(id: number){
  this.selectedSeriesId = id

  this.seriesServ.filterSeriesByCategoryId(id).subscribe(
    
  )
  this.categorySSelected.emit(id)
  this.selectedMovieId=0

 }
}
