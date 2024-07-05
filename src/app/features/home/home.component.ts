import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsModalComponent } from '../../shared/components/movie-details-modal/movie-details-modal.component';
import { SearchMovieFormComponent } from './components/search-movie-form/search-movie-form.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieStateService } from '../../core/services/movie.state.service';
import { MovieService } from '../../core/services/movie.service';
import { MovieItem } from '../../shared/models/movieItem';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    MovieDetailsModalComponent,
    SearchMovieFormComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchedMovies: MovieItem[] = [];
  totalPages: number = 1;
  currentPage: number = 1;
  currentQuery: string = '';
  selectedMovie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private movieStateService: MovieStateService
  ) {}

  ngOnInit(): void {
    this.movieStateService.searchedMovies$.subscribe(movies => this.searchedMovies = movies);
    this.movieStateService.totalPages$.subscribe(totalPages => this.totalPages = totalPages);
    this.movieStateService.currentPage$.subscribe(currentPage => this.currentPage = currentPage);
    this.movieStateService.currentQuery$.subscribe(currentQuery => this.currentQuery = currentQuery);

    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.loadMovieDetails(movieId);
      } else {
        this.selectedMovie = null;
      }
    });
  }

  handleSearchResults(data: any) {
    this.searchedMovies = data.results;
    this.totalPages = data.total_pages;
    this.currentPage = data.page;

    this.movieStateService.setSearchedMovies(this.searchedMovies);
    this.movieStateService.setTotalPages(this.totalPages);
    this.movieStateService.setCurrentPage(this.currentPage);
  }

  onSearch(query: string) {
    this.currentQuery = query;
    this.searchMovies(1);
    this.movieStateService.setCurrentQuery(this.currentQuery);
  }

  handlePageChange(page: number) {
    this.searchMovies(page);
  }

  searchMovies(page: number) {
    this.movieService.getMovies(this.currentQuery, page).subscribe(
      (data: any) => {
        this.handleSearchResults(data);
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  // openMovieDetails(movieId: number) {
  //   this.router.navigate(['/movie', movieId]);
  // }

  loadMovieDetails(movieId: string | null) {
    this.movieService.getMovieDetails(movieId).subscribe((data: any) => {
      this.selectedMovie = data;
    });
  }

  navigateToCollections() {
    this.router.navigate(['/collections']);
  }
}
