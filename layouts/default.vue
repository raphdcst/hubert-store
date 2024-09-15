<script lang="ts" setup>

</script>

<template>
  <div class=" flex flex-col min-h-screen h-full min-w-max">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />    <div class="grid grid-cols-2 items-center h-min w-full py-4 px-7">
      <h1 class="justify-self-start font-extrabold font-protest text-6xl align-middle">
        Hubert
      </h1>
      <Navbar class="justify-self-end" />
    </div>
    <slot />
  </div>
</template>
