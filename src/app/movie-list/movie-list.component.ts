import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieAppService: MovieappService) { }

  ngOnInit() {
    
  }

  getMovies() {

    return this.movieAppService.movies
  }
  
 

 
}
