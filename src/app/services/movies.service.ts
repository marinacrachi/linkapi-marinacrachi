import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://movies.gateway.linkapi.solutions/v1/movies?apiKey=1719c97e-9d02-449e-aadb-67425bf715c5'
  
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url)
  }

}
