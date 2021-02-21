import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './interfaces/movies.interface';
import { Details } from './interfaces/details.interface';

interface Services {
 getMovies(value: string);
 getMovieDetails(id: number);
}

@Injectable({
  providedIn: 'root',
})
export class ApiService implements Services {
  constructor(private httpClient: HttpClient) {}
  public getMovies(value: string) {
    return this.httpClient.get<Movies[]>(
      'https://api.tvmaze.com/schedule/web?date=' + value + '&country=US'
    );
  }
  public getMovieDetails(id: number) {
    return this.httpClient.get<Details>('https://api.tvmaze.com/shows/' + id);
  }
}