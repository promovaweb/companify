# Testes e validação

## Suíte principal

Execute na raiz do Companify:

```bash
npm test
```

O comando roda `node --test tests/*.test.mjs`. `tests/skills.test.mjs`
confere quatro comportamentos:

- as 17 skills do MVP existem em `skills/companify-*`;
- cada `SKILL.md` tem frontmatter com `name` igual ao diretório e
  `description` entre 90 e 160 caracteres;
- cada `agents/openai.yaml` tem `display_name`, `short_description` (entre
  25 e 64 caracteres) e `default_prompt`;
- não existe `skills/companify/` como subpasta agrupadora.

## Teste manual do setup

Para conferir o script de configuração em um projeto temporário:

```bash
node skills/companify-setup/scripts/setup.mjs --project /tmp/companify-teste
ls /tmp/companify-teste/.companify/
ls /tmp/companify-teste/company/
node skills/companify-setup/scripts/setup.mjs --project /tmp/companify-teste --check
```

A primeira execução cria `.companify/config.yaml`, `company-context.md`,
`interview.md`, `assumptions.md`, `escolhas.md`, `comprovacoes.md`,
`metrics.md`, `ameacas.md`, `reviews/` e `company/README.md`, além de
inserir o bloco `companify:consumer` no `AGENTS.md` do projeto de teste. A
segunda execução, com `--check`, deve terminar sem erro; qualquer
divergência indica que o setup deixou de ser idempotente.

Também é possível usar o atalho registrado em `package.json`:

```bash
npm run setup:example
```

## Validador de proibições do Hub

O Companify é auditado pelo validador do Hub que confere travessão como
pontuação de prosa e as famílias léxicas vetadas por
`PROHIBITED-TERMOS-ABSOLUTOS.md`. A partir da raiz do Hub:

```bash
npm run validar:skills-prohibited
```

## Documentação e ebook

O comando abaixo gera o PDF e o EPUB a partir de `docs/`, seguindo a ordem
de `docs/reading-order.txt`:

```bash
npm run ebook
```

O comando de conferência confere a ordem das páginas, o manifesto, os
hashes, a estrutura XML do EPUB e a leitura básica do PDF, sem gerar uma
nova edição:

```bash
npm run ebook:verify
```

Quando `docs/` muda, incremente `ebooks/VERSION`, execute `npm run ebook` e
rode a verificação. A versão precisa ser igual à de `package.json`.

## Inspeção humana

Testes não detectam uma tabela quebrada no PDF, um link interno que aponta
para o capítulo errado ou um capítulo difícil de seguir. Abra o PDF e o
EPUB gerados e leia a documentação completa depois dos validadores formais.
