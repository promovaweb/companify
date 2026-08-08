# Entrevista e Company Context

## Descoberta progressiva, não questionário fixo

`$companify-interview` não aplica as cerca de 70 perguntas possíveis de uma
vez. Ele lê o Company Context atual, identifica quais dimensões têm campo em
branco (origem da ideia, problema, solução, público, cliente, produto,
diferenciais, concorrência, modelo atual, receita, custos, canais, operação,
tecnologia, equipe, recursos, objetivos, restrições, ameaças, comprovações)
e prioriza as perguntas que alteram significativamente o negócio.

Uma empresa em estágio `idea` precisa de profundidade em
problema/solução/público. Uma empresa em `growth` precisa de profundidade em
tração/aquisição/operação. Uma pergunta respondida não é reaberta sem nova
comprovação.

## Classificação de cada resposta

Cada resposta entra em `.companify/interview.md` classificada como `FATO`,
`COMPROVAÇÃO`, `DECLARAÇÃO DO USUÁRIO`, `CONTEXTO BRANDFY`, `INFERÊNCIA`,
`HIPÓTESE` ou `PREMISSA`, antes de atualizar
`.companify/company-context.md` com as respostas confirmadas.

Nunca invente uma resposta para completar o Company Context. Um campo sem
informação permanece em branco com a pergunta registrada: o Context Gate de
`$companify-builder` depende dessa honestidade para decidir se a esteira
pode avançar.

## Premissas críticas e experimentos

Quando uma resposta é uma premissa crítica (alto impacto, ainda não
verificável), ela entra em `.companify/assumptions.md` no formato
`ASS-NNN`:

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

O campo Impacto usa uma das quatro faixas: `baixo`, `médio`, `alto`,
`crítico`. Toda premissa crítica pode gerar um experimento, priorizando
aprendizado barato antes de compromissos caros ou irreversíveis:

```text
Hipótese:
Agências com mais de dez clientes pagariam R$ 497/mês.

Experimento:
Oferecer o produto a 20 agências do ICP.

Condição de sucesso:
Pelo menos 4 demonstrações e 2 contratos.

Prazo:
21 dias.

Resultado:
Pendente.
```

Atualize o `Status` (`não validada`, `em teste`, `validada`, `invalidada`)
assim que houver resultado. Uma premissa invalidada não é apagada: vira
comprovação para a próxima hipótese.

## Lacunas de especialista

Uma lacuna que exige especialista de área (mercado, financeiro, técnico) é
registrada como pendência endereçada à skill correspondente, em vez de
respondida genericamente pela entrevista. Por exemplo, uma dúvida sobre
tamanho de mercado é encaminhada a `$companify-market`, não respondida com
uma estimativa improvisada.
