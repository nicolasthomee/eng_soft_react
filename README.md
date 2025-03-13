# DISCIPLINA DE DESENVOLVIMENTO WEB II

## TECNOLOGIA ( FRAMEWORK REACT )

### ** Tecnologias utilizadas


* React
* Vite
* Tailwind
* CSS
* BD ( MongoDB )

### Faça download do repositório, entre dentro do diretório da aula em seguida execute

~~~javascript
npm install
~~~

* Para rodar aplicação:

~~~javascript
npm dev run
~~~

### Como criar um novo projeto react com vite e a biblioteca tailwind CSS

* Criando o projeto
~~~javascript
npm create vite@latest myapp -- --template react
~~~

* Entrando no diretorio gerado do app pelo vite
~~~javascript
cd myapp
~~~

* Instalando tailwind e dependencias
~~~javascript
npm install -D tailwindcss@3 postcss autoprefixer
~~~

* Iniciando tailwind (irá gerar arquivos default de configurações
~~~javascript
npx tailwindcss init -p
~~~

* Abra o projeto com o Visual Studio Code e altere o arquivo tailwind.config.js
adicionando as linhas abaixo entre o objeto:

* content[

]

~~~javascript
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
~~~

* Dentro do seu arquivo .css adicione as seguintes linhas:

~~~javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
