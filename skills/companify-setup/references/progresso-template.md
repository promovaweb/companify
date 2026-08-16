# Template do progresso da entrevista

Estrutura mínima de `.companify/progresso.md`. Este arquivo é compartilhado
por todas as skills `companify-*` que fazem perguntas ao usuário
(`companify-interview`, `companify-market`, `companify-business-model`,
`companify-ceo`, `companify-cpo`, `companify-cto`, `companify-cmo`,
`companify-cro`, `companify-cfo`, `companify-coo`, `companify-chro`,
`companify-ameacas`, `companify-board`, `companify-business-plan`,
`companify-audit`), acionadas individualmente ou em sequência por
`$companify-builder`. Nenhuma skill mantém um arquivo de progresso próprio e
paralelo a este.

Uma skill cria a linha da própria área na primeira pergunta que fizer e
atualiza a resposta e o status a cada resposta do usuário, nunca só ao
final da conversa. Ao ser retomada (mesma sessão ou outra), a skill lê este
arquivo antes de perguntar qualquer coisa e continua da última linha
`pendente` ou `em andamento` da própria área, sem repetir pergunta já
respondida por ela ou por outra skill.

```markdown
# Progresso da entrevista

## Perguntas e respostas

| Área | Pergunta | Resposta | Status |
| --- | --- | --- | --- |

## Áreas do plano

| Área | Skill | Artefato | Status |
| --- | --- | --- | --- |
| Contexto inicial | companify-interview | .companify/company-context.md | pendente |
| Mercado | companify-market | company/market.md | pendente |
| Modelo de negócio | companify-business-model | company/business-model.md | pendente |
| Direção estratégica | companify-ceo | company/strategy.md | pendente |
| Produto | companify-cpo | company/product.md | pendente |
| Tecnologia | companify-cto | company/technology.md | pendente |
| Marketing | companify-cmo | company/marketing.md | pendente |
| Vendas e receita | companify-cro | company/revenue.md | pendente |
| Finanças | companify-cfo | company/finance.md | pendente |
| Operação | companify-coo | company/operations.md | pendente |
| Pessoas | companify-chro | company/people.md | pendente |
| Ameaças | companify-ameacas | company/ameacas.md | pendente |
| Conflitos entre áreas | companify-board | .companify/escolhas.md | pendente |
| Plano consolidado | companify-business-plan | company/business-plan.md, company/roadmap.md | pendente |
| Auditoria final | companify-audit | .companify/reviews/ | pendente |
```

## Regras de preenchimento

- Status válido por linha: `pendente`, `em andamento` ou `concluído`. Uma
  área só vira `concluído` quando o artefato correspondente já existe em
  `company/` (ou, no caso do board, quando a escolha já está registrada em
  `.companify/escolhas.md`).
- Toda pergunta feita por qualquer skill vira uma linha nova em **Perguntas
  e respostas**, na ordem cronológica das perguntas, mesmo quando a resposta
  virar premissa ou pendência em vez de fato confirmado. Essa tabela é o
  histórico real da entrevista, não um resumo.
- Quando o usuário optar por não aprofundar uma área agora, registre a
  linha com a resposta "usuário optou por não aprofundar agora" e status
  `pendente`, em vez de apagar ou omitir a linha.
- Uma skill nunca reescreve a linha de outra área; cada skill só edita as
  linhas da própria área.
