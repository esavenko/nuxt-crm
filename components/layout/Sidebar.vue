<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

const store = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  store.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto" />
    </NuxtLink>
    <button
      @click="logout"
      class="absolute top-5 right-3 transition-colors hover:text-primary">
      <Icon name="line-md:log-out" size="22" />
    </button>
    <LayoutMenu />
  </aside>
</template>