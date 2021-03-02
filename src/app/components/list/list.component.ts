import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ApiService } from '../../api.service';
import { Movies } from '../../interfaces/movies.interface';

interface List {
  loader: boolean;
  pageImages: HTMLCollectionOf<HTMLImageElement>;
  pageImagesArr: HTMLImageElement[];
  imagesCount: number;
  imagesLoaded: number;
  moviesData: Movies[];
  genresData: string;
  genresList: string[];
  selectedGenre: string;
  filteredData: Movies[];
  selectedDate: string;
  setData(data: Movies[]): void;
  getGenres(): void;
  onFilterChange(value: string): void;
  onDateChange(value: string): void;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterContentChecked, List {
  moviesData: Movies[];
  genresData: string;
  genresList: string[];
  selectedGenre: string;
  filteredData: Movies[];
  selectedDate: string = '2021-02-04';
  loader: boolean = true;
  pageImages: HTMLCollectionOf<HTMLImageElement>;
  pageImagesArr: HTMLImageElement[];
  imagesCount: number;
  imagesLoaded: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovies(this.selectedDate).subscribe((data: Movies[]) => {
      this.setData(data);
    });
  }

  ngAfterContentChecked() {
    this.imagesCheck();
  }

  public setData(data: Movies[]) {
    this.moviesData = data;
    this.filteredData = this.moviesData;
    this.getGenres();
  }

  public getGenres() {
    this.genresData = '';
    for (let movie of this.moviesData) {
      this.genresData += movie._embedded.show.genres + ',';
    }
    this.genresData = Array.from(
      new Set(this.genresData.split(','))
    ).toString();
    this.genresList = this.genresData.split(',');
    this.genresList = this.genresList.filter(function (e) {
      return e;
    });
  }

  public onFilterChange(value: string) {
    if (value != '') {
      this.filteredData = this.moviesData.filter((item) =>
        item._embedded.show.genres.some(
          (r) => this.selectedGenre.indexOf(r) >= 0
        )
      );
    } else {
      this.filteredData = this.moviesData;
    }
  }

  public onDateChange(value: string) {
    this.loader = true;
    this.imagesLoaded = 0;
    this.imagesCheck();
    this.selectedGenre = '';
    this.selectedDate = value;
    this.apiService.getMovies(this.selectedDate).subscribe((data: Movies[]) => {
      this.setData(<Movies[]>data);
      if (data.length <= 0) this.loader = false;
    });
  }

  public imagesCheck() {
    this.pageImages = document.images;
    this.pageImagesArr = Array.from(document.images);
    this.imagesCount = this.pageImages.length;
  }

  public onImgLoad() {
    ++this.imagesLoaded;
    this.imagesCount = this.imagesCount - this.imagesLoaded;
    // console.log(this.imagesCount);
    if (this.imagesCount <= 0) this.loader = false;
  }
}