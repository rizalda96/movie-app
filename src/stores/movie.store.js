export const useMovieStore = defineStore({
  id: 'movie',
  state: () => ({
    movies: [],
    discovers: [],
    detailMovies: null
  }),
  actions: {
    setMovies(movies) {
      this.movies = movies
    },
    setDiscovers(movies) {
      this.discovers = movies
    },
    setDetailMovies(movie) {
      this.detailMovies = movie
    }
  },
  getters: {
  },
})

