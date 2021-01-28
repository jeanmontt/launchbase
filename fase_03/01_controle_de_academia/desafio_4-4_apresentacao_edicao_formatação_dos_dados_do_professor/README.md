<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 4-4: Apresentação, edição e formatação dos dados de um professor
</h3>

<blockquote align="center">“Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.”</blockquote>

<p align="center">

  <a href="https://github.com/jeanmontt">
    <img alt="Made by jeanmontt" src="https://img.shields.io/badge/made%20by-jeanmontt-blue">
  </a>

  <a href="https://github.com/jeanmontt/launchbase/commits/master" >
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/jeanmontt/launchbase">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 👨‍💻 Resultado do desafio

<img src="./public/assets/challenge_4-4.gif" alt="Resultado do desafio">

## :rocket: Sobre o desafio

Nessa etapa você deve criar duas rotas: uma para apresentar os dados do professor (show) e outra para a edição dos dados cadastrados (edit). Além disso, realize a formatação dos dados cadastrados para a correta exibição no HTML

### Show

Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:

- Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`);
- Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona;
- Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`.

Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.

### Edição

Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `edit` para buscar e retornar o professor a partir do `id` fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo `fields.njk`). Por fim, crie uma função chamada `date` no arquivo `utils.js`. Essa função deve retornar a data no formato `yyyy-mm-dd` para a correta exibição no input do tipo `date` no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método `splice` da string).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

## 💾️ Como baixar/testar o projeto

- Você irá precisar instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm):

```bash
# Versões mínimas ou superiores.
$ node -v
v12.18.3

$ npm -v
6.14.6
```

- Para configurar, no bash digite os seguinte códigos:

```bash
# Clonar o repositório
$ git clone https://github.com/jeanmontt/launchbase.git

#Entrar no diretório
$ cd launchbase/fase_03/01_controle_de_academia/desafio_4-4_apresentacao_edicao_formatação_dos_dados_do_professor

#Instalar as dependências
$ npm install

#Iniciar o local host
$ npm start
```

- Por ultimo abra seu navegador e digite:

```
localhost:3000
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

#### Desenvolvido com 💙️ por:

***Jean Monteiro*** 
<br/> 
<a href="https://www.linkedin.com/in/jeanmont/">
<img src="https://raw.githubusercontent.com/jeanmontt/NLW-1.0/master/public/assets/linkedin.png">
</a>