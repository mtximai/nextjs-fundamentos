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


3) Update Next.js version
  
  Upgrade Next.js version to 12
  > yarn add next@12

  Upgrade React version to latest
  > yarn add react@latest react-dom@latest

4) Instalar a MUI com o Styled Component como 'styling engine'
  
  > yarn add @mui/material @mui/styled-engine-sc styled-components

  Ao rodar o sistema pediu para rodar:
  > yarn add --dev @types/node


=> 10/03/22: Passei a utilizar o npm: com o yarn estava dando erro no swc compiler

> npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

> npm install @mui/material @mui/styled-engine-sc styled-components


> npm install react-pdf

> npm i react-split
  # https://github.com/nathancahill/split


