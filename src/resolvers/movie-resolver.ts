import { getMovie, getMovies, getSuggessions } from "../service/movie-services";

type TMovie = {
  movie_id: number;
};
type TMovies = {
  limit: number;
  minimum_rating: number;
};

const movieResolver = {
  Query: {
    movie: async (_: any, { movie_id }: TMovie) => {
      return await getMovie(movie_id);
    },
    movies: async (_: any, { limit, minimum_rating }: TMovies) => {
      return await getMovies(limit, minimum_rating);
    },
    suggesions: async (_: any, { movie_id }: TMovie) => {
      return await getSuggessions(movie_id);
    },
  },
};

export default movieResolver;
