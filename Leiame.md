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


Gerar container Docker: (14/03/22)

  > docker image build -t mtximai/nextjs-fundamentos:1.0 .
  > docker image ls

  > docker run -p 3000:3000 -it --name nextjs-fundamentos mtximai/nextjs-fundamentos:1.0

  > docker login --username=mtximai
  > docker push mtximai/nextjs-fundamentos:1.0



== 20/03/22

Para instalar o Treeview (em desenvolvimento)
> npm i @mui/lab

=> 06/04/22

> npm install mssql@latest

> npm install @mui/x-data-grid

DevExtreme (18/04/22)
> npm install devextreme@21.2 devextreme-react@21.2 --save --save-exact
> npm install --save exceljs file-saver

= 21/04/22
https://www.npmjs.com/package/react-imask
https://imask.js.org/guide.html

npm i react-imask
npm i react-number-format@latest