<template>
  <label
    v-if="label != ''"
    :for="elementId"
    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    {{ label }}
  </label>
  <select
    :id="elementId"
    class="w-full p-4 text-sm text-white border border-gray-900 rounded-lg bg-gray-900 focus:ring-gray-500 focus:border-gray-500"
    v-bind="{
      ...$attrs,
      class: null,
      id: elementId,
    }"
  >
    <option
      v-if="props.options && props.options.length > 0"
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
defineOptions({
  name: 'SelectField',
  inheritAttrs: false,
})

const elementId = computed(() => {
  const attrs = useAttrs()
  const _elementIdToken = attrs.id || props.label

  return _elementIdToken
    ? `select-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}`
    : undefined
})

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: [],
})
</script>

<style lang="scss" scoped></style>
