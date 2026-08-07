# Registro de premissas e experimentos

Documento: `.companify/assumptions.md`. Cada premissa crítica recebe uma
entrada `ASS-NNN`.

```text
ASS-001

Premissa:
CAC médio inicial de R$ 300.

Origem:
Estimativa do fundador.

Impacto:
Alto.

Área:
Financeiro / Marketing.

Como validar:
Executar campanha inicial com orçamento de R$ 5.000.

Status:
Não validada.
```

O campo **Impacto** usa uma das quatro faixas: `baixo`, `médio`, `alto`,
`crítico`. Uma premissa crítica sem plano de validação é uma pendência, não
uma premissa resolvida.

## Experimentos

Toda premissa crítica pode gerar um experimento, priorizando aprendizado
barato antes de compromissos caros ou irreversíveis:

```text
Hipótese:
Agências com mais de dez clientes pagariam R$ 497/mês.

Experimento:
Oferecer o produto a 20 agências do ICP.

Critério:
Pelo menos 4 demonstrações e 2 contratos.

Prazo:
21 dias.

Resultado:
Pendente.
```

Registre o experimento junto da premissa em `.companify/assumptions.md` e
atualize o `Status` (`não validada`, `em teste`, `validada`, `invalidada`)
assim que houver resultado. Uma premissa invalidada não é apagada — vira
evidência para a próxima hipótese.
