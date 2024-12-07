<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Carousel />
    <Discover />
  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie.store'
import Carousel from '@views/carousel.vue'
import Discover from '@views/discover.vue'

const $http = inject('http')
const store = useMovieStore()
onMounted(() => {
  if (store.discovers.length < 1) {
    fetchDiscovers()
  }
})
onUnmounted(() => (store.discovers = []))

const fetchDiscovers = async () => {
  try {
    const response = await $http.get(import.meta.env.VITE_OMDB_URL, {
      params: {
        s: 'batman',
        page: 1,
      },
    })

    const { Response, Search } = response.data
    if (Response === 'True') store.setDiscovers(Search)
  } catch (error) {
    alert(error)
  }
}
</script>

<style lang="scss" scoped></style>
