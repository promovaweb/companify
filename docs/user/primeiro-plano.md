# Primeiro plano de negócio com o Companify

## Use o orquestrador

Depois de instalar as skills e executar o setup, o caminho mais direto para
construir o plano completo é:

```text
Use $companify-builder para construir o plano de negócio do zero.
```

`$companify-builder` percorre a esteira inteira e não avança de uma fase
para a seguinte enquanto o gate correspondente tiver item pendente sem
justificativa registrada.

## Fase 1: contexto

O builder usa `$companify-setup`, carrega o contexto Brandfy quando
`.brandfy/config.yaml` e `brand/strategy.md` existem, detecta o estágio da
empresa e os documentos já existentes em `company/`, e conduz
`$companify-interview` enquanto o Company Context tiver lacuna relevante.

A fase termina no **Context Gate**:

```text
[ ] problema compreendido
[ ] cliente identificado
[ ] solução descrita
[ ] estágio conhecido
[ ] comprovações separadas de hipóteses
[ ] Brandfy carregado quando existente
```

## Fase 2: viabilidade

`$companify-market` e `$companify-business-model` rodam em paralelo,
produzindo `company/market.md` e `company/business-model.md`. A fase termina
no **Viability Gate**:

```text
[ ] mercado analisado
[ ] modelo de negócio definido
[ ] monetização analisada
[ ] principais custos conhecidos ou parametrizados
[ ] premissas críticas identificadas
```

## Fase 3: conselho executivo

Os nove especialistas trabalham sobre o mesmo Company Context:
`$companify-ceo`, `$companify-cpo`, `$companify-cto`, `$companify-cmo`,
`$companify-cro`, `$companify-cfo`, `$companify-coo`, `$companify-chro` e
`$companify-ameacas`. Eles não dependem sequencialmente uns dos outros, mas
cada um lê os artefatos que os demais já publicaram em `company/`. Veja o
detalhe de cada papel em [conselho executivo](conselho-executivo.md).

Em seguida, `$companify-board` confronta as análises, resolve conflitos e
registra escolhas em `.companify/escolhas.md`; veja
[Board e escolhas](board-e-escolhas.md). A fase termina no **Executive
Alignment Gate**:

```text
[ ] CEO revisou direção
[ ] CPO revisou produto
[ ] CTO revisou tecnologia
[ ] CMO revisou marketing
[ ] CRO revisou receita
[ ] CFO revisou finanças
[ ] COO revisou operação
[ ] ameaças relevantes registradas
[ ] conflitos executivos analisados
```

## Fase 4: consolidação

`$companify-business-plan` consolida `company/business-plan.md` e
`company/roadmap.md`; veja [plano de negócio](plano-de-negocio.md). Depois,
`$companify-audit` revisa o resultado; veja [auditoria](auditoria.md). A
fase termina no **Business Plan Gate**:

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

## Empresas existentes podem pular etapas

Uma empresa que já possui documentação forte não precisa repetir todo o
percurso. `companify-builder` pode pular uma etapa já suficientemente
documentada, desde que a comprovação do que já existe justifique o salto.
Um sinal de builder mal executado é um plano de negócio elegante que nenhuma
das nove lideranças reconheceria como fiel à própria análise.
