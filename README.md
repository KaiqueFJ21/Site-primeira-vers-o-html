# Game Link — SPA (React + Node)

Projeto criado conforme instruções: diretório com `/public/index.html`, React SPA com 5 páginas e rotas (react-router v6) e um servidor Node/Express simples.

## Estrutura
```
/meu-projeto/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles/global.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Sobre.js
│   │   ├── Contato.js
│   │   ├── Projetos.js
│   │   └── Planos.js
│   └── components/
│       ├── Navbar.js
│       └── Footer.js
├── server/
│   └── index.js
├── package.json
└── webpack.config.js
```

> Observação: Além das páginas obrigatórias (Home e Sobre), escolhi **Contato** e **Projetos** como opcionais e incluí uma 5ª página chamada **Planos**.

## Como rodar
1. **Instale as dependências** (React, Webpack, Babel, Express, etc.):
   ```bash
   npm install
   ```

2. **Inicie o backend** (porta 3001):
   ```bash
   npm run server
   ```

3. **Inicie o frontend** (porta 5173 com live reload e proxy para `/api`):
   ```bash
   npm run client
   ```

4. (Opcional) Rodar ambos juntos (requer `concurrently`):
   ```bash
   npm run dev
   ```

Abra `http://localhost:5173` e navegue pelas rotas: **Home**, **Sobre**, **Projetos**, **Planos**, **Contato**.

## Estilo visual
O layout usa um tema **neon roxo** com gradientes, blobs e argolas decorativas para se aproximar da imagem de referência. As seções principais são:
- **Hero** (título “Transformando Estatísticas em gamificação” e imagem)
- **Recursos** (quatro cartões)
- **Sessões em split** com imagem e texto
- **Planos**
- **Clientes**

As imagens utilizam `picsum.photos`/`dummyimage` como placeholders. Substitua por seus assets quando desejar.

Bom estudo! 🎮