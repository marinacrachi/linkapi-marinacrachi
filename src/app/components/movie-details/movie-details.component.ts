import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movies: MoviesService, private storage: StorageService, private location: Location) { }

  movie;
  movieId;
  profile;

  ngOnInit(): void {
    this.profile = this.storage.getItem('profile')
    this.route.params.subscribe(paramsId => {
      this.movies.getMovies().subscribe((res) => {
      this.movieId = parseInt(paramsId.movie);
      this.movie = res[this.movieId]
    console.log(this.movie)
      });
    })
  }

  isFavorite() {

    if (this.profile.favoritesList.indexOf(this.movieId) > -1) {
      return true
    } else {
      return false
    }
  }

  changeFav(){ 

    let index = this.profile.favoritesList.indexOf(this.movieId);

    if (index > -1) { 
      this.profile.favoritesList.splice(index, 1);
    } else { 
      this.profile.favoritesList.push(this.movieId)
    }

    this.storage.setItem('profile', this.profile) 
  }

  back() {
    this.location.back(); 
  }

}
