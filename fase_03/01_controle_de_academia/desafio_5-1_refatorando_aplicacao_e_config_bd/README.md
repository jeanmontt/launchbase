<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 5-1: Refatorando aplicação e configurando o BD
</h3>

<blockquote align="center">“Querer vencer significa já ter percorrido metade do caminho.”</blockquote>

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

## :rocket: Sobre o desafio

Esse é o primeiro desafio de uma sequência que irá implementar o banco de dados na aplicação desenvolvida no módulo anterior.

Nessa etapa, você deve refatorar o código da sua aplicação e preparar o seu ambiente para trabalhar com banco de dados.

### Criando Banco de dados

Utilizando a ferramenta postbird, crie **através de queries** um banco de dados chamado **my_teacher** e uma tabela com o nome de **teachers** que possua os seguintes campos:

- id: INT e PRIMARY KEY;
- avatar_url: TEXT e NOT NULL;
- name: TEXT e NOT NULL;
- birth_date: TIMESTAMP e NOT NULL;
- education_level: TEXT e NOT NULL;
- class_type: TEXT e NOT NULL;
- subjects_taught: TEXT e NOT NULL;
- created_at: TIMESTAMP e NOT NULL.

_Dicas: Para criar a tabela a partir de uma query, basta selecionar o banco no postbird e na aba **Query** rodar o comando **CREATE TABLE** especificando o nome da tabela e em seguida as colunas, por exemplo:_

```sql
CREATE TABLE TEST(
   ID INT PRIMARY KEY,
   NAME TEXT NOT NULL
);
```

_Para mais informações, dê uma olhada nesse [link](https://www.postgresqltutorial.com/postgresql-create-table/)_

### Refatorando o Código

Após preparar o banco de dados, é preciso refatorar a sua aplicação para utilizá-lo. Você deve fazer as seguintes alterações:

- Utilizar a nova estrutura de pastas (src, app e lib);
- Corrija nos arquivos os caminhos relativos que precisar;
- Utilize nos arquivos da pasta `controllers` a nova forma de exportar.

### Configurando BD na aplicação

Por fim, instale a biblioteca `pg` e crie o arquivo de configuração do seu banco de dados (em uma pasta **config**) utilizando o `Pool`. Não esqueça de passar os dados necessários (**user, password, host, port e database**) na hora de instanciar (**new**) o Pool.

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
$ cd launchbase/fase_03/01_controle_de_academia/desafio_5-1_refatorando_aplicacao_e_config_bd

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