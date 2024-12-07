<template>
  <div class="flex flex-col relative -top-28">
    <div class="group relative w-56 h-80 overflow-hidden bg-gray-900 rounded-lg">
      <img
        src="https://picsum.photos/800/600"
        alt="Movie Poster"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute top-2 right-2 w-12 h-8 bg-black bg-opacity-70 text-white flex items-center justify-center rounded-md"
      >
        7.0
      </div>

      <!-- Hover -->
      <div
        class="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.75L6.16 20.5l1.12-6.51L2 9.34l6.58-.96L12 3l2.42 5.38 6.58.96-4.84 4.65 1.12 6.51L12 17.75z"
            />
          </svg>
          <span class="text-lg font-semibold">6.5</span>
        </div>
        <p class="mt-2 text-sm">Action</p>
        <button
          class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          VIEW
        </button>
      </div>
    </div>

    <!-- Movie Info -->
    <div class="mt-1">
      <h2 class="text-base font-semibold text-white">Judul Film</h2>
      <p class="text-sm text-gray-200">Tahun • Genre</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
