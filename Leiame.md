Projeto com Next.js

- 08/03/22 : suporte ao Typescript

> npx create-next-app nextjs-fundamentos
> 
> yarn           # baixa as dependências
> yarn run dev   # roda em modo desenvolvedor


1) Adicionar suporte ao typescript a um projeto já existente

  . crie o arquivo tsconfig.json e execute:

    > yarn run dev

  . você será avisado para rodar o comando:

    > yarn add --dev typescript @types/react
    > yarn run dev      # observe que ele vai popular o arquivo tsconfig.json

2) Criar um app Next.js + typescript

  > npx create-next-app@latest --ts
  > yarn create next-app --typescript

  vide: https://nextjs.org/docs/basic-features/typescript

