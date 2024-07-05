import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';
import { MovieCollectionsComponent } from './features/collections/movie-collections/movie-collections.component';
import { CreateMovieCollectionComponent } from './features/collections/create-movie-collection/create-movie-collection.component';
import { MovieCollectionDetailsComponent } from './features/collections/movie-collection-details/movie-collection-details.component';
import { MovieDetailsModalComponent } from './shared/components/movie-details-modal/movie-details-modal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: HomeComponent },  // Load HomeComponent with the movie modal
  { path: 'collections', component: MovieCollectionsComponent },
  { path: 'collections/create', component: CreateMovieCollectionComponent },
  { path: 'collection/:collectionId', component: MovieCollectionDetailsComponent },
  { path: 'collection/:collectionId/movie/:movieId', component: MovieDetailsModalComponent},
  { path: '**', component: NotFoundComponent }
];
