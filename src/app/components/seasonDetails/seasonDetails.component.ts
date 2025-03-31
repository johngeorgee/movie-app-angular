import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute, Router } from '@angular/router';

import { IdetailedSeason } from '../../models/IdetailedSeason';
import { IEpisodes } from '../../models/iEpisodes';
import { ISeasons } from '../../models/iSeasons';
import { Iseries } from '../../models/iseries';

@Component({
  selector: 'app-seasonDetails',
  templateUrl: './seasonDetails.component.html',
  standalone: false,
  styleUrls: ['./seasonDetails.component.css']
})
export class SeasonDetailsComponent implements OnInit {
 public seriesId: number =0
  season_number: number = 0
  allSeasons!: ISeasons[]
  series!: Iseries
  season!: IdetailedSeason
  public  episode!: number
  public allS!: number
  episodes!: IEpisodes[]
  constructor(private seriesServ: SeriesService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params)=>{
      this.seriesId = Number (params.get('sId'))
      this.season_number = Number(params.get('seasonNum'))
      this.seriesServ.getDetailedSeason(this.seriesId, this.season_number).subscribe((data)=>{
        this.season = data
        this.episode = data.episodes.length
        console.log(this.season);
      })
      this.seriesServ.getAllSeasons(this.seriesId).subscribe((data)=>{
        this.allSeasons = data.filter(season => season.season_number !==this.season_number)
        console.log(this.allSeasons);
        this.allS = this.allSeasons.length
        
      })
      this.seriesServ.getDetailedSeries(this.seriesId).subscribe((data)=>{
        this.series = data;
        console.log(data);
        
      })
      
    })
    this.goToDetailedSeason(this.seriesId, this.season_number)
  }
  goToDetailedSeason(sId: number, seasonNumber: number){
    this.route.navigate(['/Series', sId, 'Season', seasonNumber])
  
  }
  goToAllEpisodes(sId: number, seasonNumber:number){
    this.route.navigate(['/Series',sId,'Season',seasonNumber,'episodes'])
  }
}
