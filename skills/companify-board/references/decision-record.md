# Registro de escolhas

Documento: `.companify/escolhas.md`. Cada escolha relevante do conselho
recebe uma entrada `ESC-NNN`, numerada sequencialmente e nunca reaproveitada.

```markdown
## ESC-001 — Modelo de cobrança inicial

Data:
Status:

### Contexto

...

### Alternativas

1.
2.
3.

### Comprovações

...

### Premissas

...

### Tensões

CFO:
CRO:
CMO:
CPO:

### Escolha

...

### Motivo

...

### Consequências

...

### Revisar se

...
```

Quando uma escolha muda, não sobrescreva a entrada original: adicione uma
nova seção `### Revisão` com data, nova comprovação e a escolha atualizada,
preservando o histórico. Isso transforma o plano de negócio em um sistema
rastreável, não em um documento que perde memória a cada execução.

## Comportamento esperado do Board

`companify-board` nunca simula uma reunião teatral com diálogos artificiais
entre personagens. Evitar:

```text
CEO: Acho que devemos crescer.
CFO: Discordo.
CMO: Concordo parcialmente.
```

O resultado é analítico, por área, terminando em alternativas e recomendação:

```markdown
## Escolha analisada

Aumentar orçamento de aquisição de R$ 20 mil para R$ 50 mil.

## CMO

O canal demonstra capacidade adicional estimada.

## CRO

A taxa de fechamento permaneceu estável nas últimas duas coortes.

## CFO

O aumento reduz o runway projetado de 11 para 7 meses.

## CPO

Clientes desse canal possuem ativação 18% inferior.

## Conflito

Crescimento de aquisição versus qualidade da coorte e preservação de caixa.

## Alternativas

A. Escalar imediatamente.
B. Manter orçamento.
C. Subir para R$ 30 mil por 30 dias e medir ativação.

## Recomendação

Alternativa C.

## Comprovação necessária

Ativação, CAC e payback da nova coorte.

## Condição de revisão

Reavaliar após 30 dias.
```

O Board procura especificamente: conflitos, premissas incompatíveis entre
skills, dependências não declaradas, escolhas sem comprovação, otimização
local (uma área melhora à custa de outra sem que isso fique explícito),
ameaças ignoradas, metas incompatíveis e inconsistências entre documentos de
`company/`.
