# 🚀 Servidor HTTP com Express

Este projeto é um servidor HTTP simples construído com **Node.js** e **Express**. Ele permite gerenciar requisições HTTP, interagir com um banco de dados NeDB e validar dados recebidos via API.

## 📌 Funcionalidades
- Criar e gerenciar rotas HTTP
- Utilizar **NeDB** como banco de dados
- Validar dados de entrada com **Express Validator**
- Rodar o servidor com **Nodemon** para facilitar o desenvolvimento
- Testar requisições com **Postman**
- Utilizar **.gitignore** para ignorar arquivos desnecessários no controle de versão

## 🛠 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **Consign** (para carregamento modular)
- **Body-Parser** (incorporado ao Express)
- **NeDB** (banco de dados leve)
- **Express-Validator** (validação de entrada)

## 📦 Pacotes Instalados

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "consign": "^0.1.6",
    "nedb": "^1.8.0",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

## 🌎 Estrutura do Projeto
```
📂 nome-do-projeto
├── 📂 routes         # Rotas da aplicação
├── 📂 middlewares    # Validações e middlewares
├── 📂 utils          # Funções auxiliares
├── .gitignore       # Arquivo para ignorar arquivos desnecessários no Git
├── index.js         # Arquivo principal do servidor
└── package.json     # Gerenciador de dependências
```

## 🔧 Endpoints
### 📌 Rota Principal
- `GET /` → Retorna "Olá" como resposta

### 📌 Rotas de Usuário
- `GET /users` → Retorna todos os usuários
- `POST /users` → Adiciona um novo usuário
- `GET /users/:id` → Retorna um usuário específico
- `PUT /users/:id` → Atualiza um usuário
- `DELETE /users/:id` → Remove um usuário

## 🎯 Validação de Dados
Utilizando **Express Validator**, garantimos que:
- O nome não pode estar vazio
- O e-mail deve ser válido

Caso os dados sejam inválidos, um erro será retornado.

## 🛠 Testes com Postman
Utilizamos o **Postman** para testar as requisições HTTP e garantir que o servidor responde corretamente às rotas criadas. As solicitações foram feitas para validar os endpoints e o comportamento esperado do servidor.


---
**🚀 Vamos codar!**
