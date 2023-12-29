<script setup lang="ts">
import { cn } from '@/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3
    :class="
      cn('text-xl font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </h3>
</template>
