import { Component, OnInit, Input } from '@angular/core';
import { MovieappService } from '../movieapp.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css'],
})
export class SinglemovieComponent implements OnInit {
  @Input() movie: any;

  constructor(private movieAppService: MovieappService) {}

  ngOnInit(): void {}

  addToFavorites(movie: any) {
    this.movieAppService.favoriteMovies.push(movie);
    console.log(this.movieAppService.favoriteMovies);
  }

  isMovieInFavorites() {
    return !this.movieAppService.favoriteMovies.includes(this.movie);
  }
}
