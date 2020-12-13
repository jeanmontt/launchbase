const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const dataContents = require("./src/database/data-contents");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("src/views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", (req, res) => {
    const data = {
        logo_image: "/assets/rocketseat.png",
        logo_title: "Rocketseat",
        about_paragraph: [
            {paragraph: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível. 🚀"},
            {paragraph: "Em um mundo onde a informação fica obsoleta cada vez mais rápido, velocidade de aprendizado é a chave para o sucesso."},
            {paragraph: "Por isso a Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador."}
        ],
        techs_title: "Principais tecnologias utilizadas",
        techs_image : [
            {name: "JavaScript", img: "/assets/javascript.svg"},
            {name: "Node.JS", img: "/assets/nodejs.svg"},
            {name: "ReactJS", img: "/assets/reactjs.svg"},
            {name: "React Native", img: "/assets/react-native.svg"}
        ],
        image_content: "/assets/launch.svg",
        image_content_alt: "Imagem de astronalta",
    };

    return res.render("about", { data });
});

server.get("/conteudos", (req, res) => {
    return res.render("contents", { data: dataContents });
});

server.get("/conteudos/:id", (req, res) => {
    const id = req.params.id;
    const content = dataContents.find((content) => {
        return content.id === id;
    });

    if (!content) {
        return res.render("not-found");
    }
    
    return res.render("content", { item: content });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log("Server is running!");
});