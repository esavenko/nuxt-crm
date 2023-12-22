<script setup lang="ts">
useHead({
  title: 'Login | CRM system'
})

const email = ref('')
const password = ref('')
const name = ref('')
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput
          v-model="email"
          placeholder="Email"
          type="email"
          class="mb-3"
        />
        <UiInput
          v-model="password"
          placeholder="Password"
          type="password"
          class="mb-3"
        />
        <UiInput
          v-model="name"
          placeholder="Name"
          type="name"
          class="mb-3"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type='button'>Login</UiButton>
          <UiButton type='button'>Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>