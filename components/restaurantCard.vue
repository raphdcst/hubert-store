<script lang="ts" setup>
import type { Restaurant } from '@prisma/client'
import { ArrowBigRight, MoveRight } from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const props = defineProps<{
  restaurant: Restaurant
}>()

const link = `/restaurants/${props.restaurant.id}`
</script>

<template>
  <Card :restaurant="props" class="h-[460px]">
    <CardHeader>
      <CardTitle class="underline decoration-2 decoration-primary">
        {{ restaurant.name }}
      </CardTitle>
      <CardDescription class="h-[60px]">
        {{ restaurant.shortDescription }}
      </CardDescription>
    </CardHeader>
    <CardContent class="h-[264px]">
      {{ restaurant.longDescription }}
    </CardContent>
    <CardFooter>
      <NuxtLink :to="link" class="flex rounded-md ring-2 ring-primary hover:bg-accent px-2 py-1">
        <MoveRight class="mr-2" />
        Voir le restaurant
      </NuxtLink>
    </CardFooter>
  </Card>
</template>
