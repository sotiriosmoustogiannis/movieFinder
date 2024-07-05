import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MovieItem } from '../../../shared/models/movieItem';

@Component({
  selector: 'movie-collections',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './movie-collections.component.html',
  styleUrl: './movie-collections.component.css'
})
export class MovieCollectionsComponent implements OnInit {
  collections: { title: string; description: string; movies: MovieItem[] }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections(): void {
    const collections = localStorage.getItem('collections');
    this.collections = collections ? JSON.parse(collections) : [];
  }

  viewCollection(collectionIndex: number): void {
    this.router.navigate(['/collection', collectionIndex]);
  }

  navigateToCreate(): void {
    this.router.navigate(['/collections/create']);
  }
}
