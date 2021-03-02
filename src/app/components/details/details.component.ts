import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Details } from '../../interfaces/details.interface';

interface MovieDetails {
  loader: boolean;
  pageImages: HTMLCollectionOf<HTMLImageElement>;
  pageImagesArr: HTMLImageElement[];
  imagesCount: number;
  imagesLoaded: number;
  id: number;
  movieDetails$: Observable<Details[]>;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, MovieDetails {
  id: number;
  movieDetails$: Observable<Details[]>;
  loader: boolean = true;
  pageImages: HTMLCollectionOf<HTMLImageElement>;
  pageImagesArr: HTMLImageElement[];
  imagesCount: number;
  imagesLoaded: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieDetails$ = this.apiService.getMovieDetails(this.id);
  }

  ngAfterContentChecked() {
    this.imagesCheck();
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
