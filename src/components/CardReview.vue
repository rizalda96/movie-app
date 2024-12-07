<template>
  <div class="bg-gray-100 p-5 rounded-md shadow-md">
    <!-- header -->
    <div class="flex justify-between items-center">
      <div class="profile-card flex gap-3 items-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          alt="Profile Image"
          class="w-10 h-10 rounded-full"
        />
        <div class="">
          <p class="text-sm font-semibold">John Doe</p>
          <p class="text-xs text-gray-400">2 hours ago</p>
        </div>
      </div>
      <div class="rating flex gap-0 bg-gray-300 p-2 rounded-md">
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
        <span class="text-4xl font-semibold">6.5</span>
      </div>
    </div>

    <!-- body -->
    <div class="mt-3 max-h-40">
      <p class="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur ratione expedita
        quibusdam provident vel doloremque corporis temporibus eveniet deserunt dolorem voluptatem
        vero quidem quo modi officiis impedit nulla praesentium quas nam sapiente.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
