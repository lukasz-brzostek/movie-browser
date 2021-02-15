import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  moviesData: any[];
  genresData: string;
  genresList: any[];
  selectedGenre: string;
  filteredData: any[];
  selectedDate: string = '2021-02-04';

  constructor(private apiService: ApiService) { }
 
  ngOnInit() {
      this.apiService.getMovies(this.selectedDate).subscribe((data)=>{
      this.setData(data);
    });
  }

  private setData(data) {
      this.moviesData = data;
      this.filteredData = this.moviesData;
      this.getGenres();
  }

  public getGenres() {
      this.genresData = "";
      for (let movie of this.moviesData) {
      this.genresData += movie._embedded.show.genres + ',';
    }
      this.genresData = Array.from(new Set(this.genresData.split(','))).toString();
      this.genresList = this.genresData.split(',');
      this.genresList = this.genresList.filter(function(e){return e}); 
  }

  public onFilterChange(value) {
    if (value != "") {
      for (let movie of this.moviesData) {
      this.filteredData = this.moviesData.filter((item) => item._embedded.show.genres.some(r=> this.selectedGenre.indexOf(r) >= 0));
      } 
    } else {
      this.filteredData = this.moviesData;
    }
  }

  public onDateChange(value) {
      this.selectedGenre = '';
      this.selectedDate = value;
      this.apiService.getMovies(this.selectedDate).subscribe((data)=>{
      this.setData(data);
    });
  }
 
}