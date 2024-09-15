<script lang="ts" setup>
import prisma from '~/lib/prisma'

const { params } = useRoute()

const restaurant = await prisma.restaurant.findFirst({
  where: {
    id: params.id as string
  },
  select: {
    name: true,
    shortDescription: true,
    longDescription: true,
    menu: {
      select: {
        items: true
      }
    }
  }
})
</script>

<template>
  <div class=" max-w-screen-xl">
    <h1>{{ restaurant?.name }}</h1>
    <p>{{ restaurant?.shortDescription }}</p>
    <p>{{ restaurant?.longDescription }}</p>
    <p>{{ restaurant?.menu }}</p>
  </div>
</template>
