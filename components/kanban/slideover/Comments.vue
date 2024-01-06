<script setup lang="ts">
import dayjs from 'dayjs'
import type { IDeal } from '@/types/deals.types'
import { useComments } from './useComments'
import { useCreateComment } from './useCreateComment'

const { data, refetch, isLoading } = useComments()
const { comment, writeComment } = useCreateComment({ refetch })

const card = data as unknown as IDeal
</script>

<template>
  <UiInput
    placeholder="Оставьте комментарий"
    v-model="comment"
    @keyup.enter="writeComment"
  />

  <UiSkeleton
    v-if="isLoading"
    class="w-full h-[76px] rounded mt-5"
  />
  <div v-else-if="card">
    <div
      v-for="comment in card?.comments"
      :key="comment.$id"
      class="flex items-start mt-5"
    >
      <Icon
        name="radix-icons:chat-bubble"
        class="mr-3 mt-1"
        size="20"
      />
      <div class="border-border bg-black/20 rounded p-3 w-full">
        <div class="mb-2 text-sm">
          Комментарий {{ dayjs(comment.$createdAt).format('HH:mm') }}
        </div>
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>
