import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { SeriesService } from '../../services/series.service';
import { Imovies } from '../../models/imovies';
import { Iseries } from '../../models/iseries';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  movList!: Imovies[];
  serList!: Iseries[];
  movImage : string[] =[]
  serImage: string[]=[]
  currentIndex: number = 0
  autoSlideInterval: any; 

  constructor(private route: Router, private movServ: MoviesService, private seriesServ: SeriesService ){

  }
 
  ngOnInit(): void {
    this.movServ.filterMoviesByCategoryId(1).subscribe((data)=>{
      this.movList = data
      data.forEach((movie)=>{
        this.movImage.push(movie.backdrop_path)
      })
      
      console.log(this.movImage);
      this.seriesServ.filterSeriesByCategoryId(1).subscribe((data)=>{
        this.serList = data
        data.forEach((series)=>{
          this.serImage.push(series.backdrop_path)
        })
      })
      
    })
  }
goToMovies(){
  this.route.navigate(['All/Movies/1'])
}
goToSeries(){
  this.route.navigate(['All/Series/1'])

}
}
