# Opinia – Protótipo MVP (com Mock API)
Atualizado em 2025-08-12

## Como rodar o protótipo (sem build)
1. Baixe o ZIP e extraia.
2. Abra `index.html` no navegador (duplo clique).

## Como rodar a Mock API (json-server)
1. Requer Node.js 18+ instalado.
2. No terminal, dentro da pasta extraída:
   ```bash
   npm install
   npm run mock:api
   ```
3. A API mock ficará em `http://localhost:5173` (endpoints baseados em `db.json` e `routes.json`).

> Observação: O protótipo atual é estático e não faz chamadas reais à API. A mock API serve para testes de integração posteriores.

## Itens incluídos
- `app.jsx` – **versão completa** do protótipo (React + Tailwind via CDN)
- `index.html` – página inicial para abrir no navegador
- `openapi.yaml` – **OpenAPI completo** do MVP
- `schema.sql` – **DDL PostgreSQL** integral
- `package.json`, `db.json`, `routes.json` – Mock API com json-server
