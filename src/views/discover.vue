<template>
  <div class="bg-gray-800 h-80">
    <div class="p-6 lg:px-8">
      <div class="flex justify-between items-center py-28">
        <h2 class="text-3xl font-semibold relative inline-block text-white">
          <span class="absolute -top-2 left-0 w-2/3 h-1 bg-red-500"></span>
          Discover Movies
        </h2>
        <!-- Sort Buttons -->
        <div class="space-x-8">
          <button class="bg-red-500 text-white px-4 py-2 rounded-full">Popularity</button>
          <button class="bg-gray-700 text-white px-4 py-2 rounded-full">Release Date</button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900 relative">
    <div class="p-6 lg:px-8">
      <div class="grid grid-cols-5 gap-5">
        <MovieCard v-for="movie in 10" :key="movie" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MovieCard from '@components/MovieCard.vue'
</script>

<style lang="scss" scoped></style>
