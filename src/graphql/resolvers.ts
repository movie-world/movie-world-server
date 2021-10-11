import { getMovie, getMovies, getSuggessions } from "./services";

const BASE_URL = "https://yts.mx/api/v2";

type TMovie = {
  movie_id: number;
};
type TMovies = {
  limit: number;
  minimum_rating: number;
};
const resolvers = {
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

export default resolvers;
