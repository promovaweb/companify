# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

## [Unreleased]

### Added

- Tradução inline de jargão nos worksheets/canvas (ICP, TAM/SAM/SOM,
  arquétipos de modelo de negócio, as seis camadas de produto e as siglas
  de C-level), para quem preenche sem conhecer os termos.
- `companify-market`, `companify-business-model` e `companify-cpo` agora
  conferem `.companify/company-context.md`/`company/market.md` antes de
  perguntar quem é o cliente, e confirmam em vez de repetir a pergunta.
- "Como a empresa será operada" (pessoas, agentes de IA ou híbrida) virou
  pergunta fundamental de `companify-ceo`; `product-strategy-canvas.md`
  orienta o CPO a tratar MVP como fluxo de agente quando aplicável.
- `companify-setup` passa a sincronizar também campos `Rótulo:` dentro de
  uma seção `## ` já existente, não só seções inteiras ausentes.

### Fixed

- `company-context-template.md` tinha o campo `Equipe:` duplicado, em
  `## Operação` e em `## Restrições`, sem diferenciação. Renomeados para
  refletir o que cada um mede de fato.

## [0.2.0] - 2026-08-16

### Added

- `companify-assistente`: porta de entrada conversacional para usuários
  leigos, em linguagem simples e rápida. Traduz os especialistas pelo
  [glossário](skills/companify-assistente/references/glossario-simples.md),
  roda `companify-setup` nos bastidores e prioriza um primeiro plano enxuto
  em uma conversa só, seguindo o
  [roteiro rápido](skills/companify-assistente/references/roteiro-rapido.md).
  Encaminha para `companify-builder` quando o usuário pedir a esteira
  completa.
- Convenção compartilhada de entrevista: toda skill `companify-*` que
  pergunta algo ao usuário reserva texto livre só para informação exclusiva
  da empresa e oferece de três a cinco alternativas concretas mais "outro"
  para o resto, documentada em
  [contrato-das-skills.md](docs/develop/contrato-das-skills.md#entrevista-e-progresso).
- `.companify/progresso.md`: artefato compartilhado que registra cada
  pergunta e resposta e o status de cada área do plano, para qualquer skill
  retomar uma entrevista interrompida sem repetir pergunta já respondida.
  Criado por padrão por `companify-setup`.
- `companify-setup` passa a sincronizar templates: acrescenta seções `## `
  ausentes em `.companify/company-context.md` e `.companify/progresso.md`
  já existentes quando o template evolui, sem sobrescrever conteúdo
  preenchido.
- Modelo de operação por agentes de IA: `.companify/company-context.md`
  ganha o campo "Modelo de operação" (humana, agentes de IA ou híbrida), e
  `companify-chro` passa a estruturar tanto sequência de contratação de
  pessoas quanto sequência de ativação de agentes, com uma seção de
  supervisão humana obrigatória para toda função executada por agente.

### Fixed

- `companify-builder/references/gates.md`: o Executive Alignment Gate
  omitia a revisão do CHRO; a checagem de `company/people.md` (ou do
  equivalente por agentes) agora é exigida como as demais oito lideranças.

## [0.1.0] - 2026-08-07

### Added

- Primeira versão do Companify: 17 skills para criar, estruturar e evoluir a
  empresa por trás de uma marca, produto ou projeto, organizadas em setup,
  descoberta, mercado, modelo de negócio, conselho executivo (CEO, CPO, CTO,
  CMO, CRO, CFO, COO, CHRO, `companify-ameacas`), board, plano de negócio e
  auditoria.
- Documentação completa (`docs/user/`, `docs/develop/`) e edição em PDF/EPUB
  publicada em `ebooks/`.

### Changed

- Taxonomia ajustada às proibições léxicas universais do Hub:
  `risco`/`riscos` virou `ameaça`/`ameaças` (skill `companify-risk` renomeada
  para `companify-ameacas`), `decisão`/`decisões` virou `escolha`/`escolhas`
  (registro `DEC-NNN` virou `ESC-NNN`), `evidência`/`evidências` virou
  `comprovação`/`comprovações`.

[0.2.0]: https://github.com/promovaweb/companify/releases/tag/v0.2.0
[0.1.0]: https://github.com/promovaweb/companify/releases/tag/v0.1.0
