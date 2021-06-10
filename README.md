1 - Instalar o Next
    1.1 - yarn create next-app ignews

2 - Preparar o ambiente
    2.1 - Excluir pastas/arquivos: README.md, styles, arquivos da pasta public.
    2.2 - Criar pasta src e mover a pasta pages para dentro.
    2.3 - Excluir estrutura de DIV do arquivo index.ts localizado na pasta pages.

3 - Instalar typescript
    3.1 - yarn add typescript @types/react @types/node -D.
    3.2 - Renomear os arquivos index.ts para index.tsx e _app.ts para _app.tsx.
    3.3 - Tipar o componente MyApp com AppProps.

4 - Criar pasta styles dentro de src.
    4.1 - Criar arquivo home.modules.css dentro da pasta styles.

5 - Instalar o SASS
    5.1 - yarn add sass
    5.2 - alterar a extensão do arquivo home.modules.css para home.modules.scss   

6 - Criar arquivo _document.tsx na pasta pages {Semelhante ao arquivo _app.tsx porem, só executa uma vez}

7 - Criar arquivo global.scss {arquivo que contem estilizações padrões para toda a app, deve ser importada no arquivo _app.tsx e nao no _document.tsx}
