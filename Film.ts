import { Rating } from './Rating';
import { User } from './User';

export class Film {
  name: string;
  ratings: Rating[] = [];

  constructor(name: string) {
    this.name = name;
    this.ratings = [];
  }

  addRating(rating: number, user: User) {
    const newRating = new Rating(rating, this, user);
    this.ratings.push(newRating);
  }

  updateRating(user: User, newRating: number) {
    const rating = this.ratings.find((rating) => rating.ratedBy.id === user.id);
    if (!rating) {
      throw new Error('Rating not found');
    }
    rating.updateRating(newRating);
  }
}
