import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesLayoutComponent } from './components/movies-layout/movies-layout.component';
import { SeriesLayoutComponent } from './components/series-layout/series-layout.component';
import { SeriesSeasonsComponent } from './components/seriesSeasons/seriesSeasons.component';
import { SeriesEpisodesComponent } from './components/seriesEpisodes/seriesEpisodes.component';
import { SeasonDetailsComponent } from './components/seasonDetails/seasonDetails.component';
import { EpisodesDetailsComponent } from './components/episodesDetails/episodesDetails.component';
import { SearchComponent } from './components/search/search.component';
import { RenderMode } from '@angular/ssr';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'All'  ,children: [
    {path: 'Movies/:catId', component: MoviesLayoutComponent, data: { renderMode: 'no-prerender'}},
    { path: 'Series/:catId', component: SeriesLayoutComponent, data: { renderMode: 'no-prerender'}}
  ]},
  { path: 'Movies/:mId', component: MovieDetailsComponent, data: { renderMode: 'no-prerender'} },
  { path: 'Series/:sId', component: SeriesDetailsComponent, data: { renderMode: 'no-prerender'} },
  { path: 'wishlist', component: WishlistComponent },
  {path: 'Series/:sId/AllSeasons', component: SeriesSeasonsComponent, data: { renderMode: 'no-prerender'}},
  {path: 'Series/:sId/Season/:seasonNum', component: SeasonDetailsComponent, data: { renderMode: 'no-prerender'}},
  {path: 'Series/:sId/Season/:seasonNum/episodes', component: SeriesEpisodesComponent, data: { renderMode: 'no-prerender'}},
  {path: 'Series/:sId/Season/:seasonNum/episodes/:eNum', component: EpisodesDetailsComponent, data: { renderMode: 'no-prerender'}},
  {path: 'search/:query', component: SearchComponent}, 
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
