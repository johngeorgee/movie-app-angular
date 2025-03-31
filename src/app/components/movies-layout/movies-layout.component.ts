import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies-layout',
  standalone: false,
  templateUrl: './movies-layout.component.html',
  styleUrl: './movies-layout.component.css'
})
export class MoviesLayoutComponent implements OnInit {
  selectedMovieID!: number ;
 
  constructor(private cat: CategoriesService, private route: ActivatedRoute) { 
    
  }
  onCategorySelect(catID: number){
    this.selectedMovieID = catID
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedMovieID =Number(params.get('catId'));
    })
   console.log(this.selectedMovieID);
   
  }

}
