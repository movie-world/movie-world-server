import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2";

export const getMovie = async (movie_id: number) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(`${BASE_URL}/movie_details.json`, {
    params: {
      movie_id,
    },
  });
  return movie;
};

export const getMovies = async (limit: number, minimum_rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(`${BASE_URL}/list_movies.json`, {
    params: {
      limit,
      minimum_rating,
      sort_by: "year",
      order_by: "desc",
    },
  });
  return movies;
};

export const getSuggessions = async (movie_id: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(`${BASE_URL}/movie_suggestions.json`, {
    params: {
      movie_id,
    },
  });
  return movies;
};
