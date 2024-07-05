import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieListItemComponent } from '../../../../shared/components/movie-list-item/movie-list-item.component';
import { MovieItem } from '../../../../shared/models/movieItem';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    RouterModule,
    NgFor,
    NgIf
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies: MovieItem[] = [];
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Output() movieSelect = new EventEmitter<number>();

  changePage(page: number) {
    this.pageChange.emit(page);
  }

  selectMovie(movieId: number) {
    this.movieSelect.emit(movieId);
  }
}
