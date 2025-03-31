import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { ISeasons } from '../../models/iSeasons';
import { Iseries } from '../../models/iseries';


@Component({
  selector: 'app-seriesSeasons',
  standalone: false,
  
  templateUrl: './seriesSeasons.component.html',
  styleUrls: ['./seriesSeasons.component.css']
})
export class SeriesSeasonsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private seriesServ: SeriesService, private route:Router) { }
  public seriesId: number = 0
  seasons!: ISeasons[] 
  public season!: number
  series!: Iseries
    ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap)=>{
      this.seriesId =Number(paramMap.get('sId'))
      this.seriesServ.getDetailedSeries(this.seriesId).subscribe((data)=>{
        this.series = data

        console.log(this.series);
        
      })
      this.seriesServ.getAllSeasons(this.seriesId).subscribe((data)=>{
        this.seasons = data
        this.season = data.length
        console.log(this.seasons);
        
      })
    })
    
  }
  goToDetailedSeason(sId:number, season_number:number){
      this.route.navigate(['/Series', sId,'Season',season_number]) 
  }
}
