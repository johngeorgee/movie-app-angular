import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../models/imovies';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { IActors } from '../../models/iActors';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  currentMovieId: number = 0;
  movie!: Imovies
  recommendations!: Imovies[];
  cast!: any[]
  crew!: any[]
  constructor(private activeRoute: ActivatedRoute, private movieServ: MoviesService, private route: Router){

  }
  goToDetailedMovie(mId: number){
    this.route.navigate(['/Movies', mId] )
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentMovieId = Number (paramMap.get('mId'))
       this.movieServ.getDetailedMovies(this.currentMovieId).subscribe ((data)=>{
        this.movie = data
        console.log(this.movie);
        
      })
    })
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentMovieId = Number (paramMap.get('mId'))
      this.movieServ.getRecommendations(this.currentMovieId).subscribe((data)=>{
        this.recommendations = data
        console.log(this.recommendations);
        
      })
    })
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentMovieId = Number (paramMap.get('mId'))
      this.movieServ.getCast(this.currentMovieId).subscribe((data)=>{
        this.cast =data.cast
        this.crew = data.crew
        console.log(this.cast);
        console.log(this.crew);
        
        
      })
    })
  }

}
