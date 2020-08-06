import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movies: MoviesService) { }

  movie;

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.movie = this.movies.getMovieById(paramsId.movie)
    })
  }

}
