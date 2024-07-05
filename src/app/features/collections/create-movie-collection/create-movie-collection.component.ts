import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'create-movie-collection',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    NgIf
  ],
  templateUrl: './create-movie-collection.component.html',
  styleUrl: './create-movie-collection.component.css'
})
export class CreateMovieCollectionComponent {
  collectionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.collectionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.collectionForm.valid) {
      const collections = JSON.parse(localStorage.getItem('collections') || '[]');
      collections.push(this.collectionForm.value);
      localStorage.setItem('collections', JSON.stringify(collections));
      this.router.navigate(['/collections']);
    }
  }
}
