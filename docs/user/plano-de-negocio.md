# Plano de negócio

## Consolidação, não concatenação

`$companify-business-plan` roda depois que o Executive Alignment Gate está
completo. Ele não concatena os documentos de `company/`: constrói uma
narrativa única, citando o artefato de origem de cada seção. Um plano
consolidado sobre análises incompletas é prematuro.

## As 32 seções

`company/business-plan.md` segue esta ordem, cada seção puxando da fonte
correspondente:

1. Resumo executivo
2. Tese empresarial (`company/strategy.md`)
3. Problema (Company Context)
4. Solução
5. Proposta de valor (`company/business-model.md`)
6. Mercado (`company/market.md`)
7. Segmentos
8. ICP
9. Concorrência
10. Vantagem competitiva
11. Produto (`company/product.md`)
12. Roadmap de produto
13. Modelo de negócio
14. Monetização (`company/revenue.md`)
15. Pricing
16. Marketing (`company/marketing.md`)
17. Go-to-market
18. Vendas
19. Retenção e expansão
20. Tecnologia (`company/technology.md`)
21. Operações (`company/operations.md`)
22. Pessoas (`company/people.md`)
23. Modelo financeiro (`company/finance.md`)
24. Unit economics
25. Projeções
26. Métricas (`.companify/metrics.md`)
27. Ameaças (`company/ameacas.md`)
28. Roadmap empresarial (`company/roadmap.md`)
29. Plano de 90 dias
30. Premissas críticas (`.companify/assumptions.md`)
31. Experimentos
32. Escolhas pendentes (`.companify/escolhas.md`)

## Roadmap empresarial

`company/roadmap.md` é um artefato-irmão do plano, consolidado a partir dos
roadmaps setoriais que CPO, CTO, CMO, CRO, COO, CHRO e CFO já registram nas
próprias seções. Os horizontes podem ser `Agora / Próximo / Depois` ou
`0–3 meses / 3–12 meses / 12–36 meses`, cobrindo produto, tecnologia,
marketing, vendas, operação, pessoas e finanças.

## Plano de 90 dias

Todo plano empresarial termina em execução, não em intenção:

```text
Objetivo → Iniciativa → Experimento → Métrica → Responsável → Prazo
```

Separado em Dias 1–30, 31–60 e 61–90. `$companify-ceo` e `$companify-board`
priorizam antes da publicação para evitar dezenas de iniciativas
simultâneas: um plano que tenta tudo não prioriza nada.

## Atualização contínua

`company/business-plan.md` não é um documento estático criado uma única vez:
é uma fotografia do negócio em determinada data. Cada revisão informa
versão, data, mudanças relevantes, novas comprovações, premissas
invalidadas e escolhas alteradas no topo do arquivo.
