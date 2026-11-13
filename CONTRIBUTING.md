# Contribuindo com o Companify

Este guia é para quem altera skills, scripts, testes ou documentação do
Companify. Para instalar e usar a biblioteca, leia o
[README](README.md).

O repositório mantém uma biblioteca de skills em Markdown, um script de setup
em Node.js e uma documentação compilada em PDF e EPUB. A base técnica é
[Node.js](https://github.com/nodejs/node) 22 ou posterior, sem dependência de
runtime no script de setup, mais o gerenciador
[skills](https://github.com/vercel-labs/skills) para instalar e conferir o
catálogo no projeto consumidor.

## Antes de começar

- Converse no [Discord](https://promovaweb.com/discord) antes de um trabalho
  grande. Uma dúvida de escopo resolvida ali evita um pull request longo sem
  retorno.
- Abra uma [issue](https://github.com/promovaweb/companify/issues) por
  mudança. Descreva o comportamento atual, o esperado e os arquivos
  envolvidos.
- Leia `AGENTS.md` na raiz. Ele define idioma, vocabulário e o contrato de
  validação que vale para skills, scripts e documentação.

## Ambiente

```bash
git clone https://github.com/promovaweb/companify.git
cd companify
node --version
```

O repositório não tem dependências de npm para rodar os testes. Confira a
versão do Node.js antes de começar: o script de setup usa `node:fs/promises`,
`node:path` e `node:url`.

Para gerar o PDF e o EPUB da documentação, instale Pandoc, WeasyPrint,
Python, ImageMagick (`magick`), `fc-match`, `xmllint`, `pdfinfo`, `pdftotext`
e `unzip`. Sem essas ferramentas, os testes continuam funcionando e apenas o
build do ebook fica indisponível.

O script de setup escreve arquivos. Use um diretório temporário para
experimentos e não rode o setup na raiz deste repositório:

```bash
node skills/companify-setup/scripts/setup.mjs --project /tmp/companify-teste
```

## Organização do código

```text
skills/                 uma pasta companify-* por especialidade
├── companify-setup/    única skill com scripts/, responsável pelo setup
└── companify-<área>/   SKILL.md, agents/openai.yaml e references/
docs/                   guia do usuário, guia técnico e especificação
tests/                  contratos automatizados da estrutura das skills
brand/                  identidade visual do próprio Companify
ebooks/                 PDF e EPUB publicados, com VERSION e build.json
.ebook/                 script de build da documentação
```

Cada skill vive diretamente em `skills/companify-*`. Uma subpasta
`skills/companify/` impediria a instalação individual e reprova os testes.

A arquitetura completa, com a passagem de dados entre projeto consumidor e
artefatos, está em
[docs/develop/arquitetura.md](docs/develop/arquitetura.md).

## Fluxo de trabalho

1. Atualize a `main` e crie uma branch curta, por exemplo
   `feat/companify-cfo-cenarios`.
2. Identifique o que a mudança atinge. Alterar `setup.mjs` costuma exigir
   mudança no `SKILL.md` de `companify-setup`, na documentação e no teste.
3. Faça a menor mudança que resolve o problema.
4. Rode os validadores da seção [Validar](#validar).
5. Abra o pull request com a issue relacionada.

### Criar ou alterar uma skill

Uma nova skill precisa representar uma especialidade que não cabe de forma
coesa em uma existente. As extensões previstas estão em
`docs/specification.md`.

- Escreva o `SKILL.md` com frontmatter `name` igual ao diretório e
  `description` entre 90 e 160 caracteres.
- Preencha `agents/openai.yaml` com `display_name`, `short_description` entre
  25 e 64 caracteres e `default_prompt`.
- Use `references/`, `scripts/` e `assets/` só quando o fluxo precisar. O
  teste exige esses diretórios apenas quando você os cria.
- Declare no `SKILL.md` qual artefato de `company/` a skill produz e atualize
  [docs/develop/artefatos.md](docs/develop/artefatos.md).
- Carregue o contexto do projeto consumidor em vez de copiar o manual inteiro
  para `references/`.

O contrato completo está em
[docs/develop/contrato-das-skills.md](docs/develop/contrato-das-skills.md).

## Regras do código

- Escreva em Português do Brasil. Preserve termos técnicos em inglês quando
  forem a convenção do cargo ou do formato: CAC, LTV, MRR, ICP, TAM/SAM/SOM.
- Comente o que não é evidente. Não comente o que o código já diz.
- Mantenha os scripts idempotentes: crie arquivos ausentes, preserve conteúdo
  preenchido e substitua somente o bloco delimitado no `AGENTS.md`.
- Não grave dados de uma empresa cliente neste repositório. `.companify/` e
  `company/` pertencem ao projeto consumidor.
- Não reescreva silenciosamente um arquivo de `.brandfy/` ou `brand/`.
  Registre a tensão em `.companify/escolhas.md` e encaminhe a mudança para a
  skill `brandfy-*` responsável.
- Evite travessão como pontuação de prosa e as famílias léxicas vetadas por
  `PROHIBITED-TERMOS-ABSOLUTOS.md` no Hub. Nomeie a consequência, a escolha, a
  comprovação ou a regra real.
- Classifique toda informação em fato, comprovação, declaração do usuário,
  contexto Brandfy, inferência, hipótese, premissa, recomendação, escolha ou
  pendência. Não apresente projeção como fato.

## Validar

Na raiz do repositório:

```bash
npm test
```

O comando roda `node --test tests/*.test.mjs` e confere quatro pontos: as 18
skills existem em `skills/companify-*`, cada `SKILL.md` tem frontmatter
válido, cada `agents/openai.yaml` tem a interface completa e não existe a
subpasta agrupadora `skills/companify/`.

Para conferir o setup em um projeto temporário:

```bash
node skills/companify-setup/scripts/setup.mjs --project /tmp/companify-teste
node skills/companify-setup/scripts/setup.mjs --project /tmp/companify-teste --check
```

A segunda execução precisa terminar sem erro. Uma divergência indica que o
setup deixou de ser idempotente.

O atalho `npm run setup:example` executa o mesmo setup em `example/`.

Depois de mudar `docs/`:

```bash
npm run ebook
npm run ebook:verify
```

`npm run ebook` gera PDF e EPUB na ordem de `docs/reading-order.txt`.
`npm run ebook:verify` confere a ordem das páginas, o manifesto, os hashes, a
estrutura XML do EPUB e a leitura básica do PDF, sem gerar uma edição nova.
Cada página entra em `docs/reading-order.txt` exatamente uma vez.

A partir da raiz do Hub, rode ainda o validador de proibições que audita esta
biblioteca:

```bash
npm run validar:skills-prohibited
```

Leia o PDF e o EPUB gerados. Os validadores não detectam uma tabela quebrada,
um link para o capítulo errado ou um trecho difícil de seguir.

## Documentação

- `docs/user/` explica instalação, conceitos, primeiro plano, entrevista,
  conselho executivo, board, plano de negócio, auditoria, relação com o
  Brandfy e solução de problemas.
- `docs/develop/` explica arquitetura, contrato das skills, artefatos, testes
  e este processo de contribuição.
- `docs/specification.md` é o documento mestre do desenho do sistema.

Atualize o guia do usuário quando a mudança alterar instalação, sequência de
uso, comando ou artefato produzido. Atualize o guia técnico quando mudar a
arquitetura, o contrato ou a manutenção. Uma página nova entra em
`docs/reading-order.txt` na mesma alteração.

Quando a documentação divergir de uma interface executável, corrija a página e
o teste relacionado juntos.

## Commits e pull requests

Use um prefixo curto e o escopo no assunto, no padrão já usado no histórico:

```text
feat: adiciona cenários ao companify-cfo
fix: corrige campo duplicado no template de contexto
docs: reorganiza o guia de instalação
```

Um pull request precisa trazer:

- a descrição do comportamento antes e depois;
- a issue relacionada;
- os comandos de validação executados e o resultado;
- a documentação atualizada, quando o uso ou o contrato mudar;
- a nova edição do ebook, quando `docs/` mudar.

## Releases

A versão fica em `package.json` e em `ebooks/VERSION`, sempre iguais. Uma
correção compatível aumenta `PATCH`, uma funcionalidade nova aumenta `MINOR` e
uma mudança incompatível, como renomear ou remover uma skill ou um arquivo de
`.companify/` e `company/`, aumenta `MAJOR`.

O passo a passo:

1. Atualize `version` em `package.json` e o conteúdo de `ebooks/VERSION`.
2. Registre a mudança em `CHANGELOG.md`.
3. Rode `npm run ebook` e `npm run ebook:verify`.
4. Faça o commit, crie a tag `v<versão>` e publique a GitHub Release com
   `gh release create`. O repositório não tem workflow de release.

## Licença

O Companify é distribuído sob a licença [MIT](LICENSE). Ao enviar uma
contribuição, você concorda em licenciá-la nos mesmos termos.
