import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Details } from '../../interfaces/details.interface';

interface MovieDetails {
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

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieDetails$ = this.apiService.getMovieDetails(this.id);
  }
}
