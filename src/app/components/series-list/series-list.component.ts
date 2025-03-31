import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iseries } from '../../models/iseries';
import { SeriesService } from '../../services/series.service';
import { SCategoryService } from '../../services/s-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnChanges, OnInit{
  @Input() seriesCatId: number =0
 public wishlistSeries!: any[]
  serList: Iseries[] = []
  constructor( private series: SeriesService, private category: SCategoryService, private router: Router){

  }
  ngOnInit(): void {
    this.filterSeriesCategory(this.seriesCatId)
    const savedWishlist = localStorage.getItem('wishlistS')
    this.wishlistSeries = savedWishlist ? JSON.parse(savedWishlist) : []
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    this.filterSeriesCategory(this.seriesCatId)
  }
  private filterSeriesCategory(id: number){
    this.series.filterSeriesByCategoryId(id).subscribe((series)=>{
      this.serList = series
      console.log(this.serList);
      
    })
  }
  public goToDetailedSeries(sId: number){
    this.router.navigate(['/Series', sId])
  }
  addSeriesToWishlist(item: any){
    const exists = this.wishlistSeries.find(wish => wish.id === item.id)
    if(!exists){
      this.wishlistSeries.push(item)
      localStorage.setItem('wishlistS', JSON.stringify(this.wishlistSeries))
      alert("Added To Wishlist")
    } else {
      alert("Already in Wishlist")
    }
  }
}
