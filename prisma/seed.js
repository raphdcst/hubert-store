import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const data = await prisma.restaurant.create({
    data: {
      id: 'le-gourmet-parisien',
      name: 'Le Gourmet Parisien',
      shortDescription: 'Un restaurant chic offrant une cuisine française raffinée avec des produits de saison.',
      longDescription: 'Un restaurant chic et sophistiqué, Le Gourmet Parisien met à l\'honneur la haute gastronomie française avec des plats élégants et des produits de saison. Chaque plat est minutieusement préparé pour offrir une expérience culinaire inoubliable. Le chef privilégie les produits locaux et bio, avec une touche d\'innovation dans les recettes traditionnelles françaises.',
      menu: {
        create: {
          items: {
            create:
                [
                  { id: '1-1', name: 'Foie gras de canard au torchon', ingredients: 'foie gras de canard, confit d’oignon, brioche maison', price: 28 },
                  { id: '1-2', name: 'Tartelette de champignons des bois', ingredients: 'cèpes, girolles, truffe noire, crème légère au persil', price: 22 },
                  { id: '1-3', name: 'Oeuf parfait à la truffe', ingredients: 'oeuf bio, émulsion de truffe noire, chips de panais', price: 24 },
                  { id: '1-4', name: 'Soupe à l’oignon gratinée', ingredients: 'oignons caramélisés, bouillon de volaille, gruyère', price: 18 },
                  { id: '1-5', name: 'Escargots de Bourgogne', ingredients: 'escargots, beurre persillé, ail, persil', price: 26 },
                  { id: '1-6', name: 'Tartare de saumon', ingredients: 'saumon sauvage, avocat, citron vert, câpres', price: 20 },
                  { id: '1-7', name: 'Filet de bœuf Rossini', ingredients: 'filet de bœuf, foie gras poêlé, sauce périgourdine', price: 48 },
                  { id: '1-8', name: 'Daurade royale grillée', ingredients: 'daurade, purée de céleri, émulsion au citron confit', price: 36 },
                  { id: '1-9', name: 'Risotto à la truffe noire', ingredients: 'riz carnaroli, truffe noire, parmesan', price: 42 },
                  { id: '1-10', name: 'Soufflé au Grand Marnier', ingredients: 'soufflé, crème anglaise au Grand Marnier', price: 18 },
                  { id: '1-11', name: 'Tarte Tatin', ingredients: 'pommes caramélisées, glace vanille maison', price: 16 }
                ]
          }

        }
      }
    }
  })
}

try {
  await seed()
  await prisma.$disconnect()
}
catch (e) {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
}
