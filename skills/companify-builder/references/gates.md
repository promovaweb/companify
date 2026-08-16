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
[ ] comprovações separadas de hipóteses
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
[ ] CHRO revisou pessoas ou agentes
[ ] ameaças relevantes registradas
[ ] conflitos executivos analisados
```

## Business Plan Gate

```text
[ ] plano consolidado
[ ] nenhuma hipótese crítica apresentada como fato
[ ] projeções possuem premissas
[ ] escolhas possuem rastreabilidade
[ ] ameaças possuem mitigação
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
     COO       CFO            CHRO   Ameaças        │
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

As nove skills executivas (CEO, CPO, CTO, CMO, CRO, CFO, COO, CHRO, Ameaças)
trabalham em paralelo sobre o mesmo Company Context após o Viability Gate.
Nenhuma delas depende sequencialmente da outra dentro desse bloco: a
ordem de leitura acima é apenas de agrupamento, não de precedência. O Board
só roda depois que todas tiverem produzido (ou explicitamente pulado, com
comprovação) seu artefato em `company/`.

Uma empresa existente pode pular etapas já suficientemente documentadas; a
comprovação do que já existe deve justificar o salto, registrada por
`companify-builder` ao decidir a sequência necessária.

`companify-builder` não faz pergunta genérica por conta própria: cada skill
da esteira conduz a própria entrevista de múltipla escolha e grava o
progresso em `.companify/progresso.md` (ver
[convenção de entrevista](../../../docs/develop/contrato-das-skills.md#entrevista-e-progresso)).
O builder lê esse mesmo arquivo para saber que áreas já têm resposta antes
de decidir a próxima skill a acionar, inclusive ao retomar uma esteira
interrompida.
