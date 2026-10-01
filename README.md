# SertON — Conectividade Sertaneja

Site institucional da SertON, uma organização social fictícia de inclusão digital que atua no sertão nordestino, desenvolvido como projeto da disciplina de Desenvolvimento Front-end.

## Sobre o projeto

A SertON promove o acesso à internet e à formação digital para jovens e idosos do interior do Nordeste, por meio de aulas de tecnologia, laboratórios de informática, cursos gratuitos e apoio a estudantes de TI. O site apresenta a organização, lista seus projetos e permite o cadastro de doadores e voluntários.

## Tecnologias utilizadas

- **HTML5**: estrutura semântica das páginas (header, nav, main, section, article, footer)
- **CSS3**: Design System com variáveis customizadas (cores, tipografia, espaçamentos), layout responsivo com CSS Grid (12 colunas, 5 breakpoints) e Flexbox, componentes de feedback (badges, alertas, modal)
- **JavaScript (Vanilla)**: aplicação de página única (SPA) com roteamento por hash, templates dinâmicos, validação de formulário, persistência de dados com localStorage e integração com a biblioteca de máscaras IMask
- **Git e GitHub**: controlo de versões seguindo o modelo GitFlow, com branches `main`, `develop` e `feature/`

## Estrutura de diretórios

ong-site/
├── html/ → páginas da aplicação (index.html)
├── css/ → folha de estilos (styles.css)
├── js/ → lógica da aplicação (data.js, templates.js, router.js, events.js, etc.)
├── imagens/ → recursos de mídia
├── docs/ → documentação complementar
└── README.md


## Como executar o projeto localmente

Não é necessário nenhum servidor ou instalação de dependências. Siga os passos:

1. Clone o repositório:
```bash
   git clone https://github.com/marcoswillamesoleite/serton-site.git
```
2. Entre na pasta do projeto:
```bash
   cd serton-site
```
3. Abra o arquivo `html/index.html` diretamente no navegador (duplo clique, ou clique com o botão direito e escolha "Abrir com").

A aplicação é totalmente estática e funciona com o protocolo `file://`, sem necessidade de servidor local.

## Versionamento

O projeto segue o modelo GitFlow, com três branches principais:

- `main`: versão estável, pronta para produção, marcada com tags de Versionamento Semântico (ex.: `v1.0.0`)
- `develop`: branch de desenvolvimento contínuo, onde as funcionalidades concluídas são reunidas
- `feature/*`: branches específicas para funcionalidades ou ajustes isolados, criadas a partir de `develop` e mescladas de volta via Pull Request

As mensagens de commit seguem o padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, entre outros).

## Autor

Marcos Willames Oliveira Leite (MWill) — Estudante de Análise e Desenvolvimento de Sistemas.