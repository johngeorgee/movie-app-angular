import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {  provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesLayoutComponent } from './components/movies-layout/movies-layout.component';
import { SeriesLayoutComponent } from './components/series-layout/series-layout.component';
import { SeasonDetailsComponent } from './components/seasonDetails/seasonDetails.component';
import { SeriesSeasonsComponent } from './components/seriesSeasons/seriesSeasons.component';
import { SeriesEpisodesComponent } from './components/seriesEpisodes/seriesEpisodes.component';
import { EpisodesDetailsComponent } from './components/episodesDetails/episodesDetails.component';
import { SearchComponent } from './components/search/search.component';
// import{ SwiperModule} from 'swiper/angular/index';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SideBarComponent,
    MoviesListComponent,
    SeriesListComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    WishlistComponent,
    NotfoundComponent,
    MoviesLayoutComponent,
    SeriesLayoutComponent,
    SeasonDetailsComponent,
    SeriesSeasonsComponent,
    SeriesEpisodesComponent,
    EpisodesDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
