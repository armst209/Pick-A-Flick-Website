import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { AboutComponent } from '../app/about/about.component'


const routes: Routes = [
  {path: "home", component: MovieListComponent},
  {path: "favorites", component:WatchlistPageComponent},
  {path: "info", component:MovieinfoComponent},
  {path: "about", component:AboutComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
