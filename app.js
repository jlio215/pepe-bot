const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const { EVENTS } = require("@bot-whatsapp/bot");

const flowBienvenida = addKeyword(EVENTS.WELCOME).addAnswer(
  "Digita la palabra **Menu** para ver mis opciones"
);

const flowPreguntasFrecuentes = addKeyword(["faq", "preguntas", "frecuentes"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Responde con el número de la pregunta que te interesa para más información:\n\n*1.* *🚶 Cómo llegar al Hostal.*\n\n*2.* *🏝 ¿Qué playas están cerca del hostal?*\n\n*3.* *🚕 Métodos de transporte en la isla.*\n\n*4.* *🏠 Distancias y ubicación.*\n\n*5.* *📍 Lugares de interés.*\n\n*6.* *🛳 Tours recomendados.*\n\n*7.* *🏨 Servicios del hostal.*\n\n*8.* *🏊 Actividades en el hostal.*\n\n*9.* *🔒 Seguridad.*\n\n*10.* *🛋 Comodidades.*\n\n*11.* *🍳 Información adicional.*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    const commonFooter =
      '\n\nPara reservar tienes dos opciones:\n\n1. Reservar con un asesor: wa.link/hkm73d\n\n Para volver al menú anterior escribe "preguntas" o para ir al menú principal escribe "menu"';
    switch (opcion) {
      case 1:
        return await flowDynamic(
          `🚶 Cómo llegar al Hostal del aeropuerto, sal y gira a la izquierda para tomar la vía circunvalar hasta el barrio Cabañas Altamar (entrada antiguo vivero pavas). Gira a la izquierda y entra al barrio. A 200 metros, encontrarás dos tiendas: Mini Market Angie (derecha) y La Economía (izquierda). Gira a la izquierda por la tienda La Economía hasta llegar a la última casa: Rock House. 10 minutos en cualquier vehículo o 30 minutos caminando (1.8 km).\n\nMapa: https://maps.app.goo.gl/sxPfNM8vnmGQtJsC8` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 2:
        return await flowDynamic(
          `🏝 ¿Qué playas están cerca del hostal?\n\nLas playas más cercanas son:\n\n- Spratt Bight (playa del centro) a 2 km, unos 10 a 15 minutos en coche.\n\nMapa: https://maps.app.goo.gl/RwwTVqmjSHU534uZA\n\n- Playa Rocky Cay en San Luis, a 7.8 km, unos 20 a 30 minutos en coche.\n\nMapa: https://maps.app.goo.gl/hq3JqkZTSr55vzue9\n\n- Playa Sound Bay en San Luis (Bahía Sonora), a 10.6 km, unos 30 a 40 minutos en coche.\n\nMapa: https://maps.app.goo.gl/ctkTBEjAAFZYQCsw6\n\n- Playa Los Charquitos, a 15 km, unos 35 a 40 minutos en coche.\n\nMapa: https://maps.app.goo.gl/sjpPu6Tm29fYoNVg6` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 3:
        return await flowDynamic(
          `🚕 Métodos de transporte en la isla\n\nLos métodos de transporte disponibles incluyen:\n\n- Taxi\n\n- Moto taxi\n\n- Bus\n\n- Alquiler de vehículos (mulitas, motos, bicicletas)` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 4:
        return await flowDynamic(
          `🏠 Distancias y ubicación\n\n- ¿A qué distancia se encuentra el hostal del aeropuerto?\n\nEl Hostal Rock House Eco está aproximadamente a 10 minutos en vehículo del Aeropuerto Internacional Gustavo Rojas Pinilla (1.8 km). Mapa: https://maps.app.goo.gl/vxJ1sJ99vKTvBfRz9\n\n- ¿Cuánto tiempo toma llegar al centro de San Andrés desde el hostal?\n\nSe tarda alrededor de 10 a 15 minutos en auto, bus o moto taxi, y caminando de 20 a 30 minutos.\n\nMapa: https://maps.app.goo.gl/1NmPycWsoMXn32H86` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 5:
        return await flowDynamic(
          `📍 Lugares de interés\n\nAlgunos lugares de interés cercanos incluyen:\n\n- La Cueva de Morgan, a 6.9 km.\n\n- El Hoyo Soplador, a 15 km.\n\n- La Laguna Big Pond, a 8.5 km.` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 6:
        return await flowDynamic(
          `🛳 Tours recomendados\n\nRecomendamos los siguientes tours:\n\n- Tour Johnny Cay y Acuario\n\n- Tour Amanecer Isleño\n\n- Mini Curso de Buceo Personalizado\n\nPuedes reservar tours directamente en la recepción del hostal (+57 318 327 77 91 Christian) o a través de nuestro sitio web: www.therockhousehostel.co` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 7:
        return await flowDynamic(
          `🏨 Servicios del hostal\n\n- ¿El hostal ofrece servicio de transporte?\n\nSí, ofrecemos servicio de transporte (taxi) desde y hacia el aeropuerto por un costo adicional. Pregunta en recepción.\n\n- ¿Hay Wi-Fi disponible en el hostal?\n\nSí, ofrecemos Wi-Fi gratuito para todos nuestros huéspedes.` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 8:
        return await flowDynamic(
          `🏊 Actividades en el hostal\n\nEn el hostal se pueden realizar actividades como:\n\n- Asados\n\n- Cumpleaños\n\n- Decoraciones especiales` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 9:
        return await flowDynamic(
          `🔒 Seguridad\n\n- ¿Es seguro caminar por la zona alrededor del hostal?\n\nSí, la zona alrededor del hostal es segura para caminar durante el día y la noche. El barrio es tranquilo y muy silencioso.\n\n- ¿El hostal tiene vigilancia las 24 horas?\n\nSí, contamos con cámaras de vigilancia las 24 horas para la seguridad de nuestros huéspedes.` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 10:
        return await flowDynamic(
          `🛋 Comodidades\n\n- ¿El hostal tiene piscina?\n\nSí, tiene una piscina estilo jacuzzi, pero estamos a poca distancia de varias playas hermosas.\n\n- ¿Hay cocina disponible para uso de los huéspedes?\n\nSí, tenemos una cocina compartida disponible para todos nuestros huéspedes y una parrilla asador para cocinar afuera en el patio.` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      case 11:
        return await flowDynamic(
          `🍳 Información adicional\n\n- ¿El hostal ofrece desayuno?\n\nSí, ofrecemos un desayuno incluido en la tarifa. También tenemos una opción no incluida por un valor de 18 mil por persona. Si deseas reservar, pregunta en recepción.\n\n- ¿Se puede alquilar equipo de snorkel en el hostal?\n\nSí, ofrecemos alquiler de equipo de snorkel para nuestros huéspedes y también zapatos para la playa. Pregunta por ellos en recepción.\n\n- ¿Puedo aparcar aquí?\n\nSí, hay parking gratis en The Rock House Eco.\n\n- ¿Puedo llevar a mi mascota?\n\nNo, The Rock House Eco no admite mascotas.` +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
      default:
        return await flowDynamic(
          "Opción no válida. Por favor, elige un número del 1 al 11." +
            commonFooter +
            "\n\nPara volver al menu anterior escribe faq"
        );
    }
  });

const flowMuseos = addKeyword(["museos", "museums"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Museos en San Andrés\n\nResponde con el número del museo que te interesa para más información:\n\n*1. 🏠 Casa Museo Isleña*\n\n*2. 🏴‍☠️ Cueva de Morgan*\n\n*3. 🏴‍☠️ Museo Interactivo Pirata The Persistence*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 1:
        return await flowDynamic(
          "🏠 Casa Museo Isleña\n\n• Descripción: Museo dedicado al patrimonio cultural de los raizales. Ofrece un recorrido por una casa típica sanandresana con fotografías históricas, antigüedades y más.\n\n• Ubicación: Av. Circunvalar Km 5\n\n• Horario: Lunes a sábado de 9:00 a 17:00, domingos de 9:00 a 18:00\n\n• Mapa: [Casa Museo Isleña](https://maps.app.goo.gl/68UfB5zHKrSDNLEaA)\n\nPara regresar al menú anterior, escribe *museos*."
        );
      case 2:
        return await flowDynamic(
          "🏴‍☠️ Cueva de Morgan Museo\n\n• Descripción: Cueva de 20 metros de profundidad con historias y leyendas sobre el pirata Henry Morgan. Ofrece cinco estaciones temáticas y un museo.\n\n• Ubicación: km 8 en la vía circunvalar\n\n• Horario: Lunes a domingo de 9:00 a 17:30\n\n• Instagram: @cuevademorganoficial\n\n• Mapa: [Cueva de Morgan](https://maps.app.goo.gl/ZPGwh9zAdnU64Xp76)\n\nPara regresar al menú anterior, escribe *museos*."
        );
      case 3:
        return await flowDynamic(
          "🏴‍☠️ Museo Interactivo Pirata The Persistence\n\n• Descripción: Exposición interactiva pirata con más de 132 elementos históricos.\n\n• Celular: 315 4723873\n\n• Instagram: @museopiratathepersistence\n\n• Horario: Lunes a viernes y domingo de 8:00 a 17:30, cerrado los sábados\n\n• Mapa: [The Persistence](https://maps.app.goo.gl/1M53mSQkak1QPZ4z7)\n\nPara regresar al menú anterior, escribe *museos*."
        );
      default:
        return await flowDynamic(
          "Lo siento, la opción seleccionada no es válida. Por favor, elige un número del 1 al 3."
        );
    }
  });

const flowLugaresInteres = addKeyword(["lugares", "interés", "atractivos"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Lugares de interés en San Andrés\n\nResponde con el número del lugar que te interesa para más información:\n\n*1.* *🏖️ Playa del centro - Spritt Bigth*\n\n*2.* *💦 Salto de Morgan*\n\n*3.* *🌊 Ensenada del Cove y Embarcadero El Cove*\n\n*4.* *🍹 Massally Ocean Lounge*\n\n*5.* *🏊‍♂️ Eco Parque West View*\n\n*6.* *🌅 Booby Rock - Restaurante Bar Spa*\n\n*7.* *🏨 Hotel Sunset - Nirvana*\n\n*8.* *💨 Hoyo Soplador*\n\n*9.* *🌴 Bowie Bay (Calle de las Palmeras)*\n\n*10.* *🏖️ Playa Charquitos*\n\n*11.* *🏖️ Playa Donde Bengue*\n\n*12.* *🦀 Playita Red Crabs*\n\n*13.* *🎵 Black Zobombo Kella Reggae Bar*\n\n*14.* *🍽️ Miss Janice Place*\n\n*15.* *🌊 Sound Bay Beach*\n\n*16.* *🍴 San Luis Barrio - Restaurante Lydia*\n\n*17.* *🌿 Jardín Botánico de San Andrés*\n\n*18.* *🥥 Cocoplum Bay*\n\n*19.* *🌳 Parque Nacional Manglares de Old Point*\n\n*20.* *🏖️ Playa Los Almendros*\n\n*21.* *⛪ Primera iglesia bautista*\n\n*22.* *📸 Mirador Letras I Love SAI*\n\n*23.* *🏝️ Laguna Big Pond-Reggae Bar*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 1:
        return await flowDynamic(
          "🏖️ Playa del centro - Spritt Bigth\n\n• Descripción: playa principal - encontrarás todo el comercio y restaurantes\n\n• Ubicación: Letrero I love San Andrés, Cl. 1 #10-247 a 10-1, San Andrés y Providencia\n\n• Mapa: [Playa del centro - Spritt Bigth](https://maps.app.goo.gl/zMkjnZu9UDTjUoZx8)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 2:
        return await flowDynamic(
          "💦 Salto de Morgan\n\n• Mapa: [Salto de Morgan](https://maps.app.goo.gl/wbJS8dQTABvPoH8N8)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 3:
        return await flowDynamic(
          "🌊 Ensenada del Cove y Embarcadero El Cove\n\n• Mapa: [El Cove](https://maps.app.goo.gl/EvoD5Nz6TutngW4P7)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 4:
        return await flowDynamic(
          "🍹 Massally Ocean Lounge\n\n• Descripción: Lounge frente al mar con restaurante gourmet, bar, y piscina natural de agua salada.\n\n• Horario: Todos los días de 8:00 a 22:00\n\n• Instagram: @massallyoceanlounge\n\n• Mapa: [Massally Ocean Lounge](https://maps.app.goo.gl/w6id7n7LUACpEQr2A)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 5:
        return await flowDynamic(
          "🏊‍♂️ Eco Parque West View\n\n• Descripción: Piscina natural con aguas cristalinas y exuberantes fondos marinos. Ideal para snorkel y buceo.\n\n• Mapa: [West View](https://maps.app.goo.gl/z6BrXPLZvStTyMYf6)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 6:
        return await flowDynamic(
          "🌅 Booby Rock - Restaurante Bar Spa\n\n• Descripción: Restaurante, punto de baño y mirador para disfrutar del atardecer.\n\n• Mapa: [Booby Rock](https://maps.app.goo.gl/QaRgGr5HYyTjuppA6)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 7:
        return await flowDynamic(
          "🏨 Hotel Sunset - Nirvana\n\n• Descripción: Punto de referencia y entrada a una zona de buceo importante llamada Nirvana.\n\n• Ubicación: Carretera Circunvalar Km 13, San Andrés\n\n• Mapa: [Hotel Sunset - Nirvana](https://maps.app.goo.gl/yzV8PnQTHpX9TQLX6)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 8:
        return await flowDynamic(
          "💨 Hoyo Soplador\n\n• Descripción: Fenómeno natural donde el agua sale impulsada por la presión del mar.\n\n• Ubicación: Punta sur de la isla, a 14 km del aeropuerto\n\n• Mapa: [Hoyo Soplador](https://maps.app.goo.gl/YbKYqAPsBsLitoTq9)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 9:
        return await flowDynamic(
          "🌴 Bowie Bay (Calle de las Palmeras)\n\n• Descripción: Túnel de palmeras con vistas al mar Caribe, lugar popular para fotos.\n\n• Mapa: [Bowie Bay](https://maps.app.goo.gl/z23zMkxJpYKdShVx5)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 10:
        return await flowDynamic(
          "🏖️ Playa Charquitos\n\n• Descripción: Playa tranquila ideal para niños y adultos mayores, con piscinas naturales.\n\n• Ubicación: Punta Sur de la isla\n\n• Mapa: [Playa Charquitos](https://maps.app.goo.gl/sh2sgCa5tjmzXNqCA)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 11:
        return await flowDynamic(
          "🏖️ Playa Donde Bengue\n\n• Descripción: Pequeña bahía perfecta para niños y familias.\n\n• Mapa: [Playa Donde Bengue](https://maps.app.goo.gl/ZnT5rL9BrNJtPeaR7)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 12:
        return await flowDynamic(
          "🦀 Playita Red Crabs\n\n• Descripción: Playa tranquila ideal para reuniones familiares y snorkel.\n\n• Ubicación: Sureste de la isla\n\n• Mapa: [Playita Red Crabs](https://maps.app.goo.gl/Mi1gEdQLiywWo1S4A)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 13:
        return await flowDynamic(
          '🎵 Black Zobombo Kella Reggae Bar\n\n• Descripción: Bar emblemático en la zona conocida como "el paso".\n\n• Ubicación: San Luis, San Andrés\n\n• Mapa: [Black Zobombo Kella](https://maps.app.goo.gl/jK2mdgUyd2vua2wv9)\n\nPara regresar al menú anterior, escribe *lugares*.'
        );
      case 14:
        return await flowDynamic(
          "🍽️ Miss Janice Place\n\n• Descripción: Restaurante de comida típica isleña, famoso por sus sopas de pescado y cangrejo.\n\n• Ubicación: Antes del Decameron, San Luis, San Andrés\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 15:
        return await flowDynamic(
          '🌊 Sound Bay Beach\n\n• Descripción: Extensa playa con varios restaurantes y bares, conocida por su "bahía sonora".\n\n• Ubicación: San Luis, San Andrés\n\n• Mapa: [Sound Bay Beach](https://maps.app.goo.gl/W9abpV3xvD6Z9co98)\n\nPara regresar al menú anterior, escribe *lugares*.'
        );
      case 16:
        return await flowDynamic(
          "🍴 San Luis Barrio - Restaurante Lydia\n\n• Descripción: Barrio nativo san luis ( playa  san luis) encontrarás el restaurante miss lydia ideal para degustar comida típica  isleña.\n\n• Ubicación: San Luis, San Andrés\n\n• Mapa: [Restaurante Lydia](https://maps.app.goo.gl/JALSEVcXXBwgW7w87)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 17:
        return await flowDynamic(
          "🌿 Jardín Botánico de San Andrés\n\n• Descripción: Lugar para aprende sobre la biodiversidad nativa incluye recorrido y una vista espectacular desde su mirador.\n\n• Ubicación: Av. Loma Barrack, San Andrés\n\n• Mapa: [Jardín Botánico](https://maps.app.goo.gl/tq8vF2iAcd7k8HzA6)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 18:
        return await flowDynamic(
          "🥥 Cocoplum Bay\n\n• Descripción:Bahía conocida como rocky cay por su emblemático cayó rocoso coralino ubicado a unos 150 metros de la playa . Playa tranquila perfecta para una tarde de sol o de aventura.\n\n• Ubicación: Cl. 17 #3-9, San Andrés\n\n• Mapa: [Cocoplum Bay](https://maps.app.goo.gl/RbS8c3K9RGHyyneH7)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 19:
        return await flowDynamic(
          "🌳 Parque Nacional Manglares de Old Point\n\n• Ubicación: San Andrés\n\n• Mapa: [Manglares de Old Point](https://maps.app.goo.gl/9KDQxuHrqW3PBQH18)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 20:
        return await flowDynamic(
          "🏖️ Playa Los Almendros\n\n• Ubicación: Cra. 1 #10-3 a 10-101, Br. Los Almendros, San Andrés\n\n• Mapa: [Playa Los Almendros](https://maps.app.goo.gl/b6N1jok8hUTJFsX67)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 21:
        return await flowDynamic(
          "⛪ Primera iglesia bautista\n\n• Descripción: Primera iglesia bautista fundada en 1844 - mirador y punto histórico.\n\n• Ubicación: Primera Iglesia Bautista, Cl. 4 #18134 #18-2 a, San Andrés, La Loma, San Andrés, San Andrés y Providencia\n\n• Mapa: [Primera Iglesia Bautista](https://maps.app.goo.gl/eEp1vS8xcuhdEhSR8)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 22:
        return await flowDynamic(
          "📸 Mirador Letras I Love SAI\n\n• Descripción: Paradero y mirador perfecto para fotos familiares y de atardecer.\n\n• Mapa: [Mirador I Love SAI](https://maps.app.goo.gl/FvEmUSrJNBhD1NN88)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      case 23:
        return await flowDynamic(
          "🏝️ Laguna Big Pond-Reggae Bar\n\n• Descripción: Laguna de agua dulce donde habitan caimanes, aves y diversidad de animales. En este lugar encontrarás 2 bares reggae donde podrás disfrutar de música, bebidas y comida típica isleña.\n\n• Ubicación: Laguna Big Pond, San Andrés, San Andrés y Providencia\n\n• Mapa: [Laguna Big Pond](https://maps.app.goo.gl/3y6WR6Ktfo4m9Wv77)\n\nPara regresar al menú anterior, escribe *lugares*."
        );
      default:
        return await flowDynamic(
          "Lo siento, la opción seleccionada no es válida. Por favor, elige un número del 1 al 23."
        );
    }
  });

const flowRestaurantes = addKeyword(["restaurantes", "comida", "dónde comer"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Restaurantes en San Andrés\n\nResponde con el número del restaurante que te interesa para más información:\n\n*1.* *🌴 La Regatta - Comida Caribeña*\n\n*2.* *🍺 Beer Station - Comida Rápida*\n\n*3.* *🍕 Seaweed - Comida Rápida*\n\n*4.* *🍝 Café Café - Pizza y Pastas*\n\n*5.* *🦞 Mahi Mahi - Comida Caribeña*\n\n*6.* *🍤 Capitán Mandy - Comida Caribeña*\n\n*7.* *🐟 Mr. Sea Fox - Comida Caribeña*\n\n*8.* *🏖️ Donde Francesca - Comida Caribeña*\n\n*9.* *🌊 Capi Beach - Comida Caribeña*\n\n*10.* *🍖 RESTAURANT & SHOP - Comida BBQ*\n\n*11.* *🥪 Sandwich Cubano - Comida Rápida*\n\n*12.* *🍔 El Corral - Comida Rápida*\n\n*13.* *🇵🇪 El Peruano - Comida Peruana*\n\n*14.* *🍦 Restaurante Aquarius y Heladería Sweet*\n\n*15.* *🍝 Trattoria Mrs. Papino - Comida Italiana*\n\n*16.* *🍷 Gourmet Shop Assho - Comida Gourmet*\n\n*17.* *🍳 La Cordobesa - Comida Frita*\n\n*18.* *🏖️ Aqua Beach Club Rocky Cay - Club de Playa*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 1:
        return await flowDynamic(
          "🌴 La Regatta - Comida Caribeña\n\n• Dirección: Av Newball Cr 3-121, San Andrés, San Andrés 880001, Colombia\n\n• Descripción: En La Regatta, el viento y el mar atraen a navegantes y visitantes a disfrutar de los placeres del Caribe. Construido sobre el mar, en la bahía de San Andrés, ofrece un bello paisaje marino con exquisita gastronomía y un servicio amable, creando momentos que se mezclan entre la fantasía y la realidad.\n\n• Teléfono: +57 608 5120437\n\n• Página web: restaurantelaregatta.com (Reserva disponible en línea)\n\n• Horario:\n\n  - Lunes a sábado: 12:00 p.m. - 3:00 p.m. y 6:30 p.m. - 10:30 p.m.\n\n• Mapa: [La Regatta](https://goo.gl/maps/8X8y5KdYZUu)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 2:
        return await flowDynamic(
          "🍺 Beer Station - Comida Rápida\n\n• Dirección: Avenida Colombia 1a-16 Lc 102, San Andrés, San Andrés 880001, Colombia\n\n• Descripción: Restaurante de comida rápida especializado en cervezas artesanales y ambiente familiar.\n\n• Celular: +57 316 4717872\n\n• Página web: beerstation.com.co\n\n• Horario: Lunes a domingo: 10:00 a.m. - 10:00 p.m.\n\n• Mapa: [Beer Station](https://goo.gl/maps/jqHK3Urb1Q82)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 3:
        return await flowDynamic(
          "🍕 Seaweed - Comida Rápida\n\n• Dirección: Cra. 1 #4b-2, San Andrés, San Andrés y Providencia\n\n• Descripción: Restaurante de comida rápida con opciones de pizza, ceviche y hamburguesas Angus. Ofrece un ambiente informal con mesas al aire libre.\n\n• Celular: +57 316 6230632\n\n• Horario:\n\n  - Lunes a sábado: 12:30 p.m. - 10:30 p.m.\n\n  - Domingo: 5:00 p.m. - 10:30 p.m.\n\n• Mapa: [Seaweed](https://goo.gl/maps/TkKj4NVuZ8T2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 4:
        return await flowDynamic(
          "🍝 Café Café - Pizza y Pastas\n\n• Dirección: Avenida Colombia Edif Hansa Coral L 1 - 2 - 3, San Andrés, San Andrés y Providencia\n\n• Descripción: Restaurante tradicional con más de 30 años de experiencia en pizzas y pastas, con un ambiente acogedor y familiar.\n\n• Teléfono: +57 608 5127071\n\n• Horario: Lunes a domingo: 12:00 p.m. - 12:30 a.m.\n\n• Mapa: [Café Café](https://goo.gl/maps/F5pUMzRTYm22)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 5:
        return await flowDynamic(
          "🦞 Mahi Mahi - Comida Caribeña\n\n• Dirección: Avenida Colombia, No. 3-59 Hotel Casablanca, San Andrés, Colombia\n\n• Descripción: Restaurante de mariscos y comida asiática, con opciones aptas para vegetarianos.\n\n• Teléfono: +57 608 5124115\n\n• Página web: hotelcasablancasanandres.com\n\n• Horario:\n\n  - Domingo a sábado: 12:00 p.m. - 3:00 p.m. y 7:00 p.m. - 11:00 p.m.\n\n• Mapa: [Mahi Mahi](https://goo.gl/maps/4i3g5jLkRgA2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 6:
        return await flowDynamic(
          "🍤 Capitán Mandy - Comida Caribeña\n\n• Dirección: Av. Rock Hole, Diagonal a Vancliff Newball Frente Agua Halley, San Andrés, Colombia\n\n• Descripción: Restaurante especializado en comida caribeña.\n\n• Teléfono: +57 608 5128481\n\n• Facebook: Pescaderocentral (Fotos y videos disponibles)\n\n• Horario:\n\n  - Domingo a miércoles: 12:00 p.m. - 5:00 p.m.\n\n  - Jueves a sábado: 12:00 p.m. - 5:00 p.m. y 7:00 p.m. - 11:00 p.m.\n\n• Mapa: [Capitán Mandy](https://goo.gl/maps/G8J4k8RG62y)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 7:
        return await flowDynamic(
          "🐟 Mr. Sea Fox - Comida Caribeña\n\n• Dirección: Carrera 1 Newball Avenue, In Front Of The Gasoline Pump Nenes Marina, San Andrés, Colombia\n\n• Descripción: Ofrece platos de la región con un enfoque en mariscos frescos.\n\n• Celular: +57 317 4894564\n\n• Horario:\n\n  - Lunes a sábado: 1:00 p.m. - 3:00 p.m. y 6:00 p.m. - 12:00 a.m.\n\n• Mapa: [Mr. Sea Fox](https://goo.gl/maps/5Qw9N3GQGpA2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 8:
        return await flowDynamic(
          "🏖️ Donde Francesca - Comida Caribeña\n\n• Dirección: San Luis playa sound bay, San Andrés, Colombia\n\n• Celular: +57 318 6168547\n\n• Instagram: Donde Francesca\n\n• Descripción: Restaurante frente a la playa Sound Bay. Ofrece diversidad de platos caribeños, mariscos, ambiente rústico y con vista al mar.\n\n• Horarios:\n\n  - Domingo a sábado: 11:00 a. m. - 5:00 p. m.\n\n• Mapa: [Donde Francesca](https://goo.gl/maps/1wJdyj5XgkT2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 9:
        return await flowDynamic(
          "🌊 Capi Beach - Comida Caribeña\n\n• Dirección: Sound Bay, San Andrés, Colombia\n\n• Celular: +57 315 3858200\n\n• Descripción: Ofrece una variedad de platos caribeños con vistas a la playa de Sound Bay.\n\n• Horarios: Lunes a domingo: 11:00 a. m. - 7:00 p. m.\n\n• Mapa: [Capi Beach](https://goo.gl/maps/2Lj4NhzDwoH2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 10:
        return await flowDynamic(
          "🍖 RESTAURANT & SHOP - Comida BBQ\n\n• Dirección: Cl. 3 #14-55, San Andrés, Colombia\n\n• Descripción: Especializado en carnes a la parrilla y platos BBQ.\n\n• Horarios: Lunes a domingo: 7:00 p. m. - 11:00 p. m.\n\n• Mapa: [Comida BBQ](https://goo.gl/maps/zLf3dd52zJC2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 11:
        return await flowDynamic(
          "🥪 Sandwich Cubano - Comida Rápida\n\n• Dirección: Avenida 20 De Julio 11-09, San Andrés 880001, Colombia\n\n• Celular: +57 608 5126468\n\n• Descripción: Ofrece una variedad de sándwiches.\n\n• Página web: sandwichcubano.com\n\n• Horarios: Lunes a domingo: 10:00 a. m. - 10:00 p. m.\n\n• Mapa: [Sandwich Cubano](https://goo.gl/maps/r3ss5hJzhs62)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 12:
        return await flowDynamic(
          "🍔 El Corral - Comida Rápida\n\n• Dirección: Av. Costa Rica N° 2-39, San Andrés, Colombia\n\n• Descripción: Ofrece una variedad de hamburguesas y platos de comida rápida.\n\n• Página web: elcorral.com\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 11:00 p. m.\n\n• Mapa: [El Corral](https://goo.gl/maps/wQJXwM8U5YP2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 13:
        return await flowDynamic(
          "🇵🇪 El Peruano - Comida Peruana\n\n• Dirección: Av. Costa Rica, San Andrés, Colombia\n\n• Descripción: Restaurante especializado en comida peruana.\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 11:00 p. m.\n\n• Mapa: [El Peruano](https://goo.gl/maps/5z5R3yEj1mN2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 14:
        return await flowDynamic(
          "🍦 Restaurante Aquarius y Heladería Sweet\n\n• Dirección: Avenida Colombia 1-77, San Andrés, Colombia\n\n• Descripción: Restaurante y heladería con opciones variadas para todos los gustos.\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 10:00 p. m.\n\n• Mapa: [Aquarius y Sweet](https://goo.gl/maps/1B1TpF7E3p52)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 15:
        return await flowDynamic(
          "🍝 Trattoria Mrs. Papino - Comida Italiana\n\n• Dirección: Calle 3 # 6-34, San Andrés, Colombia\n\n• Descripción: Ofrece una variedad de platos italianos, especialmente pizzas y pastas.\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 11:00 p. m.\n\n• Mapa: [Mrs. Papino](https://goo.gl/maps/8F1kRm62wQ42)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 16:
        return await flowDynamic(
          "🍷 Gourmet Shop Assho - Comida Gourmet\n\n• Dirección: Av. Newball 4-169, San Andrés, Colombia\n\n• Descripción: Restaurante gourmet con una amplia selección de vinos.\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 11:00 p. m.\n\n• Mapa: [Gourmet Shop Assho](https://goo.gl/maps/1Hg7uKJ5J6N2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 17:
        return await flowDynamic(
          "🍳 La Cordobesa - Comida Frita\n\n• Dirección: Av. 20 De Julio, San Andrés, Colombia\n\n• Descripción: Restaurante especializado en comida frita y platos tradicionales.\n\n• Horarios: Lunes a domingo: 12:00 p. m. - 11:00 p. m.\n\n• Mapa: [La Cordobesa](https://goo.gl/maps/1w8bT4sK9vE2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      case 18:
        return await flowDynamic(
          "🏖️ Aqua Beach Club Rocky Cay - Club de Playa\n\n• Dirección: Rocky Cay, San Andrés, Colombia\n\n• Descripción: Club de playa con diversas actividades y opciones gastronómicas.\n\n• Horarios: Lunes a domingo: 10:00 a. m. - 6:00 p. m.\n\n• Mapa: [Aqua Beach Club](https://goo.gl/maps/1x8g3T4hJeD2)\n\nPara volver al menu anterior escribe restaurantes"
        );
      default:
        return await flowDynamic(
          "Lo siento, la opción seleccionada no es válida. Por favor, elige un número del 1 al 18.\n\nPara volver al menu anterior escribe restaurantes"
        );
    }
  });

const flowTours = addKeyword(["tour", "tours"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Responde con el número del tour que te interesa para más información:\n\n*1. 🐎 Cabalgata Isleña*\n\n*2. 🏊‍♂️ Tour Jhonny Cay y Acuario*\n\n*3. 🌅 Tour Amanecer Isleño*\n\n*4. 🤿 Minicurso de Buceo Personalizado*\n\n*5. 🍲 Rondón Tour*\n\n*6. 🌙 Tour Noche Blanca*\n\n*7. 🐠 Tour VIP Snorkeling*\n\n*8. 🚣‍♂️ Tour Eco Fiwi Kayak Transparente*\n\n*9. 🪂 Tour Parasail*\n\n*10. 🏄‍♂️ Wakeboard*\n\n*11. 🪁 Kitesurf Curso Básico*\n\n*12. 🏄‍♀️ Tour Paddleboard Nocturno*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    const commonFooter =
      '\n\nPara reservar tienes dos opciones:\n\n1. Reservar con un asesor: wa.link/hkm73d\n\nPara volver al menú anterior escribe "tours" o para ir al menú principal escribe "menu"';
    switch (opcion) {
      case 1:
        return await flowDynamic(
          "*Cabalgata Isleña* 🐴\n\n*Precio:* $100,000 por persona\n\n*Descripción:*\n\nRecorrido en caballo por senderos ecológicos,\n\ncultivos, fauna y flora de la isla." +
            commonFooter
        );
      case 2:
        return await flowDynamic(
          "*Tour Jhonny Cay y Acuario* 🏝️🐠\n\n*Precio:* $80,000 por persona\n\n(incluye entrada a Jhonny Cay)\n\n*Horario:* 9 am a 3:30 pm\n\n*No incluye:*\n\nAlimentos, bebidas, transporte al muelle\n\n(lugar de salida: muelle de Toninos)\n\n*Descripción:*\n\nIncluye visita a la isla de Jhonny Cay,\n\nparque regional y al acuario\n\n(Rose Cay y Haynes Cay, manglares de Old Point)\n\ny conocer las mantarrayas en la isla del acuario." +
            commonFooter
        );
      case 3:
        return await flowDynamic(
          "*Tour Amanecer Isleño* 🌅🐟\n\n*Precio:* $180,000 por persona\n\n*Horario:* 6 am a 9 am\n\n(hora en el lugar: 5:40 am en Chamey Náutica)\n\n*Descripción:*\n\nViaje en catamarán a vela hacia la isla del acuario\n\npara hacer snorkel y conocer el amanecer isleño.\n\nObservación de diversas especies de animales\n\ncomo peces, rayas y tiburones.\n\nIncluye un snack, zapatos de playa, caretas,\n\npaddle surf y kayak por una hora.\n\nDesayuno costeño (arepa de huevo,\n\njugo de pera, manzana o malta)." +
            commonFooter
        );
      case 4:
        return await flowDynamic(
          "*Minicurso de Buceo Personalizado* 🤿\n\n*Precio:* $150,000 por persona\n\n*Descripción:*\n\nConocerán el mar, su ecosistema y su diversidad marina\n\nde la mano de un instructor PADI.\n\nNo incluye fotos y video\n\n(preguntar por el servicio al instructor).\n\nLa actividad incluye ida y regreso en transporte\n\ny equipo de buceo.\n\nDuración total: 3 horas aproximadamente." +
            commonFooter
        );
      case 5:
        return await flowDynamic(
          "*Rondón Tour* 🍲🎶\n\n*Precio:* $160,000 por persona\n\n*Descripción:*\n\nVive una experiencia única cocinando Rondón\n\ncon personas nativas mientras disfrutas\n\nde música en vivo y aprendes la lengua\n\ny cultura de San Andrés." +
            commonFooter
        );
      case 6:
        return await flowDynamic(
          "*Tour Noche Blanca* 🌃🎉\n\n*Precio:* $190,000 por persona\n\n*Descripción:*\n\nEl tour consiste en una vuelta por la bahía\n\nde San Andrés en la noche (8 pm a 11:30 pm),\n\nincluye servicios de buffet, barra libre,\n\nrecreación, actividades y animadores.\n\nReserva previa con pago total." +
            commonFooter
        );
      case 7:
        return await flowDynamic(
          "*Tour VIP Snorkeling* 🐟📸\n\n*Precio:* $90,000 por persona\n\n(incluye bebida agua y gaseosa y equipo de snorkel)\n\n*Precio con fotos y videos:* $125,000 por persona\n\n*Días de salida:* Martes, jueves y sábado\n\n*Descripción:*\n\nEn la actividad visitaremos White Watta,\n\nMundo Marino y un barco hundido.\n\nConoceremos la importancia del fondo marino\n\ny disfrutaremos su belleza.\n\nDuración: 3 horas." +
            commonFooter
        );
      case 8:
        return await flowDynamic(
          "*Tour Eco Fiwi Kayak Transparente* 🛶🌿\n\n*Precio:* $170,000 por persona\n\n*Duración:* 2 horas\n\n(sin incluir el tiempo del snack, 25 minutos)\n\n*Descripción:*\n\nKayak por manglares, snorkel, snack típico incluido.\n\nExperiencia guiada en kayak transparente dentro\n\ndel parque de los manglares Old Point.\n\nIdeal para niños, mujeres embarazadas,\n\npersonas adultas o con alguna discapacidad.\n\nSe atraviesan hermosos túneles formados\n\npor manglares rojos y se navega sobre\n\npraderas de pastos marinos." +
            commonFooter
        );
      case 9:
        return await flowDynamic(
          "*Tour Parasail* 🪂\n\n*Precio:* $230,000 por persona\n\n*Duración:* 15 minutos de vuelo,\n\n1 hora y 50 minutos en total\n\n*Horario:*\n\n9:00 am – 11:00 am – 2:00 pm – 4:00 pm\n\n(vuelo extra: 1:00 pm)\n\n*Descripción:*\n\nVuelo a unos 110 metros de altura\n\nsobre la bahía de los 7 colores.\n\nEn la embarcación van de 10 a 15 personas\n\nque vuelan de 2 o de 3 a la vez." +
            commonFooter
        );
      case 10:
        return await flowDynamic(
          "*Wakeboard* 🌊🏄‍♂️\n\n*Precio:*\n\n- 1 persona: $280,000 por 40 minutos\n\n- 2 personas: $400,000 por 1 hora\n\n- 3 personas: $550,000 por 1 hora y 30 minutos\n\n*Descripción:*\n\nAprende y disfruta de la adrenalina del wakeboard.\n\nIncluye inducción inicial, chalecos salvavidas\n\ny equipo deportivo.\n\nRestricciones: no apto para personas\n\ncon algún tipo de discapacidad." +
            commonFooter
        );
      case 11:
        return await flowDynamic(
          "*Kitesurf* 🪁\n\n*Curso Básico:*\n\n*Precio:* COP 1,500,000\n\n*Descripción:*\n\nEn este curso de kitesurf aprenderás lo necesario\n\npara dominar la cometa de manera segura\n\ny pararte sobre la tabla.\n\n*Partes del curso:*\n\n1. Teoría y armado de tu equipo (30 minutos)\n\n2. Práctica en agua en una zona baja\n\n3. Body drag, ejercicios de control con potencia\n\n4. Water start, práctica con la tabla" +
            commonFooter
        );
      case 12:
        return await flowDynamic(
          "*Tour Paddleboard Nocturno* 🌅🛶\n\n*Precio:* $200,000 por persona\n\n(min. 2 personas, max. 6 personas)\n\n*Duración:* 3 horas\n\n(incluye transporte desde tu hotel)\n\n*Lugar:* Cove/Manglar\n\n*Descripción:*\n\nPartimos desde el sector del Cove\n\na la vuelta de la isla en un punto llamado\n\nBigMama's Place desde las 5:00 pm.\n\nIniciaremos el recorrido mientras apreciamos\n\nel atardecer y esperamos la noche\n\npara el espectáculo con las luces." +
            commonFooter
        );
      default:
        return await flowDynamic(
          "Opción no válida. Por favor, escribe nuevamente 'tour' y responde con un número del 1 al 12."
        );
    }
  });

const flowAlquileres = addKeyword(["alquiler", "alquileres"])
  .addAction(async (_, { flowDynamic }) => {
    return await flowDynamic(
      "Responde con el número del alquiler que te interesa para más información:\n\n*1. 🚲 Alquiler de bicicletas*\n\n*2. 🛵 Alquiler de motos*\n\n*3. 🏎 Alquiler de mulitas*\n\n*4. 🚤 Alquiler de Pontón*"
    );
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic }) => {
    const opcion = parseInt(ctx.body);
    const commonFooter =
      '\n\nPara reservar tienes dos opciones:\n\n1. Reservar con un asesor: wa.link/hkm73d\n\nPara volver al menú anterior escribe "alquiler" o para ir al menú principal escribe "menu"';
    switch (opcion) {
      case 1:
        return await flowDynamic(
          "*Alquiler de Bicicletas* 🚴‍♂️\n\n*Precio:* $50,000 por persona" +
            commonFooter
        );
      case 2:
        return await flowDynamic(
          "*Alquiler de Motos* 🛵\n\n*Precio:*\n\n- Moto tipo scooter (automático):\n\n  $90,000 de 9 am a 7 pm\n\n  $110,000 por 24 horas\n\n*Nota:* Se requiere licencia de conducir" +
            commonFooter
        );
      case 3:
        return await flowDynamic(
          "*Alquiler de Mulitas* 🚙\n\n*Precios:*\n\n- Para 2 personas:\n\n  $180,000 a $250,000 de 9 am a 6 pm\n\n  $250,000 a $300,000 por 24 horas\n\n- Para 3 a 5 personas:\n\n  $250,000 a $330,000 de 9 am a 6 pm\n\n  $330,000 a $400,000 por 24 horas\n\n- Para 6 personas:\n\n  $350,000 a $450,000 de 9 am a 6 pm\n\n  $400,000 a $500,000 por 24 horas\n\n*Nota:* Los precios varían según la temporada\n\n*Recomendación:*\n\nSiempre preguntar por los precios actuales\n\nSe requiere licencia de conducir" +
            commonFooter
        );
      case 4:
        return await flowDynamic(
          "*Alquiler de Pontón* 🚤\n\n*Precio:* Desde $1,000,000 para 12 personas\n\n(varía según la temporada)\n\n*Descripción:*\n\nExplora las aguas de San Andrés\n\ncon comodidad y estilo.\n\nNavega con seguridad y crea recuerdos imborrables\n\nen la bahía de San Andrés, Cayo Acuario,\n\nHans Cay, Manglares, Mundo Marino." +
            commonFooter
        );
      default:
        return await flowDynamic(
          "Opción no válida. Por favor, escribe nuevamente alquiler y responde con un número del 1 al 4."
        );
    }
  });

const flowReservas = addKeyword([
  "reservas",
  "reserva",
  "alojamiento",
]).addAnswer([
  "🛌 Ve a este link e ingresa las fechas de tu hospedaje: https://engine.lobbypms.com/the-rock-house-hostel",
]);

const flowTaxi = addKeyword(["taxi", "transporte"]).addAnswer([
  "*+608 512 4888*\n\n",
  "*+608 512 2222*\n\n",
  "*Servicio de taxi nocturno*\n",
  "*Marcelino Blandón:* *+57 321 4328710*\n\n",
]);

const flowSos = addKeyword(["emergencia", "sos", "911"]).addAnswer([
  "🚨 *Números de emergencia en San Andrés:* 🚨\n\n",
  "👮 *Policía Nacional:* *112* o *123*\n\n",
  "🚑 *Ambulancia:* *125*\n\n",
  "🚒 *Bomberos:* *119*\n\n",
  "🏥 *Hospital Departamental:* *(8) 513 0475*\n\n",
  "🚤 *Guardacostas:* *146*\n\n",
  "🏝️ *Defensa Civil:* *(8) 512 6411*\n\n",
  "🆘 *Cruz Roja:* *(8) 512 3633*\n\n",
  "🔎 *Fiscalía:* *(8) 513 0802*\n\n",
  "☎️ *Línea única de atención de emergencias:* *123*\n\n",
  "Si estás en una situación de emergencia, por favor contacta inmediatamente a las autoridades correspondientes.\n\n",
]);

const flowAsesor = addKeyword([
  "asesor",
  "ayuda",
  "contacto",
  "asesoria",
  "atención",
]).addAction(async (_, { flowDynamic }) => {
  return await flowDynamic(
    "🤝 ¡Hola! Para comunicarte con un asesor personalizado, haz clic en el siguiente enlace:\n\n📱 wa.link/hkm73d\n\nUn asesor estará encantado de ayudarte con cualquier duda o consulta que tengas sobre tu visita a San Andrés. 😊"
  );
});

const flowPrincipal = addKeyword([
  "hola",
  "ole",
  "alo",
  "Menu",
  "Menú",
]).addAnswer([
  "🌴 🙌 Hola bienvenido a *The Rock House Eco-Hostel Chatbot*🌴",
  "",
  "🤖 Soy *Pepe* un guia digital en la isla de San Andres, puedo ofrecerte la siguiente info:",
  "",
  "🤓 Para abrir mis opciones debes escribir las palabra clave de lo que necesites, si deseas ver mi menu de palabras, digita *Menú*.",
  "",
  "🛌 Escribe *Reservas* para ver las habitaciones disponibles.",
  "",
  "💬 Escribe *Asesor* para ver chatear con un Asesor del hostal.",
  "",
  "🏝 Escribe *Tours* para ver los tours que ofrezco.",
  "",
  "🏎 Escribe *Alquiler* para ver los vehiculos que ofrezco.",
  "",
  "❓ Escribe *FAQ* para ver preguntas frecuentes.",
  "",
  "🏖 Escribe *Lugares* para ver nuestras recomendaciones.",
  "",
  "🖼 Escribe *Museos* para ver los museos Recomendados.",
  "",
  "🌮 Escribe *Restaurantes* para ver los Restaurantes Recomendados.",
  "",
  "🆘 Escribe *Emergencia* para ver los números de Emergencia.",
  "",
  "🚕 Escribe *Taxi* para los números de taxi 24 hrs",
]);

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([
    flowPrincipal,
    flowReservas,
    flowTours,
    flowAlquileres,
    flowBienvenida,
    flowPreguntasFrecuentes,
    flowRestaurantes,
    flowLugaresInteres,
    flowTaxi,
    flowMuseos,
    flowAsesor,
    flowSos,
  ]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
