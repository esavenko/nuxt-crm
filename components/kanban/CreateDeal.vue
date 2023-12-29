<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'
import { defineProps } from 'vue'
import { COLLECTION_DEALS, DB_ID } from '~/utils/app.constants'
import { IDeal } from '~/types/deals.types'

const isOpenForm = ref(false)
</script>

<template>
  <div class="text-center mb-2">
    <button
      class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]"
      @click="isOpenForm = !isOpenFrom"
    >
      <Icon
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="25"
      />
      <Icon
        v-if="!isOpenForm"
        name="radix-icons:plus-circled"
        class="fade-in-100 fade-out-0"
        size="25"
      />
    </button>
  </div>
</template>
