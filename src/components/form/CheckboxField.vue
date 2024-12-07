<template>
  <div class="flex items-center justify-between gap-3">
    <input
      v-bind="{
        ...$attrs,
        class: null,
        id: elementId,
      }"
      type="checkbox"
      :class="`w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 ${
        props.labelRight ? 'order-2' : 'order-1'
      }`"
    />
    <label
      v-if="props.label != ''"
      :for="elementId"
      :class="`text-sm font-medium text-white ${props.labelRight ? 'order-1' : 'order-2'}`"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CheckboxField',
  inheritAttrs: false,
})

const elementId = computed(() => {
  const attrs = useAttrs()
  const _elementIdToken = attrs.id || props.label

  return _elementIdToken
    ? `checkbox-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}`
    : undefined
})

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  labelRight: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped></style>
