# Relação com o Brandfy

## Módulos complementares

Brandfy e Companify operam como módulos complementares. O Brandfy resolve a
marca (propósito, missão, visão, valores, público, posicionamento,
personalidade, voz, naming, identidade visual, aplicações); o Companify
resolve a empresa (estratégia empresarial, mercado, modelo de negócio,
produto, tecnologia, marketing, vendas, finanças, operações, pessoas,
ameaças e plano de negócio), consumindo o contexto de marca como entrada
compartilhada.

## O que o Companify consome, sem reescrever

O Companify lê os artefatos já aprovados pelo Brandfy sempre que
disponíveis: `.brandfy/config.yaml`, `.brandfy/brief.md`,
`.brandfy/interview-summary.md`, `brand/strategy.md`, `brand/voice.md`,
`brand/manual.md`. Esses documentos nunca são reescritos silenciosamente
por uma skill `companify-*`.

`companify-cmo` é o maior consumidor: ele traduz posicionamento, promessa e
personalidade em posicionamento comercial, mas nunca inventa uma nova
personalidade ou posicionamento porque acredita que converteria melhor.

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
marca é encaminhada à skill `brandfy-*` correspondente, tipicamente
`brandfy-estrategia`. O Companify nunca aplica a mudança diretamente em
`.brandfy/` ou `brand/`.

## Quando o Brandfy ainda não existe

Um projeto pode usar o Companify sem ter passado pelo Brandfy. Nesse caso, a
seção Brandfy do Company Context permanece explicitamente vazia, em vez de
inferir posicionamento ou promessa. `companify-cmo` trabalha então apenas
com posicionamento comercial e ICP, sem herdar identidade de marca.
