import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-liked-movies',
  templateUrl: './liked-movies.component.html',
  styleUrls: ['./liked-movies.component.scss']
})
export class LikedMoviesComponent implements OnInit {
  
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

  navigateall() {
    this.router.navigate([''])
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
      return mov.title.equalsIgnoreCase().startsWi1th(this.search) == true
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
