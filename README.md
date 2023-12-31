# HUBusca

Este projeto é uma aplicação mobile feita em React Native, utilizando Expo e TypeScript, que permite pesquisar usuários do GitHub e visualizar seus perfis e repositórios.

## Funcionalidades

- **Pesquisa de Usuários:** Permite buscar usuários do GitHub pelo nome de usuário.
- **Visualização de Perfil:** Exibe informações detalhadas sobre um usuário específico, incluindo dados como nome, login, localização, seguidores, repositórios públicos e lista de repositórios.
- **Repositórios:** Lista os repositórios públicos de um usuário específico, exibindo detalhes como nome do repositório, linguagem, descrição, data de criação e último push.
- **Menu com Usuários Pesquisados Recentemente:** Apresenta um menu com os usuários pesquisados recentemente para facilitar o acesso aos perfis.

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Styled-Components
- Axios

## Instalação

Para executar este projeto em sua máquina, siga estas etapas:

1. **Clone o Repositório:**  
   ```bash
   git clone https://github.com/maike616/hubusca.git
   ```
2.  **Instale as Dependências:**
  ```bash
   cd hubusca
   npm install
   ```
3. **Executar o Projeto:**  
- Para iniciar a aplicação no Expo:
  ```
  npm start
  ```
- Para executar no dispositivo ou emulador Android:
  ```
  npm run android
  ```
Certifique-se de ter o Node.js instalado em seu sistema.

## Principais Dependências 

- **@react-navigation/native:** Fornece navegação na aplicação.
- **@react-navigation/native-stack:** Fornece pilha de navegação nativa.
- **axios:** Utilizado para fazer requisições HTTP.
- **styled-components:** Biblioteca para estilização de componentes.

