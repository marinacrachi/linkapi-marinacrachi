import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movies: MoviesService, private storage: StorageService) { }

  movie;
  movieId;
  profile;

  ngOnInit(): void {
    this.profile = this.storage.getItem('profile')
    this.route.params.subscribe(paramsId => {
      this.movieId = parseInt(paramsId.movie);
      this.movie = this.movies[this.movieId]
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
    console.log('change fav')
    console.log(this.profile.favoritesList)

    let index = this.profile.favoritesList.indexOf(this.movieId);

    if (index > -1) {
      console.log('achou na lista de favoritos, vai remover')
      this.profile.favoritesList.splice(index, 1);
    } else {
      console.log('nao achou na lista de favoritos, vai adicionar')
      this.profile.favoritesList.push(this.movieId)
    }

    this.storage.setItem('profile', this.profile)
    console.log(this.profile.favoritesList)
  }

}
