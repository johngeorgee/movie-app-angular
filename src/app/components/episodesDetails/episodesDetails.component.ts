import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISeasons } from '../../models/iSeasons';
import { IEpisodes } from '../../models/iEpisodes';
import { IdetailedSeason } from '../../models/IdetailedSeason';
import { Iseries } from '../../models/iseries';

@Component({
  selector: 'app-episodesDetails',
  templateUrl: './episodesDetails.component.html',
  standalone: false,
  styleUrls: ['./episodesDetails.component.css']
})
export class EpisodesDetailsComponent implements OnInit {
  public seriesId: number=0;
  seasonNumber:number = 0;
  episodeNumber:number =0;
  
  episode!: IEpisodes
  season!: IdetailedSeason
    series!: Iseries
  episodes!: IEpisodes[]
  constructor(private seriesServ: SeriesService, private route: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params)=>{
      this.seriesId = Number(params.get('sId'))
      this.seasonNumber = Number(params.get('seasonNum'))
      this.episodeNumber = Number(params.get('eNum'))
      this.seriesServ.getDetailedEpisode(this.seriesId, this.seasonNumber, this.episodeNumber).subscribe(data=>{
        this.episode = data
        console.log(this.episode);
        
      })
      this.seriesServ.getDetailedSeason(this.seriesId, this.seasonNumber).subscribe(data=>{
        this.episodes = data.episodes.filter(episode=> episode.episode_number !== this.episodeNumber)
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
  goToDetailedEpisode(sId: number, season: number, episode: number){
    this.route.navigate(['/Series', sId, 'Season', season,'episodes', episode])
  }
}
