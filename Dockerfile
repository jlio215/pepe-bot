# Usamos una imagen base de Node.js
FROM node:18

# Configuramos el directorio de trabajo
WORKDIR /app

# Instalamos Git y limpiamos el cache de apt para reducir el tamaño de la imagen
RUN apt-get update && apt-get install -y git && apt-get clean

# Clonamos el repositorio en el contenedor
RUN git clone https://github.com/jlio215/pepe-bot.git .

# Copiamos los archivos de dependencias (package.json y package-lock.json) antes de instalar las dependencias
COPY package*.json ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Exponemos el puerto en el que la aplicación escuchará
EXPOSE 3000

# Iniciamos la aplicación usando Node.js directamente
CMD ["node", "app.js"]
