const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "735319a204ff868ba4b284218c3fe33d";

class apiClient {
  async getMoviesList(genres_id, year, page = 1) {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genres_id}&year=${year}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getRecommendation(movie_id, page = 1) {
    const url = `${API_URL}/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getTopRated(page = 1) {
    const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&${page}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getTvShows(page = 1) {
    const url = `${API_URL}/tv/popular?language=en-US&page=${page}&api_key=${API_KEY}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getResults(query, page = 1) {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
}
export default new apiClient();
