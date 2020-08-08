import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MoviesService } from './services/movies.service'
import { StorageService } from './services/storage.service'

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LikedMoviesComponent } from './components/liked-movies/liked-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component'; 

import { MoviesPipe } from './pipes/movies.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MovieListComponent,
    LikedMoviesComponent,
    MovieDetailsComponent,
    MoviesPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoviesService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
