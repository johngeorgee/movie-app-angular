import { Component, OnInit } from '@angular/core';
import { SCategoryService } from '../../services/s-category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-series-layout',
  standalone: false,
  templateUrl: './series-layout.component.html',
  styleUrl: './series-layout.component.css'
})
export class SeriesLayoutComponent implements OnInit{
  // catName: string | null = null;
  selectedSeriesID!: number;
  constructor(private cat: SCategoryService , private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedSeriesID =Number(params.get('catId'));
    })
    console.log(this.selectedSeriesID);
    
  }
  onCategorySelect(catID: number){
    this.selectedSeriesID = catID
  }

}
