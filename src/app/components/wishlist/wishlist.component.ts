import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit, OnChanges {
  wishlistMovie: any[] = []
  wishlistSeries: any[] = []
  constructor(){
    this.loadWishlist()
    console.log(this.wishlistMovie , this.wishlistSeries);
    
    
    
  }
  ngOnChanges(): void {
    this.loadWishlist()
  }
  ngOnInit(): void {
    this.loadWishlist()
  }
  loadWishlist(){
    const savedMovies = localStorage.getItem('wishlistM')
    if (savedMovies){
      this.wishlistMovie = JSON.parse(savedMovies)
    }
    const savedSeries = localStorage.getItem('wishlistS')
    if(savedSeries){
      this.wishlistSeries = JSON.parse(savedSeries)
    }
  }
  removeM(id: number){
    this.wishlistMovie= this.wishlistMovie.filter(item => item.id!== id)
    localStorage.setItem('wishlistM', JSON.stringify(this.wishlistMovie))
    this.loadWishlist()
  }
  removeS(id:number){
   this.wishlistSeries =  this.wishlistSeries.filter(item => item.id!== id)
    localStorage.setItem('wishlistS', JSON.stringify(this.wishlistSeries))
    this.loadWishlist()
  }
}
