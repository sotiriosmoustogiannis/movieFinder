import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { SearchMovieFormComponent } from './features/home/components/search-movie-form/search-movie-form.component';
import { MovieListComponent } from './features/home/components/movie-list/movie-list.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MovieListComponent,
    SearchMovieFormComponent,
    HomeComponent,
    MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
