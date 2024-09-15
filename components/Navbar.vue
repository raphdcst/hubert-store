<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Le Gourmet Parisien',
    href: '/legourmetparisien',
    description: 'Un restaurant chic offrant une cuisine française raffinée avec des produits de saison.'
  },
  {
    title: 'La Trattoria Napoli',
    href: '/latrattorianapoli',
    description: 'Savourez des plats italiens authentiques avec des pâtes fraîches et des pizzas au feu de bois.'
  },
  {
    title: 'Sushi Zen',
    href: '/sushizen',
    description: 'Un havre de paix pour les amateurs de sushi avec des produits frais et des présentations élégantes.'
  },
  {
    title: 'El Asador',
    href: '/elasadorgrill',
    description: 'Restaurant grill argentin servant des viandes succulentes cuites à la perfection.'
  },
  {
    title: 'Curry House',
    href: '/curryhouse',
    description: 'Un voyage épicé à travers la cuisine indienne avec des plats riches en saveurs.'
  },
  {
    title: 'The Vegan Spot',
    href: '/theveganspot',
    description: 'Un restaurant moderne proposant des plats végétaliens créatifs et savoureux.'
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="border-2 border-primary">
          Nos services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[450px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6">
                  <div class="mb-2 mt-4 text-lg font-protest">
                    Hubert
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Un service de livraison de qualité, rapide et efficace et respectueux du droit des travailleurs
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/history"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Notre histoire</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Retour à Lyon, là où tout a commencé.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/about-us"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Le réseau</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Un service disponible partout en France.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/feedbacks"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Nous contacter</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Partagez vos avis et commentaires.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="border-2 border-primary">
          La sélection
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[450px] ">
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink class="border-2 border-primary rounded-lg" href="/signin" :class="navigationMenuTriggerStyle()">
          Se connecter / s'incrire
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
