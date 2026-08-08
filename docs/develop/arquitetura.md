# Arquitetura do Companify

## Biblioteca instalada no projeto consumidor

O Companify distribui conhecimento e automação como diretórios
independentes dentro de `skills/`. O gerenciador `skills add` copia as
especialidades selecionadas para o projeto consumidor. A execução acontece
no repositório do plano de negócio, por isso o script de setup resolve
entradas e saídas a partir do diretório informado, não a partir de dados
privados guardados no Companify.

| Origem | Passagem | Destino |
| --- | --- | --- |
| Repositório Companify | `skills add` seleciona e copia as especialidades | Skills instaladas no projeto consumidor |
| Skills instaladas | O agente lê método, referências e Company Context locais | `.companify/` recebe entrevista, premissas e escolhas |
| Skills instaladas | Os executivos escrevem artefatos aprovados | `company/` recebe estratégia, mercado, finanças e o plano consolidado |
| `company/` | A auditoria confronta artefato, Company Context e consolidação | `.companify/reviews/YYYY-MM-DD-audit.md` registra o resultado |

`.companify/` recebe configuração, entrevista, premissas, escolhas,
comprovações, métricas, ameaças e revisões. `company/` recebe os artefatos
empresariais consolidados. O agente lê as duas fontes, mas não mistura
trabalho reservado com arquivos destinados a publicação.

## Convenção `skills/companify-*`

Cada skill vive diretamente em `skills/companify-<especialidade>`, nunca
agrupada sob `skills/companify/`. O prefixo `companify-` já define a
família; uma subpasta adicional impediria que cada skill continuasse
instalável e utilizável de forma individual (por exemplo,
`npx skills add promovaweb/companify --skill companify-cfo`).

## Estrutura interna de cada skill

```text
skills/companify-ceo/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
├── scripts/
└── assets/
```

Nem toda skill precisa de todos os diretórios: crie somente o necessário.
`companify-setup` é a única skill com `scripts/`, porque é a única que
precisa escrever arquivos no projeto consumidor de forma idempotente; as
demais skills produzem os próprios artefatos diretamente, guiadas pelo
`SKILL.md` e pelos templates em `references/`.

## Tipos de skill

As 17 skills cumprem quatro papéis:

| Papel | Skills |
| --- | --- |
| Coordenação | `companify-setup`, `companify-builder` |
| Descoberta e viabilidade | `companify-interview`, `companify-market`, `companify-business-model` |
| Conselho executivo | `companify-ceo`, `companify-cpo`, `companify-cto`, `companify-cmo`, `companify-cro`, `companify-cfo`, `companify-coo`, `companify-chro`, `companify-ameacas` |
| Consolidação e conferência | `companify-board`, `companify-business-plan`, `companify-audit` |

As skills de coordenação fazem handoff para uma especialidade e retomam o
plano quando o artefato esperado existe em `company/`. Elas não duplicam o
método detalhado pela skill chamada.

## Limites de escrita

`companify-setup/scripts/setup.mjs` é idempotente por contrato: cria
somente arquivos e diretórios ausentes, e substitui apenas o bloco
delimitado no `AGENTS.md`. As demais skills não têm script próprio; elas
escrevem o artefato em `company/` diretamente, preservando escolhas já
aprovadas e registrando revisão em vez de sobrescrita silenciosa.

`companify-audit` é essencialmente leitor: registra achados em relatório e
deixa a correção para a especialidade apropriada, nunca corrige um artefato
aprovado por conta própria.

## Dependências externas

O script de setup usa apenas módulos nativos do Node.js
(`node:fs/promises`, `node:path`, `node:url`). O build do ebook depende de
Pandoc e WeasyPrint para gerar PDF e EPUB a partir de `docs/`; veja
[testes](testes.md).
