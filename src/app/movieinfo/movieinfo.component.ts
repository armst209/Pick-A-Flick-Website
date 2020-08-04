import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit { 
  

  movie: any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      console.log(params);
      this.movie = params;
    })
  }
 
}
