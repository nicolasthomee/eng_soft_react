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
Deixando-o conforme código abaixo:


~~~javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontSize: {
      'td': '0.3rem',
      sm: '0.2rem',
      base: '0.5rem',
      xl: '1.0rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
    },
  },
  plugins: [],
}


~~~

* Dentro do seu arquivo .css adicione as seguintes linhas:

~~~javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
