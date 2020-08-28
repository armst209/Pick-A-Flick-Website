import { Component, OnInit } from '@angular/core';
import { MovieappService } from '../movieapp.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  genres : any;
  hideNav = false;


  constructor(private movieAppService: MovieappService) { }

  ngOnInit(): any {


    
    this.movieAppService.getGenre().subscribe(this.onSuccess.bind(this), this.onError.bind(this))
  }

  onSuccess(data:any){
    this.genres = data.genres;
    console.log(data.genres);
  }

  onError(error: Error){
    console.log(error.message);
  }
  searchSubmit(data){
    let actorsName = data.actorName;
    if(actorsName.length > 0) {

      this.movieAppService.getActorId(actorsName).subscribe((response: any) => {
        console.log(response.results[0])
        const actorId = response.results ? response.results[0].id : "";
        const parameters = {releaseYear: data.releaseYear, actorId: actorId, genreId: data.genreId}
        this.movieAppService.getMovies(parameters).subscribe((response : any) => {
          this.movieAppService.movies = response.results    
          console.log(response)
        
        })
      });

    } else {

      this.movieAppService.getMovies(data).subscribe((response : any) => {
        this.movieAppService.movies = response.results  
        console.log(response)
      
      })
    }
    
     
  
  }  
}
