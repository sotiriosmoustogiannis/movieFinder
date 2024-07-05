import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MovieDetailsComponent } from '../../../features/home/components/movie-details/movie-details.component';
import { MovieService } from '../../../core/services/movie.service';

@Component({
  selector: 'movie-details-modal',
  standalone: true,
  imports: [
    MovieDetailsComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './movie-details-modal.component.html',
  styleUrl: './movie-details-modal.component.css'
})
export class MovieDetailsModalComponent {
  @Input() movie: any;
  rating: number = 0;
  ratingMessage: string = '';
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private movieService: MovieService 
  ) {}

  closeModal() {
    this.movie = null;
    this.router.navigate(['/']);
  }

  submitRating() {
    this.movieService.getSessionId().subscribe((response: any) => {
      const sessionId = response.guest_session_id;
      this.movieService.postRating(this.movie.id, this.rating, sessionId).subscribe(
        (res: any) => {
          this.ratingMessage = 'Rating submitted successfully!';
        },
        (err: any) => {
          this.ratingMessage = 'Failed to submit rating.';
        }
      );
    });
  }
}
