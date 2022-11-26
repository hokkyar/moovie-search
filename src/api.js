import axios from "axios"

export const getMovies = async () => {
  const movies = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`)
  return movies.data.results
}

export const searchMovie = async (query) => {
  const searchResult = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?page=1&api_key=${process.env.REACT_APP_APIKEY}&query=${query}`)
  return searchResult.data.results
}