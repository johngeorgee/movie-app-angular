import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CategoriesService } from '../../services/categories.service';
import {  Router } from '@angular/router';
import { Imovies } from '../../models/imovies';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnChanges, OnInit{
  @Input() movieCatId: number = 0
  
  movList: Imovies[] = []
  public wishlistMovie!: any[]
  constructor( private movies: MoviesService, private category: CategoriesService, private router: Router){
      
  }
  ngOnInit(): void {

   this.filterMoviesCategory(this.movieCatId)
    const savedWishlist = localStorage.getItem('wishlistM')
    this.wishlistMovie = savedWishlist ? JSON.parse(savedWishlist) : []
   
  }
  ngOnChanges(): void {
   this.filterMoviesCategory(this.movieCatId)
  }

  private filterMoviesCategory(id: number){
        this.movies.filterMoviesByCategoryId(id).subscribe((movie)=>{
          this.movList = movie
          console.log(this.movList);
          
        })
      }
  public goToDetailedMovie(mId: number){
    this.router.navigate(['/Movies' , mId])
  }
  addMovieToWishlist(item:any){
    console.log('Hello');
    
    const exists = this.wishlistMovie.find(wish=> wish.id === item.id)
    if(!exists){
      this.wishlistMovie.push(item)
      localStorage.setItem('wishlistM', JSON.stringify(this.wishlistMovie))
      alert("Added To Wishlist")
    } else {
      alert('Already in Wishlist')
    }
    
    console.log(this.wishlistMovie);
    
  }
    }
