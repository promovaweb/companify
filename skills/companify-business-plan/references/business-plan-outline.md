# Estrutura do plano de negócio

`company/business-plan.md` segue esta ordem. Cada seção cita a fonte em
`company/*.md` de onde a informação vem: a consolidação não cria fato novo,
apenas narra o que as skills especializadas já produziram e registrado
premissas/escolhas associadas.

1. **Resumo executivo**: visão condensada do negócio.
2. **Tese empresarial**: por que a empresa existe e por que pode funcionar (`company/strategy.md`).
3. **Problema**: frequência, intensidade e comprovações (Company Context).
4. **Solução**: como a empresa pretende resolver o problema.
5. **Proposta de valor**: valor criado para o cliente (`company/business-model.md`).
6. **Mercado**: categoria e contexto (`company/market.md`).
7. **Segmentos**: mercados e públicos prioritários.
8. **ICP**: perfil de cliente ideal.
9. **Concorrência**: concorrentes, substitutos e alternativas.
10. **Vantagem competitiva**: razões para criar ou sustentar vantagem.
11. **Produto**: estratégia de produto (`company/product.md`).
12. **Roadmap de produto**: evolução proposta.
13. **Modelo de negócio**: como cria, entrega e captura valor.
14. **Monetização**: mecanismos de receita (`company/revenue.md`).
15. **Pricing**: estratégia de preço e premissas.
16. **Marketing**: estratégia de geração de demanda (`company/marketing.md`).
17. **Go-to-market**: entrada e expansão no mercado.
18. **Vendas**: estratégia comercial.
19. **Retenção e expansão**: como preservar e ampliar receita.
20. **Tecnologia**: estratégia tecnológica (`company/technology.md`).
21. **Operações**: modelo operacional (`company/operations.md`).
22. **Pessoas**: estrutura organizacional (`company/people.md`).
23. **Modelo financeiro**: receitas, custos e despesas (`company/finance.md`).
24. **Unit economics**: quando aplicável.
25. **Projeções**: cenários financeiros (conservador/base/agressivo).
26. **Métricas**: indicadores prioritários (`.companify/metrics.md`).
27. **Ameaças**: ameaças e mitigação (`company/ameacas.md`).
28. **Roadmap empresarial**: principais marcos (`company/roadmap.md`).
29. **Plano de 90 dias**: execução imediata.
30. **Premissas críticas**: o que precisa ser validado (`.companify/assumptions.md`).
31. **Experimentos**: como validar as principais premissas.
32. **Escolhas pendentes**: questões ainda abertas (`.companify/escolhas.md`).

## Roadmap empresarial (`company/roadmap.md`)

Artefato-irmão do plano, consolidado por `companify-business-plan` a partir
dos roadmaps setoriais que CPO, CTO, CMO, CRO, COO, CHRO e CFO já registram
em suas próprias seções. Horizontes possíveis:

```text
Agora / Próximo / Depois
```

ou

```text
0–3 meses / 3–12 meses / 12–36 meses
```

incluindo as dimensões produto, tecnologia, marketing, vendas, operação,
pessoas e finanças.

## Plano de 90 dias

Todo plano empresarial termina em execução, não em intenção:

```text
Objetivo → Iniciativa → Experimento → Métrica → Responsável → Prazo
```

Separado em `Dias 1–30`, `Dias 31–60`, `Dias 61–90`. Evite dezenas de
iniciativas simultâneas: `companify-ceo` e `companify-board` priorizam antes
da publicação.

## Atualização contínua

`company/business-plan.md` não é um PDF estático criado uma única vez; é uma
fotografia do negócio em determinada data. Cada revisão informa:

```text
Versão
Data
Mudanças relevantes
Novas comprovações
Premissas invalidadas
Escolhas alteradas
```
