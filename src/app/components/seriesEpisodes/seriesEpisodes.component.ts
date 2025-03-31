import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeasons } from '../../models/iSeasons';
import { IEpisodes } from '../../models/iEpisodes';
import { IdetailedSeason } from '../../models/IdetailedSeason';
import { Iseries } from '../../models/iseries';

@Component({
  selector: 'app-seriesEpisodes',
  templateUrl: './seriesEpisodes.component.html',
  standalone: false,
  styleUrls: ['./seriesEpisodes.component.css']
})
export class SeriesEpisodesComponent implements OnInit {
  public seriesId: number = 0;
  seasonNumber: number =0
  season!: IdetailedSeason
  series!: Iseries
  episodes!: IEpisodes[]

  constructor(private seriesServ: SeriesService, private route: Router, private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params)=>{
      this.seriesId = Number(params.get('sId'))
      this.seasonNumber = Number(params.get('seasonNum'))
      this.seriesServ.getDetailedSeason(this.seriesId, this.seasonNumber).subscribe((data)=>{
        this.episodes = data.episodes
        console.log(this.episodes);
      })
      this.seriesServ.getDetailedSeason(this.seriesId, this.seasonNumber).subscribe((data)=>{
        this.season = data
        console.log(this.season);
        
      })
      this.seriesServ.getDetailedSeries(this.seriesId).subscribe((data)=>{
        this.series = data
        console.log(this.series);
        
      })
    })
  }
goToDetailedEpisode(sid:number, season: number, episode:number){
  this.route.navigate(['/Series',sid,'Season',season,'episodes', episode])
}
}
