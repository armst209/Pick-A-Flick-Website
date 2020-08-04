import { Component, OnInit } from '@angular/core';
import { MovieappService } from './movieapp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SchneiderFlix';
  hideNav = false;
  constructor(private movieService : MovieappService){ }

  ngOnInit(){
    const parameters = {
      genreId: "",
      releaseYear: "2020",

    }
    this.movieService.getMovies(parameters).subscribe((response: any) => this.movieService.movies = response.results)
  }

  getMovies(){
    return this.movieService.movies
  }
}
