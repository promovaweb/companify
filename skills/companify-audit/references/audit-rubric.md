# Rubrica de auditoria

`companify-audit` não aprova pela presença de arquivos. Cada dimensão abaixo
exige leitura real do conteúdo e comparação cruzada entre documentos de
`company/`.

## Consistência

Produto, mercado, marketing, tecnologia, finanças e operação contam a mesma
história? Um ICP descrito em `market.md` que não aparece em `product.md` nem
em `marketing.md` é inconsistência, não detalhe.

## Evidência

Existem alegações sem evidência, declaração do usuário ou premissa
explícita? Toda frase categórica ("o mercado quer X") precisa de uma dessas
três origens rastreável em `.companify/evidence.md` ou no próprio documento.

## Hipóteses

Hipóteses aparecem como fatos? Procurar verbos afirmativos sem qualificador
("os clientes preferem", "o CAC é") onde o documento de origem registrava
incerteza.

## Finanças

As projeções possuem premissas explícitas? Todo número futuro precisa de
cenário (conservador/base/agressivo) ou está sinalizado como desconhecido.

## Produto

O roadmap corresponde à estratégia registrada em `company/strategy.md`?

## Tecnologia

A arquitetura corresponde ao estágio da empresa (idea, validation,
pre-revenue, early-revenue, growth, scale, established)? Uma arquitetura de
escala para uma empresa em estágio `idea` é sinal de sobre-engenharia.

## Marketing

Os canais fazem sentido para o ICP definido?

## Receita

Pricing e modelo comercial são coerentes com o modelo de negócio e com o
posicionamento de marca (`brand/strategy.md`), quando existente?

## Operação

A empresa consegue entregar o que vende, dado o `company/people.md` e
`company/operations.md` atuais?

## Pessoas

Existe capacidade humana para executar o roadmap sem depender de uma pessoa
não identificada?

## Marca

O plano contradiz decisões aprovadas pelo Brandfy? Se sim, existe uma entrada
em `.companify/decisions.md` registrando a tensão e o encaminhamento à skill
`brandfy-*` correspondente?

## Riscos

Os riscos críticos possuem mitigação e plano de contingência em
`company/risks.md`?

## Resultado

Salvar em `.companify/reviews/YYYY-MM-DD-audit.md` com um dos três vereditos:

```text
PASSED
PASSED WITH PENDING ITEMS
FAILED
```

Classificar cada achado por impacto, probabilidade e reversibilidade — a
mesma lente de auditoria usada pelo Brandfy — e diferenciar impedimento de
publicação, correção necessária, melhoria recomendada e observação.
