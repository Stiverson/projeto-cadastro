# Usando uma imagem Node.js estável
FROM node:16

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte para o contêiner
COPY . .

# Expõe a porta 4000 para o Apollo Server
EXPOSE 4000

# Inicia o servidor
CMD ["node", "index.js"]
