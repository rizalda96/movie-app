import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      'vue/multi-word-component-names': 0,
    }
  },

  {
    extends: [
      '.eslintrc-auto-import.json',
      'plugin:vue/vue3-recommended',
      'plugin:import/recommended',
      'plugin:promise/recommended',
      'plugin:sonarjs/recommended',
      'plugin:case-police/recommended',
      'plugin:regexp/recommended',

      // 'plugin:unicorn/recommended',
    ],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
];
