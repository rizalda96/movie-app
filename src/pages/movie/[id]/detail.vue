<template>
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
            src="https://picsum.photos/800/600"
            alt="Movie Poster"
            class="w-60 h-80 object-cover rounded-lg"
          />

          <div class="flex flex-col mt-7">
            <div class="header-info">
              <p class="text-sm text-gray-200">2020</p>
              <h1 class="text-5xl font-semibold text-white">Wonder Woman 1984</h1>
              <p class="text-sm text-gray-200">Action, Adventure</p>
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
              <span class="text-3xl text-white font-semibold ml-1 mr-7">6.5</span>
              <div class="grid grid-cols-5 divide-x divide-gray-400 text-center">
                <div class="flex flex-col uppercase px-5">
                  <p class="text-base font-semibold text-gray-500">Users Score</p>
                  <p class="text-base text-white">333 User Votes</p>
                </div>
                <div class="flex flex-col uppercase px-5">
                  <p class="text-base font-semibold text-gray-500">Status</p>
                  <p class="text-base text-white">Realese</p>
                </div>
                <div class="flex flex-col uppercase px-5">
                  <p class="text-base font-semibold text-gray-500">Language</p>
                  <p class="text-base text-white">English</p>
                </div>
                <div class="flex flex-col uppercase px-5">
                  <p class="text-base font-semibold text-gray-500">Budget</p>
                  <p class="text-base text-white">wkwk</p>
                </div>
                <div class="flex flex-col uppercase px-5">
                  <p class="text-base font-semibold text-gray-500">Production</p>
                  <p class="text-base text-white">wkwk</p>
                </div>
              </div>
            </div>
            <div class="overview">
              <h3 class="text-2xl font-semibold text-red-500 mt-7 mb-3">Overview</h3>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae,
                doloribus ipsum dolore odio, dolorem nam iusto accusantium totam possimus eligendi
                mollitia alias quod hic suscipit voluptate non cum voluptatum, nihil maiores itaque
                accusamus saepe error dolores. Distinctio reiciendis incidunt quas necessitatibus
                accusamus! Sapiente iusto dolor, laudantium atque incidunt quam odio? Ut
                perspiciatis obcaecati voluptatibus mollitia sapiente quam harum et cumque sequi
                recusandae? Qui omnis quidem labore! In atque, molestiae impedit expedita dolores
                saepe doloribus soluta nam labore, quod temporibus magni ex magnam similique nobis
                ipsa, vitae mollitia. Aspernatur quibusdam quisquam nihil beatae aliquid quam
                quaerat deserunt harum tempore ratione.
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
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  </section>
</template>

<script setup>
import CardReview from '@components/CardReview.vue'
import MovieCard from '@components/MovieCard.vue'
</script>

<style lang="scss" scoped></style>
