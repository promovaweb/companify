# Contribuição e manutenção

## Prepare a alteração

Leia `AGENTS.md`, confira o estado do Git e identifique os arquivos que
constituem a interface pública. Uma mudança em `setup.mjs` normalmente
atinge o próprio script, o `SKILL.md` de `companify-setup`, esta
documentação e o teste em `tests/skills.test.mjs`.

Mantenha comentários, mensagens e documentação em Português do Brasil.
Termos técnicos permanecem em inglês quando essa é a forma reconhecida pelo
ecossistema (CAC, LTV, MRR, ICP, TAM/SAM/SOM).

## Crie ou altere uma skill

Uma nova skill `companify-*` precisa representar uma especialidade que não
cabe de forma coesa em uma skill existente; veja a lista de extensões
futuras possíveis (`companify-fundraising`, `companify-saas`, entre outras)
em `docs/specification.md`, seção 32. Prepare `SKILL.md`, metadados e
somente os recursos necessários, seguindo o
[contrato das skills](contrato-das-skills.md). Declare explicitamente qual
artefato em `company/` a skill produz, para que
[artefatos.md](artefatos.md) continue correto.

Não copie o manual inteiro para `references/`; carregue a fonte oficial do
projeto consumidor (`.companify/company-context.md`, os demais artefatos de
`company/`).

## Respeite o vocabulário proibido

Antes de considerar uma skill pronta, rode o validador do Hub descrito em
[testes.md](testes.md):

```bash
npm run validar:skills-prohibited
```

O comando confere travessão como pontuação de prosa e as famílias léxicas
`risco`, `decisão`, `evidência`, `critério`, `inventário`, `atrito`,
`bloqueio` e `em que`. Uma skill nova precisa nomear a consequência, a
escolha, a comprovação ou a regra real em vez dessas palavras, do mesmo
jeito que `companify-ameacas`, `.companify/escolhas.md` e
`.companify/comprovacoes.md` já fazem.

## Documente o comportamento

Atualize o guia do usuário quando a mudança altera instalação, sequência de
uso, comando ou artefato produzido. Atualize o guia técnico quando muda a
arquitetura, o contrato ou a manutenção.

Todas as páginas entram uma única vez em `docs/reading-order.txt`. Uma
página esquecida reprova o build do ebook para impedir a publicação de uma
edição incompleta.

## Valide antes da publicação

Execute, a partir da raiz do Companify:

```bash
npm test
npm run ebook
npm run ebook:verify
```

E, a partir da raiz do Hub:

```bash
npm run validar:skills-prohibited
```

Depois, confira o diff, abra o PDF e o EPUB e leia os trechos afetados.

## Versione a release

O framework e o ebook usam a mesma SemVer. Atualize `version` em
`package.json` e o conteúdo de `ebooks/VERSION` juntos, registre a mudança
em `CHANGELOG.md` e só então rode `npm run ebook` para gerar a nova edição.
Uma correção compatível aumenta `PATCH`, uma funcionalidade nova (por
exemplo, uma skill adicional) aumenta `MINOR`, e uma mudança incompatível
(renomear ou remover uma skill, um arquivo de `.companify/` ou de
`company/`) aumenta `MAJOR`.
