# Auditoria do plano de negócio

## Não aprova pela presença de arquivos

`$companify-audit` audita sem corrigir silenciosamente artefatos aprovados:
reporta o achado e deixa a correção para a skill responsável. Um
`company/finance.md` que existe mas projeta números sem premissa reprova a
mesma seção quanto à ausência do próprio arquivo.

## As dimensões da rubrica

| Dimensão | Pergunta |
| --- | --- |
| Consistência | Produto, mercado, marketing, tecnologia, finanças e operação contam a mesma história? |
| Comprovação | Existem alegações sem comprovação, declaração do usuário ou premissa explícita? |
| Hipóteses | Hipóteses aparecem como fatos, sem qualificador de incerteza? |
| Finanças | As projeções possuem premissas explícitas ou cenário nomeado? |
| Produto | O roadmap corresponde à estratégia registrada em `company/strategy.md`? |
| Tecnologia | A arquitetura corresponde ao estágio real da empresa? |
| Marketing | Os canais fazem sentido para o ICP definido? |
| Receita | Pricing e modelo comercial são coerentes com o modelo de negócio e com a marca? |
| Operação | A empresa consegue entregar o que vende, dado `company/people.md` e `company/operations.md`? |
| Pessoas | Existe capacidade humana para executar o roadmap sem depender de uma pessoa não identificada? |
| Marca | O plano contradiz alguma escolha aprovada pelo Brandfy sem registro de tensão? |
| Ameaças | As ameaças críticas possuem mitigação e plano de contingência? |

## O veredito

O resultado é salvo em `.companify/reviews/YYYY-MM-DD-audit.md` com um dos
três vereditos:

```text
PASSED
PASSED WITH PENDING ITEMS
FAILED
```

Cada achado é classificado por impacto, probabilidade e reversibilidade, e
por severidade: impedimento de publicação, correção necessária, melhoria
recomendada ou observação. Nem todo achado impede o uso do plano.

## Cadeia de comprovação

A auditoria confere se o Company Context, o artefato especializado, a
consolidação no plano e o uso real concordam entre si. Um ICP descrito em
`market.md` que não aparece em `product.md` nem em `marketing.md` é
inconsistência, não detalhe: a auditoria deve reprovar essa seção, não
apenas anotar como observação.
