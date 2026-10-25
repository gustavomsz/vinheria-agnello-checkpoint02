# Vinharia Agnello

**Site publicado:** https://gustavomsouza24012006-bot.github.io/vinharia-agnello/


## Descrição do projeto

Site desenvolvido com base no caso da Vinheria Agnello, apresentando informações sobre a história da empresa, seus produtos e formas de contato. O projeto busca apresentar a vinheria, utilizando HTML e CSS.

## Estrutura do projeto

```bash
vinharia-agnello/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── style.css
    ├── imgs/
    │   ├── banner-vinho.svg
    │   ├── bianca.svg
    │   ├── giulio.svg
    │   ├── Vinharia.jpg
    │   ├── banner.png
    │   └── Vinnho1.png
    └── js/
       ├── script.js
       └── cadastroDePessoas.js
    └── pages/
        ├── historia.html
        ├── produtos.html
        ├── equipe.html
        └── contatos.html
```

---

## Explicação das páginas

- `index.html`: página inicial do site, com apresentação da vinheria.
- `historia.html`: mostra a história e a origem da marca.
- `produtos.html`: apresenta os produtos e opções de vinhos.
- `equipe.html`: As pessoas da vinheria: família Agnello, consultores, como funciona o atendimento e a equipe de bastidores.
- `contatos.html`: apresenta endereço, telefone, e-mail, horário de funcionamento e formulário para mensagens.

## Efeitos Visuais

- A página Contatos utiliza pseudo-classes como `:hover`, `:focus-visible`, `:checked` e `:nth-child()` para destacar a navegação, os campos e as opções do formulário.
- Pseudo-elementos `::before` e `::after` acrescentam detalhes decorativos aos dados de contato e ao título do formulário.
- A animação `@keyframes contato-entrada` apresenta suavemente as seções. Transições acompanham os estados interativos, e transformações aplicam movimento aos links, à imagem da fachada e aos botões.
- Os efeitos de Contatos ficam em `src/assets/css/efeitos.css`, arquivo também importado por `style.css`. Equipe e Produtos já possuem efeitos próprios em seus CSS.

## Integrantes

| Integrante | Responsabilidade |
|---|---|
| Giovanna Ciola | Pagina Principal (index) |
| Gustavo Moreira Souza |Página historia |
| Jamil de Jesus Chaluppe Filho |Página contatos|
| Nathaly Vieira Barbosa | Página Equipe |
| Marina Lobato Soares |Página produtos |
