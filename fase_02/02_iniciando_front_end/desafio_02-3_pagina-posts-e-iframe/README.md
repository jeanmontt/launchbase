<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 2-3: Página de posts e iframe
</h3>

<blockquote align="center">“Você nunca sai perdendo quando ganha conhecimento!”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

---

## 👨‍💻 Resultado do desafio

<img src="assets/desafio-2-3.gif" alt="Gif demonstrativo challenge 2 Foodfy">

## :rocket: Sobre o desafio

A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os seus 3 posts favoritos do Blog da Rocketseat ([Blog](https://blog.rocketseat.com.br)). Ao clicar em um dos posts, deve ser aberta uma modal onde um iframe irá carregar as informações do post selecionado.

### Informações da página

- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos posts

## Informações do card

- Imagem de destaque do Post ([Tutorial de como pegar os links das imagens](https://youtu.be/f4aS9ZULm4A))
- Título do Post
- Autor do Post
- Tempo de Leitura

## Modal

O modal deve conter um iframe que busca a página do post (dica: basta adicionar o Slug - versão padronizada do título - ao final de `https://blog.rocketseat.com.br/`, por exemplo, `axios-um-cliente-http-full-stack`). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal` e utilize o método `contains` do `classList` para verificar se o elemento está ou não com a classe `maximize`).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser utilizado o grid para organizar os posts
- O modal nunca deve abrir maximizado

## :calendar: Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Após concluí-lo, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
