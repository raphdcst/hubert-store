import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const leGourmetParisien = await prisma.restaurant.create({
    data:
    {
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
    },
  })

  const laTrattoriaNapoli = await prisma.restaurant.create({
    data:
    {
      id: 'la-trattoria-napoli',
      name: 'La Trattoria Napoli',
      shortDescription: 'Savourez des plats italiens authentiques avec des pâtes fraîches et des pizzas au feu de bois.',
      longDescription: 'Situé au cœur de la ville, La Trattoria Napoli est un restaurant italien authentique qui recrée l’ambiance chaleureuse de Naples. Ici, on respecte les traditions avec des plats familiaux préparés avec des ingrédients frais, des pâtes faites maison et des pizzas cuites au feu de bois.',
      menu: {
        create: {
          items: {
            create: [
              { id: '2-1', name: 'Antipasti misti', ingredients: 'olives, tomates séchées, charcuteries italiennes, mozzarella di bufala', price: 18 },
              { id: '2-2', name: 'Carpaccio de bœuf', ingredients: 'bœuf, roquette, parmesan, huile d’olive', price: 22 },
              { id: '2-3', name: 'Burrata crémeuse', ingredients: 'burrata, tomates anciennes, basilic frais, huile d\'olive extra vierge', price: 20 },
              { id: '2-4', name: 'Fritto misto', ingredients: 'calamars frits, crevettes, sauce citronnée', price: 24 },
              { id: '2-5', name: 'Bruschetta al pomodoro', ingredients: 'pain grillé, tomates, ail, basilic', price: 15 },
              { id: '2-6', name: 'Tagliatelle al tartufo', ingredients: 'pâtes fraîches maison, crème, truffe noire', price: 32 },
              { id: '2-7', name: 'Pizza Margherita', ingredients: 'tomates San Marzano, mozzarella di bufala, basilic', price: 18 },
              { id: '2-8', name: 'Osso Buco alla Milanese', ingredients: 'jarret de veau, sauce tomate, gremolata', price: 38 },
              { id: '2-9', name: 'Tiramisu classique', ingredients: 'crème mascarpone, café, cacao', price: 12 },
              { id: '2-10', name: 'Panna cotta aux fruits rouges', ingredients: 'panna cotta, coulis de fruits rouges', price: 10 }
            ]
          }
        }
      }
    }
  })

  const sushiZen = await prisma.restaurant.create({
    data:
    {
      id: 'sushi-zen',
      name: 'Sushi Zen',
      shortDescription: 'Un havre de paix pour les amateurs de sushi avec des produits frais et des présentations élégantes.',
      longDescription: 'Sushi Zen est une véritable ode à la finesse et à l’élégance de la cuisine japonaise. Chaque plat est conçu pour être un équilibre parfait de saveurs et de textures, mettant en valeur des ingrédients d’une fraîcheur exceptionnelle.',
      menu: {
        create: {
          items: {
            create:
            [
              { id: '3-1', name: 'Miso shiru', ingredients: 'soupe miso, tofu, algues, oignons verts', price: 10 },
              { id: '3-2', name: 'Sashimi moriawase', ingredients: 'assortiment de sashimis : saumon, thon, daurade', price: 28 },
              { id: '3-3', name: 'Edamame', ingredients: 'haricots de soja salés', price: 8 },
              { id: '3-4', name: 'Tempura de crevettes', ingredients: 'crevettes en tempura, sauce soja', price: 22 },
              { id: '3-5', name: 'Assortiment de sushis', ingredients: '10 pièces : saumon, thon, crevettes, daurade', price: 35 },
              { id: '3-6', name: 'Chirashi', ingredients: 'bol de riz vinaigré, sashimi de saumon et thon, avocat', price: 30 },
              { id: '3-7', name: 'Tataki de thon', ingredients: 'thon mariné, sésame grillé, sauce ponzu', price: 26 },
              { id: '3-8', name: 'Mochi glacé', ingredients: 'pâte de riz, glace au matcha, haricots rouges', price: 12 },
              { id: '3-9', name: 'Cheesecake au yuzu', ingredients: 'cheesecake, coulis au yuzu', price: 14 },
              { id: '3-10', name: 'Glace au thé vert matcha', ingredients: 'glace maison au thé vert', price: 8 }
            ]
          }

        }
      }
    },
  })

  const elAsador = await prisma.restaurant.create({
    data:
    {
      id: 'el-asador',
      name: 'El Asador',
      shortDescription: 'Restaurant grill argentin servant des viandes succulentes cuites à la perfection.',
      longDescription: 'El Asador est l’adresse idéale pour les amateurs de viandes grillées à la perfection. Ce grill argentin propose des viandes d’exception, cuites au feu de bois, avec des accompagnements savoureux. L’ambiance rustique et chaleureuse rappelle les traditions des asados argentins.',
      menu: {
        create: {
          items: {
            create:
            [
              { id: '4-1', name: 'Empanadas argentinas', ingredients: 'empanadas farcies au bœuf, olives, œufs', price: 12 },
              { id: '4-2', name: 'Chorizo criollo grillé', ingredients: 'chorizo argentin grillé, chimichurri', price: 14 },
              { id: '4-3', name: 'Provoleta fondante', ingredients: 'provolone grillé, origan, huile d’olive', price: 18 },
              { id: '4-4', name: 'Bife de lomo', ingredients: 'filet de bœuf argentin, grillé à la perfection', price: 46 },
              { id: '4-5', name: 'Asado de tira', ingredients: 'travers de bœuf grillé, chimichurri', price: 38 },
              { id: '4-6', name: 'Milanesa de pollo', ingredients: 'escalope de poulet panée, salade', price: 28 },
              { id: '4-7', name: 'Papitas a la provenzal', ingredients: 'pommes de terre sautées, ail, persil', price: 12 },
              { id: '4-8', name: 'Flan casero', ingredients: 'flan traditionnel argentin, caramel, chantilly', price: 10 },
              { id: '4-9', name: 'Churros con chocolate', ingredients: 'churros croustillants, sauce chocolat chaud', price: 12 },
              { id: '4-10', name: 'Tarta de limón', ingredients: 'tarte au citron meringuée', price: 12 }
            ]
          }

        }
      }
    },
  })

  const curryHouse = await prisma.restaurant.create({
    data:
    {
      id: 'curry-house',
      name: 'Curry House',
      shortDescription: 'Un voyage épicé à travers la cuisine indienne avec des plats riches en saveurs.',
      longDescription: 'Curry House est une destination culinaire dédiée aux amoureux de la cuisine indienne épicée et aromatique. Chaque plat est une explosion de saveurs, préparé avec des épices fraîchement moulues, et des ingrédients de première qualité.',
      menu: {
        create: {
          items: {
            create:
            [
              { id: '5-1', name: 'Samosa de légumes', ingredients: 'pâte feuilletée, pommes de terre, petits pois, épices', price: 10 },
              { id: '5-2', name: 'Poulet tikka', ingredients: 'morceaux de poulet marinés, grillés au tandoor', price: 16 },
              { id: '5-3', name: 'Paneer pakora', ingredients: 'fromage indien frit, pâte de pois chiches, chutney', price: 12 },
              { id: '5-4', name: 'Onion bhaji', ingredients: 'beignets d’oignons, coriandre, cumin', price: 10 },
              { id: '5-5', name: 'Tandoori king prawns', ingredients: 'crevettes marinées, grillées au tandoor', price: 22 },
              { id: '5-6', name: 'Butter chicken', ingredients: 'poulet mariné, sauce tomate onctueuse, beurre', price: 24 },
              { id: '5-7', name: 'Rogan josh', ingredients: 'agneau mijoté, sauce tomate épicée, cardamome', price: 26 },
              { id: '5-8', name: 'Paneer butter masala', ingredients: 'fromage indien, sauce crémeuse tomate', price: 22 },
              { id: '5-9', name: 'Vindaloo de crevettes', ingredients: 'crevettes, sauce épicée, vinaigre, pommes de terre', price: 28 },
              { id: '5-10', name: 'Gulab jamun', ingredients: 'beignets de lait, sirop de rose', price: 10 }
            ]
          }

        }
      }
    },
  })

  const theVeganSpot = await prisma.restaurant.create({
    data:
    {
      id: 'the-vegan-spot',
      name: 'The Vegan Spot',
      shortDescription: 'Un restaurant moderne proposant des plats végétaliens créatifs et savoureux.',
      longDescription: 'The Vegan Spot est un lieu moderne et vibrant où la créativité culinaire s\'exprime pleinement à travers une cuisine 100% végétalienne. Le restaurant propose des plats gourmands et innovants qui mettent en valeur des produits bio et locaux, tout en offrant une expérience gastronomique raffinée et pleine de saveurs.',
      menu: {
        create: {
          items: {
            create:
            [
              { id: '6-1', name: 'Carpaccio de betterave', ingredients: 'betterave, noix de pécan, vinaigrette à l\'orange', price: 12 },
              { id: '6-2', name: 'Velouté de courgette et lait de coco', ingredients: 'courgettes, lait de coco, coriandre fraîche', price: 10 },
              { id: '6-3', name: 'Tartare d’avocat et mangue', ingredients: 'avocat, mangue, piment doux, citron vert', price: 14 },
              { id: '6-4', name: 'Raviolis de patate douce', ingredients: 'pâte maison, purée de patate douce, sauge', price: 16 },
              { id: '6-5', name: 'Houmous de pois chiches', ingredients: 'pois chiches, tahini, huile d\'olive', price: 8 },
              { id: '6-6', name: 'Burger végétalien', ingredients: 'steak de lentilles, avocat, roquette, pain complet', price: 18 },
              { id: '6-7', name: 'Curry de légumes', ingredients: 'légumes de saison, lait de coco, riz basmati', price: 20 },
              { id: '6-8', name: 'Risotto aux champignons sauvages', ingredients: 'riz arborio, champignons, huile de truffe', price: 22 },
              { id: '6-9', name: 'Lasagnes aux épinards et tofu', ingredients: 'pâtes de blé complet, épinards, tofu, sauce tomate', price: 24 },
              { id: '6-10', name: 'Cheesecake au tofu soyeux et fruits rouges', ingredients: 'tofu soyeux, coulis de fruits rouges', price: 10 }
            ]
          }

        }
      }
    },
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
