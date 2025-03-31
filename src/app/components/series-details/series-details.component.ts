import { Component, OnInit } from '@angular/core';
import { Iseries } from '../../models/iseries';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { IActors } from '../../models/iActors';

@Component({
  selector: 'app-series-details',
  standalone: false,
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css'
})
export class SeriesDetailsComponent implements OnInit {
  currentSeriesId: number = 0;
  series!: Iseries;
  cast!: any[];
  crew!: any[];

  recommendations!: Iseries[]
  constructor(private activeRoute : ActivatedRoute, private route: Router, private seriesServ: SeriesService){}
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentSeriesId = Number( paramMap.get('sId'))
      this.seriesServ.getDetailedSeries(this.currentSeriesId).subscribe((data)=>{
        this.series = data
        console.log(this.series);
        
      })
    })
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentSeriesId = Number( paramMap.get('sId'))
      this.seriesServ.getRecommendations(this.currentSeriesId).subscribe((data)=>{
        this.recommendations= data
        console.log(this.recommendations);
    })

      
    })
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.currentSeriesId = Number( paramMap.get('sId'))
      this.seriesServ.getCast(this.currentSeriesId).subscribe((data: IActors)=>{
        this.cast = data.cast
        this.crew = data.crew
        console.log(this.cast);
        console.log(this.crew);
        
        
      })

      
    })
  }
  goToDetailedSeries(sId: number){
    this.route.navigate(['/Series' , sId])
  }

AllSeasons(seriesId:number){
  this.route.navigate(['/Series',seriesId,'AllSeasons'])
}
}
