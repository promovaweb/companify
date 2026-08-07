# Métricas

Documento: `.companify/metrics.md`, curado em conjunto por `companify-cfo` e
`companify-cro`, com contribuição de qualquer skill que meça a própria área.

As métricas formam uma árvore com uma North Star no topo. O exemplo abaixo é
de um negócio SaaS — **não é um formato obrigatório**. Um marketplace, uma
consultoria ou um negócio de licenciamento têm árvores diferentes; adapte a
estrutura ao modelo de negócio real registrado em
`company/business-model.md` em vez de forçar MRR/churn onde não existe
assinatura.

```text
North Star
└── Receita recorrente
    ├── novos clientes
    │   ├── leads
    │   ├── conversão
    │   └── ticket
    ├── retenção
    │   └── churn
    └── expansão
        └── upsell
```

Cada métrica registrada deve indicar:

```text
Nome
Definição
Fórmula
Fonte
Frequência
Responsável
Meta
```

Métricas possíveis de receita, a usar somente quando aplicáveis ao modelo de
negócio real:

```text
MRR, ARR, ARPA, ACV
win rate, sales cycle, pipeline coverage
NRR, GRR, churn, expansion revenue
```

Unit economics, quando aplicável:

```text
CAC
LTV
LTV:CAC
Payback
Margem de contribuição
ARPA
Churn
Burn
Runway
```

Toda fórmula apresenta as premissas usadas — uma métrica sem a fórmula e a
fonte não é auditável e `companify-audit` deve reprová-la.
