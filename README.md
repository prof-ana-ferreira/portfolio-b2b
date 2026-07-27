# 🚀 Portfólio Agência B2B — Showcase de Clientes

Um projeto de **Portfólio Digital para Agência de Desenvolvimento Web B2B**, desenvolvido como parte da disciplina de laboratório web. A aplicação apresenta a estrutura de uma agência de tecnologia fictícia, focada em uma experiência responsiva e moderna, integrando dados dinâmicos de parceiros comerciais e clientes via API REST.

---

## 🌐 Acesse o Projeto Online

Você pode visualizar e interagir com o projeto final rodando diretamente no **GitHub Pages**:

🔗 **[Clique aqui para acessar a aplicação online](https://prof-ana-ferreira.github.io/portfolio-b2b/)**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Demo%20Online-brightgreen?style=for-the-badge&logo=github)](https://prof-ana-ferreira.github.io/portfolio-b2b/)

---

## 🎨 Protótipo no Figma

O design do layout e os breakpoints responsivos foram desenvolvidos e disponibilizados no Figma:
* 🔗 [Acessar Modelo no Figma — Projeto Lab Web](https://www.figma.com/design/1N1Upe2vhqcOYX0gW6AwFd/projeto-lab-web--c%C3%B3pia-?node-id=1-10&p=f&t=8bOqkB8d5pQ4hPY1-0)

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **HTML5 Semântico:** Estruturação otimizada para acessibilidade e SEO utilizando as tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
* **CSS3 (Mobile-First & CSS Grid Areas):** Layout totalmente responsivo construído do menor para o maior breakpoint, com reorganização de layout via `grid-template-areas`.
* **JavaScript (ES6+):** Consumo assíncrono de API via `fetch`, manipulação dinâmica do DOM com Template Literals e renderização de dados.
* **JSONPlaceholder API:** Fonte de dados externa para simular informações reais de empresas parceiras.
* **W3C Validator:** Garantia de conformidade e boas práticas na escrita do código HTML.

---

## 🌐 Integração com a API (Showcase de Clientes)

A seção de **"Cases de Sucesso / Clientes Atendidos"** consome dinamicamente os dados da API REST gratuita [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

* **Endpoint:** `https://jsonplaceholder.typicode.com/users`
* **Regra de Negócio:** A aplicação busca a lista de usuários, filtra estritamente os **5 primeiros resultados** e mapeia as propriedades recebidas para popular os cards de depoimentos (`<article>`):
  * **Empresa:** `company.name`
  * **Depoimento / Slogan:** `company.catchPhrase`
  * **Responsável:** `name`
  * **Cidade:** `address.city`
  * **Contato:** `email` e `website`

---

## 📱 Responsividade e Breakpoints (Mobile-First)

O projeto foi projetado seguindo a filosofia *Mobile-First*, garantindo adaptação fluida nos três pontos de quebra (*breakpoints*) especificados:

1. **Mobile (390px):** Layout em coluna única, onde todos os blocos e cards de clientes ocupam 100% da largura da tela.
2. **Tablet (768px):** Transição para duas colunas no conteúdo principal, organizando os cards de clientes em um grid de 2 colunas.
3. **Desktop (1440px):** Layout completo mapeado com `grid-template-areas`. O menu de navegação (`<nav>`) alinha-se ao topo e os cards de clientes distribuem-se em 3 colunas paralelas.

---

## 📁 Estrutura de Arquivos do Projeto

```text
├── src/
│   ├── icons/
│   └── img/
├── index.html     # Estrutura HTML5 semântica
├── style.css      # Estilização CSS Grid e Media Queries (Mobile-First)
├── script.js      # Lógica JS de consumo da API e renderização no DOM
└── README.md      # Documentação do projeto
```

---

## 💻 Como Executar o Projeto

1. **Clone este repositório:**
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```


2. **Navegue até a pasta do projeto:**
```bash
cd nome-do-repositorio
```


3. **Abra a aplicação:**
* Basta abrir o arquivo `index.html` em qualquer navegador.
* *Opcional:* Se estiver utilizando o VS Code, clique com o botão direito no `index.html` e selecione **Open with Live Server**.



---

## 📋 Critérios de Qualidade Aplicados

* ✅ **Semântica HTML5:** Estrutura clara e acessível.
* ✅ **Validação W3C:** Código limpo e verificado no [validator.w3.org](https://validator.w3.org/).
* ✅ **Zero Erros no Console:** Requisições assíncronas tratadas e renderizadas de forma limpa.
* ✅ **Fidelidade ao Design:** Layout construído rigorosamente com base nas diretrizes do Figma.
