# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

## [Unreleased]

### Added

- `companify-assistente`: porta de entrada conversacional para usuários
  leigos, em linguagem simples e rápida. Traduz os especialistas pelo
  [glossário](skills/companify-assistente/references/glossario-simples.md),
  roda `companify-setup` nos bastidores e prioriza um primeiro plano enxuto
  em uma conversa só, seguindo o
  [roteiro rápido](skills/companify-assistente/references/roteiro-rapido.md).
  Encaminha para `companify-builder` quando o usuário pedir a esteira
  completa.

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
