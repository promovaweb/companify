# Relação com o Brandfy

## Módulos complementares

Brandfy e Companify operam como módulos complementares. O Brandfy resolve a
marca, do propósito e do posicionamento à voz e à identidade visual. O
Companify resolve a empresa, da estratégia e do mercado às finanças e ao
plano de negócio. Ele lê os arquivos de marca como entrada compartilhada.

## O que o Companify consome, sem reescrever

Quando existem, o Companify lê os artefatos já aprovados pelo Brandfy:
`.brandfy/config.yaml`, `.brandfy/brief.md`,
`.brandfy/interview-summary.md`, `brand/strategy.md`, `brand/voice.md` e
`brand/manual.md`. Nenhuma skill `companify-*` reescreve esses documentos em
silêncio.

`companify-cmo` é o maior consumidor: ele traduz posicionamento, promessa e
personalidade em posicionamento comercial, sem inventar uma nova
personalidade ou posicionamento por achar que converteria melhor.

## Quando uma análise entra em conflito com a marca

Quando uma análise empresarial entra em conflito com uma escolha de marca já
aprovada, o Companify registra o conflito em vez de resolvê-lo
unilateralmente:

```text
Contexto Brandfy:
Posicionamento premium.

Hipótese do CFO:
O mercado inicialmente acessível apresenta maior sensibilidade a preço.

Tensão:
Redução agressiva de preço pode enfraquecer o posicionamento aprovado.

Recomendação:
Avaliar uma oferta de entrada diferente, preservando o posicionamento da
oferta principal.

Status:
Escolha pendente.
```

O registro entra em `.companify/escolhas.md` e a mudança de estratégia de
marca é encaminhada à skill `brandfy-*` correspondente, em geral
`brandfy-estrategia`. O Companify não aplica a mudança diretamente em
`.brandfy/` ou `brand/`.

## Quando o Brandfy ainda não existe

Um projeto pode usar o Companify sem ter passado pelo Brandfy. Nesse caso, a
seção Brandfy do Company Context permanece explicitamente vazia, em vez de
inferir posicionamento ou promessa. `companify-cmo` trabalha então apenas
com posicionamento comercial e ICP, sem herdar identidade de marca.
