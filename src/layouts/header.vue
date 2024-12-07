<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-gray-800">
    <header class="inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex gap-x-20 items-center">
          <router-link :to="{ name: 'root' }" class="-m-1.5 p-1.5">
            <span class="sr-only">Movie Time</span>
            <img class="h-8 w-auto" src="@images/logo.svg" alt="Logo Image" />
          </router-link>
          <div class="min-w-[50vw]">
            <InputField
              id="search"
              placeholder="Search for a movie or tv show"
              prefix
              :prefix-icon="FilmIcon"
              suffix
              :suffix-icon="MagnifyingGlassIcon"
            />
          </div>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 uppercase">
          <a href="#" class="flex gap-2 text-sm/6 font-semibold text-white hover:text-gray-300">
            <RectangleGroupIcon class="size-6" aria-hidden="true" />
            Categories
          </a>
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="text-sm/6 font-semibold text-white hover:text-gray-300"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Movie Time</span>
              <img class="h-8 w-auto" src="@images/logo.svg" alt="Logo Image" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-white"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="flex flex-col space-y-2 py-6">
                <a
                  href="#"
                  class="flex gap-2 text-sm/6 font-semibold text-white hover:text-gray-300"
                >
                  <RectangleGroupIcon class="size-6" aria-hidden="true" />
                  Categories
                </a>
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="text-sm/6 font-semibold text-white hover:text-gray-300"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import InputField from '@components/form/InputField.vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  RectangleGroupIcon,
  FilmIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Movies', to: 'movie' },
  { name: 'TV Shows', to: '#' },
  { name: 'Login', to: '#' },
]

const mobileMenuOpen = ref(false)
</script>
