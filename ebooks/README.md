# Ebooks da documentação do Companify

Esta pasta publica a documentação completa do Companify em PDF e EPUB. O
conteúdo é compilado das páginas em `docs/`, na ordem registrada em
`docs/reading-order.txt`.

## Edição vigente

A versão do guia do Companify está em [`VERSION`](VERSION) e segue SemVer:

- `PATCH` registra correção de texto, link, exemplo ou apresentação.
- `MINOR` registra um capítulo novo ou uma ampliação material.
- `MAJOR` registra uma reorganização incompatível do percurso.

Os artefatos do produto seguem estes nomes:

```text
Companify-Documentacao-Completa-v<versão>.pdf
Companify-Documentacao-Completa-v<versão>.epub
```

[`build.json`](build.json) registra a versão, o digest das fontes e os hashes
dos dois arquivos.

## Gere os formatos do Companify

Na raiz do repositório Companify:

```bash
npm run ebook
```

O build exige Pandoc, WeasyPrint, Python, ImageMagick (`magick`), `fc-match`,
`xmllint`, `pdfinfo`, `pdftotext` e `unzip`. `docs/reading-order.txt` precisa
listar cada página Markdown exatamente uma vez.

## Confira a edição

```bash
npm run ebook:verify
```

A verificação compara as fontes com o manifesto, recalcula hashes, valida os
documentos XML do EPUB e confirma que o PDF possui páginas e o título
esperado.

Toda mudança pública usa a mesma SemVer em `package.json` e `ebooks/VERSION`.
A release exige novo build, inspeção visual do PDF, abertura do EPUB e
execução da verificação.
