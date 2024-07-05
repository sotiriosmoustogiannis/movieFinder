import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieItem } from '../../shared/models/movieItem';

@Injectable({
  providedIn: 'root'
})
export class MovieStateService {
  private searchedMoviesSource = new BehaviorSubject<MovieItem[]>([]);
  private totalPagesSource = new BehaviorSubject<number>(1);
  private currentPageSource = new BehaviorSubject<number>(1);
  private currentQuerySource = new BehaviorSubject<string>('');

  searchedMovies$ = this.searchedMoviesSource.asObservable();
  totalPages$ = this.totalPagesSource.asObservable();
  currentPage$ = this.currentPageSource.asObservable();
  currentQuery$ = this.currentQuerySource.asObservable();

  setSearchedMovies(movies: MovieItem[]) {
    this.searchedMoviesSource.next(movies);
  }

  setTotalPages(totalPages: number) {
    this.totalPagesSource.next(totalPages);
  }

  setCurrentPage(currentPage: number) {
    this.currentPageSource.next(currentPage);
  }

  setCurrentQuery(query: string) {
    this.currentQuerySource.next(query);
  }
}
