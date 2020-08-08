import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  profile;
  moviesList;
  filteredMoviesArray;
  search = '';
  temFilme = true;

  constructor(private movies: MoviesService, private router: Router, private storage: StorageService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.profile = this.storage.getItem('profile')
  }

  getAllMovies() {
    this.movies.getMovies().subscribe((res) => this.moviesList = res);
  }

  movieDetail(movieIndex) {
    this.router.navigate(['movie-detail', { movie: movieIndex }])
  }

  navigateFavorites() {
    this.router.navigate(['liked-movies'])
  }

  isFavorite(movieIdx) {

    if (this.profile.favoritesList.indexOf(movieIdx) > -1) {
      return true
    } else {
      return false
    }
  }

  changeFav(movieIdx) {

    console.log(movieIdx)

    let index = this.profile.favoritesList.indexOf(movieIdx);

    if (index > -1) {
      console.log('achou na lista de favoritos, vai remover')
      this.profile.favoritesList.splice(index, 1);
    } else {
      console.log('nao achou na lista de favoritos, vai adicionar')
      this.profile.favoritesList.push(movieIdx)
    }

    this.storage.setItem('profile', this.profile)
    console.log(this.profile.favoritesList)
  }


  searchMovie() {
    if (!this.search) {
      return this.moviesList;
    }
    else {
      this.search = this.search.toUpperCase();
    }

    this.filteredMoviesArray = this.moviesList.filter(mov => {
      return mov.title.toUpperCase().startsWith(this.search) == true
      // return mov.title.equalsIgnoreCase().startsWi1th(this.search) == true
    })
    this.achouFilme()
  }

  achouFilme() {

    if (this.filteredMoviesArray.length < 1) {
      this.temFilme = false;
    } else {
      this.temFilme = true;
    }
    console.log('achou filme? ', this.temFilme)
  }

  
}