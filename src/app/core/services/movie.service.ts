import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http : HttpClient) { }

  getMovies(query : string, page: number = 1) {
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`);
  }

  getMovieDetails(id: any) {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getSessionId() {
    return this.http.get(`${this.apiUrl}/authentication/guest_session/new?api_key=${this.apiKey}`)
  }

  postRating(movieId: number, rating: number, sessionId: string) {
    console.log(sessionId, movieId, rating)
    const url = `${this.apiUrl}/movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${sessionId}`;
    const body = {
      value: rating
    };
    return this.http.post(url, body, { headers: { 'Content-Type': 'application/json;charset=utf-8' } });
  }
}
