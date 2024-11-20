# Usamos una imagen base de Node.js
FROM node:18

# Configuramos el directorio de trabajo
WORKDIR /app

# Instalamos Git para poder clonar el repositorio
RUN apt-get update && apt-get install -y git

# Clonamos el repositorio en el contenedor
RUN git clone https://github.com/jlio215/pepe-bot.git .

# Instalamos las dependencias de la aplicación
RUN npm install

# Exponemos el puerto en el que la aplicación escuchará
EXPOSE 3000

# Iniciamos la aplicación con PM2 en modo fork
CMD ["npx", "pm2-runtime", "start", "app.js", "--name", "pepe-app"]
