<template>
  <label
    v-if="label"
    :for="elementId"
    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <div v-if="prefix">
        <div v-if="prefixIcon">
          <component :is="prefixIcon" class="w-5 h-5 text-gray-500" />
        </div>
        <div v-else>
          {{ prefixText }}
        </div>
      </div>
    </div>
    <input
      v-bind="{
        ...$attrs,
        class: null,
        id: elementId,
      }"
      type="text"
      :id="elementId"
      class="block w-full p-4 ps-10 text-sm text-white border border-gray-900 rounded-lg bg-gray-900 focus:ring-gray-500 focus:border-gray-500"
    />
    <div v-if="suffix" class="absolute inset-y-0 end-2.5 flex items-center pe-3">
      <div v-if="suffixIcon">
        <component :is="suffixIcon" class="w-5 h-5 text-gray-500" />
      </div>
      <div v-else>
        {{ suffixText }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'InputField',
  inheritAttrs: false,
})

const elementId = computed(() => {
  const attrs = useAttrs()
  const _elementIdToken = attrs.id || attrs.label

  return _elementIdToken
    ? `input-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}`
    : undefined
})

const label = computed(() => useAttrs().label)

const props = defineProps({
  prefix: {
    type: Boolean,
    default: false,
  },
  prefixIcon: null,
  prefixText: {
    type: String,
    default: 'Prefix',
  },
  suffix: {
    type: Boolean,
    default: false,
  },
  suffixIcon: null,
  suffixText: {
    type: String,
    default: 'Suffix',
  },
})
</script>

<style lang="scss" scoped></style>
