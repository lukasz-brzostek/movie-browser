import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }
   public getMovies(value){
      return this.httpClient.get('https://api.tvmaze.com/schedule/web?date='+value+'&country=US');
    }
    public getMovieDetails(id){
      return this.httpClient.get('https://api.tvmaze.com/shows/'+id);
    }
}