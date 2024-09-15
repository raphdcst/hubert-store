<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class=" flex flex-col min-h-screen h-full min-w-max">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />    <div class="grid grid-cols-2 items-center h-min w-full py-4 px-7">
      <h1 class="justify-self-start font-extrabold font-protest text-6xl align-middle">
        Hubert
      </h1>
      <Navbar class="justify-self-end" />
    </div>
    <div class="flex flex-col place-self-center my-20 w-3/4 max-w-[800px]">
      <h1 class="justify-center text-8xl font-bold">
        {{ error?.statusCode }}
      </h1>
      <NuxtLink class="h-10 w-40 my-3 rounded-lg" to="/">
        <Button class="bg-background text-black border-2 border-primary hover:bg-accent ease-in-out duration-300">
          Retourner à la page d'accueil
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
