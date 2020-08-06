import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LikedMoviesComponent } from './components/liked-movies/liked-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
{
    path: '',
    component: MovieListComponent
},
{
    path: 'profile',
    component: ProfileComponent
},
{
    path: 'liked-movies',
    component: LikedMoviesComponent
},
{
    path: 'movie-detail',
    component: MovieDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
