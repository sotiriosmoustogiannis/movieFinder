import { Injectable } from '@angular/core';
import { MovieItem } from '../../shared/models/movieItem';
import { MovieCollection } from '../../shared/models/movieCollection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private storageKey = 'movieCollections';

  getCollections(): MovieCollection[] {
    const collections = localStorage.getItem(this.storageKey);
    return collections ? JSON.parse(collections) : [];
  }

  saveCollection(collection: MovieCollection): void {
    const collections = this.getCollections();
    collections.push(collection);
    localStorage.setItem(this.storageKey, JSON.stringify(collections));
  }

  updateCollection(updatedCollection: MovieCollection): void {
    const collections = this.getCollections();
    const index = collections.findIndex(c => c.id === updatedCollection.id);
    if (index !== -1) {
      collections[index] = updatedCollection;
      localStorage.setItem(this.storageKey, JSON.stringify(collections));
    }
  }

  removeMovieFromCollection(collectionId: number, movieId: number): void {
    const collections = this.getCollections();
    const collection = collections.find(c => c.id === collectionId);
    if (collection) {
      collection.movies = collection.movies.filter((movie: MovieItem) => movie.id !== movieId);
      this.updateCollection(collection);
    }
  }

  addMoviesToCollection(collectionId: number, movieIds: number[], allMovies: MovieItem[]): void {
    const collections = this.getCollections();
    const collection = collections.find(c => c.id === collectionId);
    if (collection) {
      const moviesToAdd = allMovies.filter(movie => movieIds.includes(movie.id));
      collection.movies.push(...moviesToAdd);
      this.updateCollection(collection);
    }
  }
}
