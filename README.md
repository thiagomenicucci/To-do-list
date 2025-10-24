# Projeto: Lista de Tarefas (Aplicação Full Stack)

Este é um projeto Full Stack de uma aplicação de "Lista de Tarefas" (To-Do List). O objetivo é demonstrar o desenvolvimento de uma **API RESTful** completa em **Java/Spring Boot** e seu consumo em tempo real por um front-end interativo construído com **HTML5**, **CSS3** e **jQuery**.

O back-end (Java) e o front-end (HTML/CSS/JS) rodam no **mesmo servidor** Spring Boot, o que elimina a necessidade de configurações de CORS e demonstra uma arquitetura de aplicação web unificada.

![Badge Java](https://img.shields.io/badge/Java-17-blue.svg)
![Badge Spring Boot](https://img.shields.io/badge/Spring%20Boot-brightgreen.svg)
![Badge JavaScript](https://img.shields.io/badge/JavaScript-jQuery-yellow.svg)
![Badge HTML5](https://img.shields.io/badge/HTML5-E34F26.svg)
![Badge CSS3](https://img.shields.io/badge/CSS3-1572B6.svg)

## Funcionalidades

* **Adicionar** novas tarefas através de um formulário.
* **Listar** todas as tarefas cadastradas no banco de dados.
* **Marcar** tarefas como concluídas (e desmarcar) com um clique no *checkbox*.
* **Excluir** tarefas da lista.
* **Interface Responsiva** que se adapta a telas de celular.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### Back-End (API RESTful)

* **Java 17**: Linguagem principal da aplicação.
* **Spring Boot**: Framework para a criação da API RESTful.
    * **Spring Web**: Para criar os controllers e endpoints (`@RestController`, `@GetMapping`, etc.).
    * **Spring Data JPA**: Para a persistência de dados de forma simplificada.
* **H2 Database**: Banco de dados em memória, configurado para rodar junto com a aplicação sem necessidade de instalação.
* **Maven**: Gerenciador de dependências e build do projeto.

### Front-End (Cliente Web)

* **HTML5**: Para a estrutura semântica da página.
* **CSS3**: Para estilização, utilizando **Flexbox** e **Media Queries** para garantir o **desenvolvimento responsivo**.
* **JavaScript (ES6+)**: Base da lógica do cliente.
* **jQuery**: Utilizado para a manipulação eficiente do DOM e para realizar as **chamadas AJAX** (`$.ajax`, `$.get`) que consomem a API RESTful (operações GET, POST, PUT, DELETE).

## Como Executar

1.  Clone este repositório:
    ```bash
    git clone [URL-DO-SEU-REPOSITORIO-AQUI]
    ```
2.  Abra o projeto em uma IDE Java (como o IntelliJ IDEA).
3.  Aguarde o Maven baixar todas as dependências (pode levar um minuto).
4.  Encontre e execute a classe principal `ListatarefasApplication.java`.
5.  Após o servidor iniciar (procure por "Tomcat started on port(s): 8080"), abra seu navegador e acesse:
    
    `http://localhost:8080`
