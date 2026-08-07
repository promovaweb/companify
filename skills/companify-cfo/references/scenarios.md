# Cenários e sensibilidade

Sempre que houver incerteza material, use três cenários com valores
claramente identificados como premissas: nunca como fato:

```text
CONSERVADOR
BASE
AGRESSIVO
```

Exemplo:

| Indicador | Conservador | Base | Agressivo |
| --- | ---: | ---: | ---: |
| Leads/mês | 500 | 1.000 | 2.000 |
| Conversão | 1% | 2% | 3% |
| Clientes | 5 | 20 | 60 |
| Ticket | 300 | 400 | 500 |

## Sensibilidade

`companify-cfo` e `companify-board` identificam quais variáveis mais alteram
o resultado, testando variações isoladas sobre o cenário base:

```text
+20% CAC
-20% conversão
+10% churn
-15% ticket
+30% custo de infraestrutura
```

Priorize a validação das premissas com maior sensibilidade: são as que mais
barateiam o próximo experimento quando resolvidas primeiro. Uma premissa de
baixo impacto no resultado não justifica um experimento caro.
