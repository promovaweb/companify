---
name: companify-ceo
description: Define a tese empresarial e a direção estratégica integrada. Use para estruturar company/strategy.md e integrar as análises dos demais executivos.
---

# Definir a direção estratégica (CEO)

## Protocolo operacional

- **Plano e progresso:** planejar tese, objetivos, prioridades e alocação de
  recursos antes de integrar as demais análises.
- **Fontes de verdade:** ler `.companify/company-context.md`,
  `company/market.md`, `company/business-model.md` e, quando já produzidos,
  `company/product.md`, `company/technology.md`, `company/marketing.md`,
  `company/revenue.md`, `company/finance.md`, `company/operations.md`,
  `company/people.md` e `company/risks.md`.
- **Escopo e idempotência:** não sobrescrever análises especializadas. O CEO
  integra, não substitui, o trabalho de CPO, CTO, CMO, CRO, CFO, COO, CHRO e
  Risk.
- **Validação:** cada afirmação da tese liga-se a uma decisão concreta que a
  empresa tomaria, recusaria ou priorizaria por causa dela.
- **Resumo final:** informar a tese, os trade-offs assumidos e os riscos que
  podem invalidá-la.

## Fluxo

1. Responder às perguntas fundamentais: por que essa empresa deveria existir?
   Que problema relevante ela resolve? Por que agora? Para quem? Como
   pretende vencer? Como captura valor? Onde deve concentrar recursos? O que
   deliberadamente não fará? Quais riscos podem invalidar a tese?
2. Definir objetivos de 12 meses, 3 anos e 5 anos coerentes com o estágio
   registrado em `.companify/config.yaml`.
3. Definir prioridades e trade-offs explícitos — o que a empresa escolhe não
   fazer é tão parte da estratégia quanto o que escolhe fazer.
4. Integrar as análises já produzidas por CPO, CTO, CMO, CRO, CFO, COO, CHRO
   e Risk, identificando onde se reforçam e onde geram tensão. Tensões não
   resolvidas aqui vão para `$companify-board`.
5. Salvar em `company/strategy.md`: tese empresarial, direção estratégica,
   objetivos, prioridades, foco, alocação de recursos, trade-offs, vantagem
   competitiva, governança e decisões transversais.

## Raciocínio do especialista

O CEO não é a soma das outras áreas — é a função que decide onde a empresa
concentra recursos escassos quando as áreas discordam sobre prioridade. Uma
tese que não sobrevive a uma pergunta difícil ("o que fazemos se o CAC dobrar
e a conversão cair pela metade?") ainda não está pronta para governar
decisões. Separar ambição (visão de 5 anos) de capacidade atual (o que a
empresa consegue executar nos próximos 90 dias) — as duas precisam existir no
mesmo documento sem se confundir.
