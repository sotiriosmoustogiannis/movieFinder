import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MovieItem } from '../../../shared/models/movieItem';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieListItemComponent } from '../../../shared/components/movie-list-item/movie-list-item.component';

@Component({
  selector: 'movie-collection-details',
  standalone: true,
  imports: [
    MovieListItemComponent,
    RouterModule,
    NgFor,
    NgIf
  ],
  templateUrl: './movie-collection-details.component.html',
  styleUrl: './movie-collection-details.component.css'
})
export class MovieCollectionDetailsComponent implements OnInit{
  collectionIndex: number = 0;
  collection: { title: string; description: string; movies: MovieItem[] } | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.collectionIndex = Number(params.get('id'));
      this.loadCollection();
    });
  }

  loadCollection(): void {
    const collections = JSON.parse(localStorage.getItem('collections') || '[]');
    this.collection = collections[this.collectionIndex];
  }

  removeMovie(movieIndex: number): void {
    if (this.collection) {
      this.collection.movies.splice(movieIndex, 1);
      const collections = JSON.parse(localStorage.getItem('collections') || '[]');
      collections[this.collectionIndex] = this.collection;
      localStorage.setItem('collections', JSON.stringify(collections));
    }
  }

  viewMovieDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }
}
