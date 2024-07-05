import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { searchMovieFormValidators } from '../../../../shared/validations/search-movie-form-validators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'search-movie-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './search-movie-form.component.html',
  styleUrl: './search-movie-form.component.css'
})
export class SearchMovieFormComponent {
  @Output() searchQuery = new EventEmitter<string>();
  searchMovieForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.searchMovieForm = this.fb.group({
      movieText: [
        '',
        [
          Validators.required,
          searchMovieFormValidators.minThreeChars,
          searchMovieFormValidators.alphanumeric
        ]
      ]
    });
  }

  searchMovies() {
    const query = this.searchMovieForm.value.movieText;
    this.searchQuery.emit(query);
    this.searchMovieForm.reset();
  }
}
