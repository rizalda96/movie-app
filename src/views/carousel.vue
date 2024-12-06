<template>
  <div class="relative w-full bg-gray-900">
    <Carousel :autoplay="5000" wrap-around ref="carouselRef" :items-to-show="2">
      <template #slides>
        <Slide v-for="slide in 3" :key="slide" class="px-9">
          <div class="mt-16 flex">
            <img :src="`https://picsum.photos/20${slide + 1}`" class="h-48 w-1/3 lg:h-80" />
            <div
              class="relative bg-black top-[20px] h-36 w-64 lg:top-[40px] lg:h-64 lg:w-[520px] text-white"
            >
              <div class="p-4 flex flex-col items-start gap-1">
                <div class="text-yellow-400 text-lg font-bold flex items-center">
                  <StarIcon class="size-6" aria-hidden="true" />
                  <span class="ml-2">5.0</span>
                </div>
                <h3 class="text-sm lg:text-xl font-bold">Judul</h3>
                <p class="text-xs lg:text-base">tahun • genre</p>
                <p class="text-xs lg:text-sm text-left lg:mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur
                  ratione expedita quibusdam provident vel doloremque corporis temporibus eveniet
                  deserunt dolorem voluptatem vero quidem quo modi officiis impedit nulla
                  praesentium quas nam sapiente.
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </template>

      <template #addons="{ currentSlide, slidesCount }">
        <div class="flex justify-center space-x-2 py-8">
          <span
            v-for="slide in 3"
            :key="slide"
            :class="[
              'h-2 rounded-full',
              currentSlide + 1 === slide ? 'bg-red-500 w-10' : 'bg-gray-500 w-2',
            ]"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { StarIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped></style>
