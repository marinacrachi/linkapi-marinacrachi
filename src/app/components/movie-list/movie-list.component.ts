import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  moviesList;
  search = ''; 

  constructor(private movies: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies() {
    // this.movies.getMovies().subscribe((res) => this.moviesList = res)
    this.moviesList = this.movies.getMovies();
  }

  movieDetail(movieIndex) {
    this.router.navigate(['movie-detail', { movie: movieIndex }])
  }

  navigateFavorites() {
    this.router.navigate(['liked-movies'])
  }

}
