# Gestor de Estoque React

Este é um projeto de gerenciamento de estoque construído com React.

## Estrutura do Projeto

O projeto é organizado da seguinte maneira:

- `src/components`: Esta pasta contém todos os componentes React usados no projeto.
- `src/hooks`: Esta pasta contém todos os hooks personalizados usados no projeto.
- `src/contexts`: Esta pasta contém todos os contextos React usados no projeto.
- `src/entities`: Esta pasta contém a estrutura e metodos do Objeto que sera criado no banco de dados

## Componentes

### `ItemForm`

Este componente é um formulário para adicionar ou atualizar itens. Ele usa o hook `useStock` para adicionar ou atualizar itens no estoque.

### `CreateItem`

Este componente renderiza o `ItemForm` para criar um novo item.

## Hooks

### `useStock`

Este hook personalizado fornece funções para adicionar, obter, atualizar e deletar itens do estoque.

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor de desenvolvimento com `npm run dev`
