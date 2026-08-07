# Gates do Companify

A esteira tem quatro gates. `companify-builder` não avança de um estágio ao
seguinte enquanto o gate correspondente tiver item pendente sem justificativa
registrada.

## Context Gate

Antes de qualquer estratégia consolidada:

```text
[ ] problema compreendido
[ ] cliente identificado
[ ] solução descrita
[ ] estágio conhecido
[ ] evidências separadas de hipóteses
[ ] Brandfy carregado quando existente
```

## Viability Gate

Antes da consolidação executiva:

```text
[ ] mercado analisado
[ ] modelo de negócio definido
[ ] monetização analisada
[ ] principais custos conhecidos ou parametrizados
[ ] premissas críticas identificadas
```

## Executive Alignment Gate

```text
[ ] CEO revisou direção
[ ] CPO revisou produto
[ ] CTO revisou tecnologia
[ ] CMO revisou marketing
[ ] CRO revisou receita
[ ] CFO revisou finanças
[ ] COO revisou operação
[ ] riscos relevantes registrados
[ ] conflitos executivos analisados
```

## Business Plan Gate

```text
[ ] plano consolidado
[ ] nenhuma hipótese crítica apresentada como fato
[ ] projeções possuem premissas
[ ] decisões possuem rastreabilidade
[ ] riscos possuem mitigação
[ ] métricas estão definidas
[ ] plano de 90 dias existe
[ ] pendências estão explícitas
```

## Esteira completa

```text
$companify-builder
        │
        ▼
$companify-setup
        │
        ▼
Company Context
        │
        ├──────── Brandfy Context
        │
        ▼
$companify-interview
        │
        ▼
Context Gate
        │
        ├── $companify-market
        │
        └── $companify-business-model
                │
                ▼
         Viability Gate
                │
      ┌─────────┼─────────────┬─────────┬─────────┐
      ▼         ▼              ▼         ▼         ▼
     CEO       CPO             CTO       CMO       CRO
      │         │               │         │         │
      ▼         ▼               ▼         ▼         ▼
     COO       CFO            CHRO      Risk        │
      │         │               │         │         │
      └─────────┴───────────────┴─────────┴─────────┘
                │
                ▼
        $companify-board
                │
                ▼
     Executive Alignment Gate
                │
                ▼
    $companify-business-plan
                │
                ▼
       $companify-audit
                │
                ▼
        Business Plan Gate
```

As nove skills executivas (CEO, CPO, CTO, CMO, CRO, CFO, COO, CHRO, Risk)
trabalham em paralelo sobre o mesmo Company Context após o Viability Gate.
Nenhuma delas depende sequencialmente da outra dentro desse bloco — a
ordem de leitura acima é apenas de agrupamento, não de precedência. O Board
só roda depois que todas tiverem produzido (ou explicitamente pulado, com
evidência) seu artefato em `company/`.

Uma empresa existente pode pular etapas já suficientemente documentadas; a
evidência do que já existe deve justificar o salto, registrada por
`companify-builder` ao decidir a sequência necessária.
