# Chatbot de *The Rock House Eco-Hostel*

Este es un chatbot desarrollado para *The Rock House Eco-Hostel*, diseñado para guiar y asistir a los visitantes de la isla de San Andrés. Proporciona información detallada sobre los servicios del hostal, lugares de interés, tours, transporte, restaurantes y números de emergencia.

## Funcionalidades

- **Inicio (Bienvenida)**: Al iniciar la conversación, el bot proporciona una guía inicial y opciones de palabra clave como **"Menu"** para ver todas las opciones disponibles.
- **Contacto con Asesor**: Escribe palabras como "asesor", "ayuda" o "contacto" para obtener un enlace directo a un asesor.
- **Preguntas Frecuentes**: Accede a preguntas frecuentes con palabras como "faq" o "preguntas", donde puedes obtener información detallada de temas específicos.
- **Tours y Alquileres**: Obtén información y precios de tours y opciones de alquiler de vehículos para explorar la isla.
- **Lugares de Interés y Museos**: Información sobre lugares recomendados, museos y otros atractivos en San Andrés.
- **Restaurantes**: Sugerencias de restaurantes con opciones de comida local e internacional.
- **Números de Emergencia y Taxi**: Accede a contactos de emergencia y servicios de taxi.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone <url-del-repositorio>
    cd nombre-del-repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Ejecuta el bot:
    ```bash
    npm start
    ```

## Requisitos

- **Node.js**: Versión 12 o superior.
- **@bot-whatsapp/bot**: Librería para crear el flujo del bot.
- **@bot-whatsapp/portal**: Generación de código QR para la conexión.
- **@bot-whatsapp/provider/baileys**: Proveedor de conexión con WhatsApp.
- **@bot-whatsapp/database/mock**: Base de datos de prueba para desarrollo.

## Uso

Una vez iniciado el bot, puedes escanear el código QR generado para conectarlo a tu cuenta de WhatsApp. Interactúa con el bot usando palabras clave como **"Menu"**, **"Tours"**, **"Restaurantes"**, **"Emergencia"**, entre otros.

## Estructura del Código

- **Flows**: El bot utiliza diferentes flujos de conversación (`flowPrincipal`, `flowTours`, `flowPreguntasFrecuentes`, etc.) para manejar la lógica de cada funcionalidad.
- **Provider**: Utiliza `BaileysProvider` para conectarse a WhatsApp.
- **Database**: `MockAdapter` como base de datos de prueba.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, crea un fork del repositorio y realiza tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.