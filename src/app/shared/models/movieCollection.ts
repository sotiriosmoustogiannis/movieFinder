import { MovieItem } from "./movieItem";

export class MovieCollection {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public movies: MovieItem[]
    ) {}
  }