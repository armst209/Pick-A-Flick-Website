import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service';


@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  constructor(private movieAppService:MovieappService) { }

  ngOnInit(): void {
  }

  getMovies(){

    return this.movieAppService.favoriteMovies;
  }

    
  removeFromFavorites(movie:any){
    const movieIndex = this.movieAppService.favoriteMovies.indexOf(movie);
    this.movieAppService.favoriteMovies.splice(movieIndex, 1);
    console.log(this.movieAppService.favoriteMovies);
  }

}
