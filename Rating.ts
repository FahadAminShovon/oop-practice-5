import { Film } from './Film';
import { User } from './User';

export class Rating {
  #points: number;
  #film: Film;
  #ratedBy: User;

  constructor(points: number, film: Film, ratedBy: User) {
    this.#points = points;
    this.#film = film;
    this.#ratedBy = ratedBy;
  }

  updateRating(newRating: number) {
    this.#points = newRating;
  }

  get ratedBy() {
    return this.#ratedBy;
  }

  get points() {
    return this.#points;
  }

  get film() {
    return this.#film;
  }
}
