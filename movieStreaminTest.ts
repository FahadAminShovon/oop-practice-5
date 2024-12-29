import { Film } from './Film';
import { User } from './User';

const user1 = new User('Alice ', 'Doe', 1);
const user2 = new User('Bob', 'Doe', 2);

const film1 = new Film('Inception');
const film2 = new Film('The Dark Knight');
const film3 = new Film('Interstellar');

user1.addMovieToWatchList(film1);
user1.addMovieToWatchList(film2);
user1.addMovieToWatchList(film3);

user2.addMovieToWatchList(film1);
user2.addMovieToWatchList(film2);
user2.addMovieToWatchList(film3);

user1.watchMovie(film1);
user1.rateMovie(film1, 5);
user1.watchMovie(film2);
user1.rateMovie(film2, 4);
user1.watchMovie(film3);
user1.rateMovie(film3, 3);

user2.watchMovie(film1);
user2.rateMovie(film1, 4);
user2.watchMovie(film2);
user2.rateMovie(film2, 3);

console.log(user1.recommendations);
console.log(user2.recommendations);
