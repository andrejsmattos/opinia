# Escolher imagem base
FROM node:20-alpine

# Criar diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas package.json e package-lock.json primeiro (para cache)
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar o restante do projeto
COPY . .

# Expor porta padrão do React
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
