<template>
  <div v-if="store.detailMovies">
    <section class="hero">
      <div class="background relative">
        <img src="@images/hero-detail.svg" alt="Hero Detail" class="w-full h-full" />
        <div
          class="absolute bottom-0 w-full h-full bg-gradient-to-t from-gray-900 to-gray-400 opacity-70"
        ></div>
      </div>
      <div class="relative bottom-0 w-full h-20 bg-black -top-20 clear-both">
        <div class="hero-content absolute p-6 lg:px-8 -top-[150px] w-fit mx-auto">
          <div class="flex gap-7">
            <img
              :src="store.detailMovies.Poster"
              alt="Movie Poster"
              class="w-60 h-80 object-cover rounded-lg"
            />

            <div class="flex flex-col mt-7">
              <div class="header-info">
                <p class="text-sm text-gray-200">{{ store.detailMovies.Year }}</p>
                <h1 class="text-5xl font-semibold text-white">{{ store.detailMovies.Title }}</h1>
                <p class="text-sm text-gray-200">{{ store.detailMovies.Genre }}</p>
              </div>
              <div class="header-desc flex mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.75L6.16 20.5l1.12-6.51L2 9.34l6.58-.96L12 3l2.42 5.38 6.58.96-4.84 4.65 1.12 6.51L12 17.75z"
                  />
                </svg>
                <span class="text-3xl text-white font-semibold ml-1 mr-7">{{
                  store.detailMovies.imdbRating
                }}</span>
                <div class="grid grid-cols-5 divide-x divide-gray-400 text-center">
                  <div class="flex flex-col uppercase px-5">
                    <p class="text-base font-semibold text-gray-500">Users Score</p>
                    <p class="text-base text-white">
                      {{ store.detailMovies.imdbVotes }} User Votes
                    </p>
                  </div>
                  <div class="flex flex-col uppercase px-5">
                    <p class="text-base font-semibold text-gray-500">Status Realese</p>
                    <p class="text-base text-white">{{ store.detailMovies.Released }}</p>
                  </div>
                  <div class="flex flex-col uppercase px-5">
                    <p class="text-base font-semibold text-gray-500">Language</p>
                    <p class="text-base text-white">{{ store.detailMovies.Language }}</p>
                  </div>
                  <div class="flex flex-col uppercase px-5">
                    <p class="text-base font-semibold text-gray-500">Budget</p>
                    <p class="text-base text-white">-</p>
                  </div>
                  <div class="flex flex-col uppercase px-5">
                    <p class="text-base font-semibold text-gray-500">Production</p>
                    <p class="text-base text-white">{{ store.detailMovies.Production }}</p>
                  </div>
                </div>
              </div>
              <div class="overview">
                <h3 class="text-2xl font-semibold text-red-500 mt-7 mb-3">Overview</h3>
                <p class="text-sm">
                  {{ store.detailMovies.Plot }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="reviews min-h-16 mx-auto w-fit mt-28 p-6 lg:px-8">
      <h3 class="text-2xl font-semibold text-red-500 mt-7 mb-3 uppercase">Reviews</h3>
      <div class="flex gap-10">
        <CardReview />
        <CardReview />
      </div>
    </section>
    <section id="recomended-movies" class="bg-gray-800 p-6 lg:px-8">
      <h3 class="text-2xl font-semibold text-white mt-7 mb-10 uppercase">Recomended Movies</h3>
      <div class="grid grid-cols-5 gap-10">
        <MovieCard
          v-for="movie in 5"
          :key="movie"
          title="Batman: Arkham City"
          year="2011"
          type="movie"
          imdbId="tt1568322"
          posterUrl="https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie.store'
import CardReview from '@components/CardReview.vue'
import MovieCard from '@components/MovieCard.vue'

const route = useRoute()
const $http = inject('http')
const store = useMovieStore()

onMounted(() => {
  fetchDetail()
})

const fetchDetail = async () => {
  try {
    const { data } = await $http.get(import.meta.env.VITE_OMDB_URL, {
      params: {
        i: route.params.id,
      },
    })

    if (data.Response === 'True') store.setDetailMovies(data)
  } catch (error) {
    alert(error)
  }
}
</script>

<style lang="scss" scoped></style>
