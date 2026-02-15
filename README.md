# O projeto

Esse projeto foi feito com intuito de aprofundar conhecimentos em React para desenvolvimento de interfaces e configuração de APIs personalizadas com Node.js e Prisma.


## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ORM**: Prisma
- **Ferramentas auxiliares**: Postman (testes de API)


## Requisitos
- Para rodar esse projeto localmente, devem ser cumpridos os seguintes requisitos:
    - Node.js instalado (v16+)
    - MongoDB configurado
    - Git

## Configuração
### 1. Clonar o repositório
```bash
    git clone https://github.com/MartooooDev/crud-simples-react.git
    cd fullstack
```

### 2. Instalar dependências

**Backend**
```bash
    cd api
    npm install
```
**Frontend**
```bash
    cd frontend
    npm install
```

### 3. Configurar variáveis de ambiente
Criar arquivo `.env` na pasta `api/`

`.env`
```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<banco>"
PORT=5000
NODE_ENV=development
```

### 4. Configuração do prisma
```bash
    cd api
    npm prisma migrate dev --name init
    npx prisma generate
```

### 5. Iniciar aplicação
**Backend / terminal 1**
```bash
    cd api
    npm run dev
```

**Frontend / terminal 2**
```bash
    cd frontend
    npm start
```


## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Node.js](https://nodejs.org/docs)
- [Documentação Prisma](https://www.prisma.io/docs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started)
