 # 📚 SGB – Sistema de Gestão de Biblioteca

O **SGB (Sistema de Gestão de Biblioteca)** é uma aplicação web desenvolvida para facilitar o gerenciamento de livros, autores, clientes e empréstimos em bibliotecas.  
O sistema oferece uma interface moderna e intuitiva no **frontend Angular**, e uma **API REST** segura no **backend**, com autenticação via **JWT (JSON Web Token)**.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend
- **Angular 17+**
- **TypeScript**
- **HTML5 / CSS3**
- **Axios / HttpClient** para comunicação com a API

### ⚙️ Backend
- **Node.js** com **Express**
- **Banco de Dados:** PostgreSQL ou MongoDB
- **JWT (JSON Web Token)** para autenticação
- **BCrypt** para criptografia de senhas
- **Cors / dotenv / nodemon** para configuração e ambiente de desenvolvimento

---

## 🔐 Funcionalidades Principais

### 👥 Usuários
- Cadastro e autenticação de usuários (login/logout)
- Controle de permissões por nível de acesso
- Autenticação segura com **JWT**

### 📘 Livros
- Cadastro, edição e exclusão de livros
- Associação com autores e categorias
- Controle de quantidade e disponibilidade

### 👤 Autores
- Gerenciamento de autores com seus respectivos livros

### 📄 Empréstimos
- Registro de empréstimos e devoluções
- Controle de prazos e status dos livros emprestados
