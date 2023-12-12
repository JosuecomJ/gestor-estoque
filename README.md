# Gestor de Estoque React

Este é um projeto de gerenciamento de estoque construído com React.

## Estrutura do Projeto

O projeto é organizado da seguinte maneira:

- `.eslintrc.cjs`: Arquivo de configuração do ESLint.
- `.gitattributes` e `.gitignore`: Arquivos de configuração do Git.
- `index.html`: Arquivo HTML principal da aplicação.
- `package.json`: Arquivo que contém metadados sobre o projeto e suas dependências.
- `public/`: Diretório que contém ativos estáticos.
- `src/`: Diretório onde o código-fonte da aplicação está localizado. Ele contém vários subdiretórios:
    - `components/`: Diretório que contém os componentes React reutilizáveis da aplicação.
    - `contexts/`: Diretório que contém os contextos React.
    - `entities/`: Diretório que contém as entidades do projeto.
    - `hooks/`: Diretório que contém os hooks personalizados do React.
    - `pages/`: Diretório que contém os componentes de página da aplicação.
- `vite.config.js`: Arquivo de configuração do Vite.

## Componentes

### `App`

Este é o componente principal da aplicação. Ele renderiza o roteador e os componentes de layout.

### `DeleteButton`

Este é um componente de botão que, quando clicado, deleta um item específico do estoque.

### `ItemForm`

Este é um componente de formulário que permite ao usuário adicionar ou atualizar itens. Ele usa o hook `useStock` para realizar essas operações.

### `ItemsTable`

Este é um componente que renderiza uma tabela de itens. Cada linha da tabela representa um item no estoque.

## Páginas

### `Home`

Esta é a página inicial da aplicação.

### `CreateItem`

Esta é a página que contém o formulário para criar um novo item.

### `ListItems`

Esta é a página que lista todos os itens no estoque.

### `ShowItem`

Esta é a página que mostra os detalhes de um item específico.

### `UpdateItem`

Esta é a página que contém o formulário para atualizar um item existente.

## Context

### `StockContext`

Este é o contexto que gerencia o estado do estoque de itens na aplicação. Ele fornece as seguintes funções:

- `addItem(item)`: Esta função aceita um objeto `item` e o adiciona ao estoque. O objeto `item` deve ter as propriedades `id`, `name` e `quantity`.

- `getItem(itemId)`: Esta função aceita um `itemId` e retorna o item correspondente do estoque.

- `updateItem(itemId, newAttributes)`: Esta função aceita um `itemId` e um objeto `newAttributes`. Ela encontra o item com o `itemId` fornecido no estoque e atualiza suas propriedades com os valores no objeto `newAttributes`.

- `deleteItem(itemId)`: Esta função aceita um `itemId` e remove o item correspondente do estoque.

O estado do estoque é persistido no `localStorage` sob a chave 'react-stock'.

Para usar o `StockContext` em um componente, você pode usar o hook `useContext` do React e passar `StockContext` como argumento. Alternativamente, você pode usar o hook personalizado `useStock`, que já faz isso para você.

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor de desenvolvimento com `npm run dev`
