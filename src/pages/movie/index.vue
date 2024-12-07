<template>
  <div class="bg-gray-800 h-80">
    <div class="p-6 lg:px-8">
      <div class="py-20">
        <h2 class="text-3xl font-semibold relative inline-block text-white">
          <span class="absolute -top-2 left-0 w-2/3 h-1 bg-red-500"></span>
          Movies
        </h2>
      </div>
    </div>
  </div>

  <div class="bg-gray-900 relative">
    <div class="p-6 lg:px-8 flex gap-10 relative -top-28">
      <div class="card-filter w-1/4 h-fit bg-gray-950 rounded-md text-white p-4">
        <div class="flex flex-col divide-y divide-gray-500 gap-5">
          <div class="filter-dropdown">
            <h4 class="text-lg font-semibold mb-2">Sort Result By</h4>
            <SelectField :options="countries" id="popularity" />
          </div>
          <div class="filter-genre">
            <h4 class="text-lg font-semibold my-2">Genres</h4>

            <CheckboxField label="Action" label-right />
          </div>
        </div>
      </div>
      <div class="wrapper flex flex-col">
        <div class="grid grid-cols-4 gap-8">
          <MovieCard
            v-for="movie in store.movies"
            :key="movie.imdbID"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
            :imdbId="movie.imdbID"
            :posterUrl="movie.Poster"
          />
        </div>
        <div class="flex justify-center mt-14">
          <button
            class="bg-red-500 text-white px-4 py-2 rounded-full"
            @click="fetchMovies(store.movies.length / 10 + 1)"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie.store'
import CheckboxField from '@/components/form/CheckboxField.vue'
import SelectField from '@components/form/SelectField.vue'
import MovieCard from '@components/MovieCard.vue'

const countries = [{ value: '', label: 'Popularity' }]

const $http = inject('http')
const store = useMovieStore()
onMounted(() => {
  if (store.movies.length < 1) {
    fetchMovies()
  }
})
onUnmounted(() => (store.movies = []))

const fetchMovies = async (onPage = 1) => {
  try {
    setTimeout(async () => {
      const response = await $http.get(import.meta.env.VITE_OMDB_URL, {
        params: {
          s: 'batman',
          page: onPage,
        },
      })

      const { Response, Search } = response.data
      if (Response === 'True') {
        if (onPage === 1) {
          store.setMovies(Search)
        } else {
          store.setMovies([...store.movies, ...Search])
        }
      }
    }, 500)
  } catch (error) {
    alert(error)
  }
}
</script>

<style lang="scss" scoped></style>
