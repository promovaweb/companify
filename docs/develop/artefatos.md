# Artefatos

## Estado interno: `.companify/`

| Arquivo | Conteúdo | Curadoria |
| --- | --- | --- |
| `config.yaml` | Nome, país, idioma, moeda, estágio e caminhos configuráveis | `companify-setup` |
| `company-context.md` | Visão única da empresa compartilhada por todas as skills | `companify-interview`, atualizado por qualquer skill |
| `interview.md` | Lacunas abertas e respostas confirmadas, classificadas pela taxonomia | `companify-interview` |
| `assumptions.md` | Registro `ASS-NNN` de premissas críticas e experimentos | Qualquer skill registra; nenhuma cura sozinha |
| `escolhas.md` | Registro `ESC-NNN` de escolhas do conselho | Qualquer skill registra; `companify-board` cura conflitos e resoluções |
| `comprovacoes.md` | Fonte, data e o que cada comprovação sustenta | Compartilhado |
| `metrics.md` | Árvore de métricas adaptada ao modelo de negócio | `companify-cfo` e `companify-cro` curam em conjunto |
| `ameacas.md` | Registro interno de ameaças por categoria | `companify-ameacas` |
| `reviews/YYYY-MM-DD-audit.md` | Relatório de auditoria com veredito | `companify-audit` |

## Resultado: `company/`

| Arquivo | Skill responsável |
| --- | --- |
| `README.md` | `companify-setup` cria o esqueleto; `companify-business-plan` atualiza o índice na consolidação |
| `strategy.md` | `companify-ceo` |
| `market.md` | `companify-market` |
| `business-model.md` | `companify-business-model` |
| `product.md` | `companify-cpo` |
| `technology.md` | `companify-cto` |
| `marketing.md` | `companify-cmo` |
| `revenue.md` | `companify-cro` |
| `finance.md` | `companify-cfo` |
| `operations.md` | `companify-coo` |
| `people.md` | `companify-chro` |
| `ameacas.md` | `companify-ameacas` |
| `roadmap.md` | `companify-business-plan`, consolidando os roadmaps setoriais que cada C-level já registra na própria área |
| `business-plan.md` | `companify-business-plan` |

## Por que `strategy.md`, `roadmap.md` e `README.md` têm dono explícito

A especificação original recebida do usuário deixava esses três artefatos
sem skill responsável: as demais lideranças tinham `Artefato:` explícito no
próprio `SKILL.md`, mas o CEO não, e nenhuma skill citava `roadmap.md` ou
`company/README.md` como saída própria. `docs/specification.md` documenta a
correção completa na seção "Ajustes aplicados sobre a especificação
original": qualquer nova skill que produza um artefato em `company/` precisa
declarar isso explicitamente no próprio `SKILL.md`, para que este documento
e a tabela acima continuem batendo com a implementação real.
