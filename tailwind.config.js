/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
