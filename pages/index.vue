<script setup lang="ts">
import type { Restaurant } from '@prisma/client'
import RestaurantCard from '~/components/restaurantCard.vue'
import prisma from '~/lib/prisma'

const data = await prisma.restaurant.findMany() as Restaurant[]
</script>

<template>
  <div class="flex flex-col place-items-center">
    <ContentDoc class="flex mt-20 mb-10 w-3/4 max-w-[800px] text-center text-xl" />
    <div class="grid grid-cols-3 gap-3 w-4/5 max-w-[1400px] mt-3 mb-20 justify-center">
      <RestaurantCard v-for="restaurant in data" :key="restaurant.id" :restaurant="restaurant" />
    </div>
  </div>
</template>
