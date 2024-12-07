<template>
  <div class="bg-gray-900">
    <footer class="inset-x-0 z-50">
      <div class="py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-3">
          <p class="text-center text-sm text-gray-400">Made with VueJS and TailwindCSS</p>
        </div>
        <div class="mt-8 md:mt-0 flex justify-center space-x-6 md:order-2">
          <img src="@images/logo-grey.svg" alt="Logo Grey" />
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-sm text-gray-400">
            &copy; 2021 MoovieTime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline'
</script>

<style lang="scss" scoped></style>
