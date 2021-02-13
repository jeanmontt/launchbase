<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 5-2: Interagindo com o BD
</h3>

<blockquote align="center">“Não basta saber, é preferível saber aplicar. Não é o bastante querer, é preciso saber querer.”</blockquote>

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

<img src="./public/assets/challenge_5-2.gif" alt="Resultado do desafio">

## :rocket: Sobre o desafio

Nessa etapa, você deve refatorar os CRUDs dos professores e estudantes para que eles utilizem o banco de dados.

### Inserindo dados

No método `post`, construa uma query usando `INSERT` que crie um novo registro no banco de dados.

### Buscando dados

No método `index`, construa uma query usando `SELECT` que retorne todos os registros do banco de dados. Ordene esses resultados pelo nome de forma crescente.

### Criando Model

As operações com o banco de dados não devem ficar no controller, por isso crie um model que contenha os cinco métodos:

- `all`: Buscar todos os registros;
- `create`: Criar um registro;
- `find`: Buscar apenas um registro a partir do id informado;
- `update`: Atualiza um registro a partir do id informado;
- `delete`: Remove um registro a partir do id informado;

### Atualizando dados

Crie um método `update` no model. Nesse método, construa uma query utilizando `UPDATE`, `SET` e `WHERE` que atualiza um registro do banco de dados a partir do id informado.

### Removendo dados

Crie um método `delete` no model. Nesse método, construa uma query utilizando `DELETE` e `WHERE` que remova um registro do banco de dados a partir do id informado.

### Refatorando students

Refatore o controller de estudantes utilizando as mesmas ideias aplicadas no controller de professores.

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
$ cd launchbase/fase_03/01_controle_de_academia/desafio_5-2_interagindo_com_bd

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