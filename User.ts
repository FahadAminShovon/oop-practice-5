import { Film } from './Film';

export class User {
  #firstName: string;
  #lastName: string;
  #watchList: Film[] = [];
  #watchHistory: Film[] = [];
  #id: number;

  constructor(firstName: string, lastName: string, id: number) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  addMovieToWatchList(film: Film) {
    this.#watchList.push(film);
  }

  removeMovieFromWatchList(film: Film) {
    this.#watchList = this.#watchList.filter((movie) => movie !== film);
  }

  watchMovie(film: Film) {
    this.#watchHistory.push(film);
    this.removeMovieFromWatchList(film);
  }

  rateMovie(film: Film, rating: number) {
    film.addRating(rating, this);
  }

  get recommendations() {
    // dummy implementation
    // do not recommend films that the user has already watched
    const allRatings = this.#watchHistory.map((film) => film.ratings).flat();
    const recommendations = allRatings
      .filter((rating) => rating.ratedBy.id !== this.#id)
      .sort((a, b) => b.points - a.points)
      .map((rating) => rating.film);
    return recommendations;
  }
}
