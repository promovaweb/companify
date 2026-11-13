<p align="center">
  <a href="https://promovaweb.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/promovaweb/companify/main/brand/logo/png/logo-dark-1024w.png">
      <img alt="Companify" src="https://raw.githubusercontent.com/promovaweb/companify/main/brand/logo/png/logo-light-1024w.png" width="260">
    </picture>
  </a>
</p>

<h1 align="center">Companify</h1>

<p align="center">
  Uma biblioteca de skills para criar, estruturar e evoluir a empresa por trás de uma marca, produto ou projeto.
</p>

<p align="center">
  Um projeto da <a href="https://promovaweb.com">Promovaweb</a>
</p>

<p align="center">
  <a href="https://github.com/promovaweb/companify/releases/latest"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/promovaweb/companify"></a>
  <a href="https://github.com/promovaweb/companify/blob/main/LICENSE"><img alt="Licença" src="https://img.shields.io/github/license/promovaweb/companify"></a>
</p>

<p align="center">
  <a href="https://promovaweb.com/discord"><img alt="Discord: obter ajuda e conversar com a Comunidade" src="https://img.shields.io/badge/Discord-Obter%20ajuda%20e%20conversar%20com%20a%20Comunidade-5865F2?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://promovaweb.com/docs/">Documentação</a> ·
  <a href="https://promovaweb.com/discord">Discord</a> ·
  <a href="https://promovaweb.com/planos?utm_source=github&utm_medium=readme&utm_campaign=companify">Planos da Promovaweb</a> ·
  <a href="https://github.com/promovaweb/companify/blob/main/CHANGELOG.md">Changelog</a>
</p>

## O que é

O Companify organiza o raciocínio empresarial em skills para agentes de IA.
Cada skill cumpre o papel de uma liderança executiva e grava o resultado em
arquivos que pessoas e agentes consultam antes da próxima escolha.

O trabalho fica dividido em dois diretórios do projeto consumidor:

- `.companify/` guarda o processo: configuração, entrevista, premissas,
  escolhas, comprovações, métricas, ameaças e revisões.
- `company/` guarda o resultado: estratégia, mercado, modelo de negócio,
  produto, tecnologia, marketing, receita, finanças, operações, pessoas,
  ameaças, roadmap e o plano de negócio consolidado.

O Companify responde pelo negócio. A marca continua com o
[Brandfy](https://github.com/promovaweb/brandfy). As duas bibliotecas
compartilham contexto e nenhuma skill `companify-*` reescreve um arquivo de
`.brandfy/` ou `brand/`.

Use quando você tem uma ideia, um produto ou uma empresa em operação e
precisa de um plano de negócio com premissas explícitas, números rotulados e
pontos pendentes identificados.

| Entrada | Quando usar |
| --- | --- |
| `$companify-assistente` | Primeiro contato, em linguagem simples, sem exigir que você conheça a arquitetura. |
| `$companify-builder` | Esteira completa, com os quatro gates de qualidade. |
| `$companify-interview` | Preencher apenas as lacunas relevantes do Company Context. |
| `$companify-cfo` | Uma área específica, como finanças, sem passar pelo percurso inteiro. |

O conselho executivo reúne `companify-ceo`, `companify-cpo`, `companify-cto`,
`companify-cmo`, `companify-cro`, `companify-cfo`, `companify-coo`,
`companify-chro` e `companify-ameacas`. O `companify-board` confronta as
análises. `companify-business-plan` e `companify-audit` fecham o pacote.
Mercado e modelo de negócio entram por `companify-market` e
`companify-business-model`.

## Instalação

Requisitos: Node.js 22 ou posterior e um projeto acessível ao agente. Abra o
terminal na raiz do projeto que vai receber o plano de negócio:

```bash
npx skills add promovaweb/companify
```

O comando instala as 18 skills e registra origem, caminho e hash em
`skills-lock.json`. Para listar o catálogo remoto antes de instalar:

```bash
npx skills add promovaweb/companify --list
```

Para instalar uma parte dele, escolha o agente e as skills:

```bash
npx skills add promovaweb/companify --agent codex --skill '*' -y --copy
```

O Companify é uma biblioteca de skills, não um pacote publicado no npm. A
instalação acontece pelo gerenciador `skills`.

## Primeiros passos

1. Instale as skills na raiz do projeto, como na seção anterior.
2. Rode o setup, apontando o caminho da skill instalada:

   ```bash
   node <caminho-da-skill-instalada>/companify-setup/scripts/setup.mjs --project .
   ```

3. Confira que a execução é idempotente e que nada ficou faltando:

   ```bash
   node <caminho-da-skill-instalada>/companify-setup/scripts/setup.mjs --project . --check
   ```

4. Preencha `.companify/config.yaml` com nome, país, moeda e estágio da
   empresa. Os estágios aceitos são `idea`, `validation`, `pre-revenue`,
   `early-revenue`, `growth`, `scale` e `established`.
5. Peça o primeiro plano ao agente:

   ```text
   Use $companify-assistente para montar meu primeiro plano de negócio.
   ```

O setup cria `.companify/` com `config.yaml`, `company-context.md`,
`interview.md`, `assumptions.md`, `escolhas.md`, `comprovacoes.md`,
`metrics.md`, `ameacas.md` e `reviews/`. Também cria `company/README.md` e
insere o bloco `companify:consumer` no `AGENTS.md`, entre os marcadores
`<!-- companify:consumer:start -->` e `<!-- companify:consumer:end -->`. O
conteúdo fora dos marcadores permanece intacto.

## Uso

### Primeiro plano rápido

```text
Use $companify-assistente para montar o plano de negócio desta empresa.
```

A conversa é curta e não pressupõe que você conheça os cargos. Ela traduz cada
especialista e entrega um primeiro plano enxuto.

### Esteira completa

```text
Use $companify-builder para construir o plano de negócio do zero.
```

O builder avança por quatro fases e só passa para a seguinte quando o gate
correspondente estiver fechado: Context, Viability, Executive Alignment e
Business Plan. Uma empresa com documentação forte pode pular etapas já
comprovadas.

### Uma área específica

```text
Use $companify-cfo para modelar o financeiro a partir do modelo de negócio
já aprovado.
```

O mesmo vale para as demais especialidades, inclusive `$companify-board` para
confrontar análises em conflito e `$companify-audit` para revisar o plano
antes de publicar.

## Uso com agentes

As skills são instaladas pelo `skills` e funcionam com os agentes compatíveis
com esse gerenciador, como [Claude Code](https://github.com/anthropics/claude-code),
[Codex](https://github.com/openai/codex) e
[OpenCode](https://github.com/sst/opencode). O setup escreve o
bloco de instruções no `AGENTS.md`. Cada agente lê esse bloco ao trabalhar no
projeto.

O bloco orienta o agente a ler `.companify/` e `company/` antes de responder,
usar `$companify-interview` quando faltar contexto, registrar revisão em
`.companify/escolhas.md` em vez de sobrescrever uma escolha aprovada e
encaminhar conflito de marca para a skill `brandfy-*` correspondente.

Limites de escrita: apenas `companify-setup` tem script. Ele cria os arquivos
ausentes e acrescenta seções e campos que faltam nos templates, sem apagar o
que já está preenchido. No `AGENTS.md`, substitui somente o bloco delimitado.
As demais skills gravam os próprios artefatos em `company/`.

## Documentação

A documentação dos projetos da Promovaweb fica em
[promovaweb.com/docs](https://promovaweb.com/docs/). O manual do Companify
acompanha o repositório:

- [Guia do usuário](https://github.com/promovaweb/companify/blob/main/docs/user/README.md):
  instalação, conceitos, primeiro plano, entrevista, conselho executivo,
  board, plano de negócio, auditoria e solução de problemas.
- [Guia técnico](https://github.com/promovaweb/companify/blob/main/docs/develop/README.md):
  arquitetura, contrato das skills, artefatos, testes e contribuição.
- [PDF](https://github.com/promovaweb/companify/blob/main/ebooks/ebook-companify.pdf)
  e [EPUB](https://github.com/promovaweb/companify/blob/main/ebooks/ebook-companify.epub)
  da edição vigente.

## Feito com

| Projeto | Para quê |
| --- | --- |
| [Node.js](https://github.com/nodejs/node) | runtime do script de setup, sem dependência externa |
| [skills](https://github.com/vercel-labs/skills) | gerenciador que instala as skills no projeto consumidor |
| [Brandfy](https://github.com/promovaweb/brandfy) | contexto de marca lido pelas skills e destino de conflitos de posicionamento |

## Comunidade e suporte

- **Discord:** [obter ajuda e conversar com a Comunidade](https://promovaweb.com/discord).
- **Bugs e pedidos:** abra uma
  [issue](https://github.com/promovaweb/companify/issues) com a versão do
  Node.js, o sistema operacional, o comando executado, a mensagem completa e a
  lista dos arquivos esperados. Remova tokens e dados financeiros sensíveis.
- **Novidades:** acompanhe o
  [CHANGELOG](https://github.com/promovaweb/companify/blob/main/CHANGELOG.md) e
  as [releases](https://github.com/promovaweb/companify/releases).

## Contribuir

O guia de desenvolvimento, os testes e o fluxo de release estão em
[CONTRIBUTING.md](https://github.com/promovaweb/companify/blob/main/CONTRIBUTING.md).
Toda contribuição começa por uma issue ou pelo Discord.

## Promovaweb

O Companify é mantido pela [Promovaweb](https://promovaweb.com), comunidade de
co-working digital onde profissionais aprendem a construir, automatizar e
gerir negócios de tecnologia e IA com aulas ao vivo, Co-works e revisão de
projetos reais.

Quer usar o Companify em projetos de verdade, com acompanhamento? Conheça os
[planos da Promovaweb](https://promovaweb.com/planos?utm_source=github&utm_medium=readme&utm_campaign=companify).

## Licença

[MIT](https://github.com/promovaweb/companify/blob/main/LICENSE).
