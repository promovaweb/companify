# Conceitos e taxonomia do Companify

## Processo e resultado

O Companify separa o material de raciocínio dos artefatos aprovados. Com essa
separação, a entrevista registra uma suposição ainda não testada sem
apresentá-la no plano de negócio como definição final.

| Caminho | Conteúdo | Pode ser publicado |
| --- | --- | --- |
| `.companify/` | Configuração, entrevista, premissas, escolhas, comprovações, métricas, ameaças e revisões | Não, salvo escolha explícita do responsável |
| `company/` | Estratégia, mercado, modelo de negócio, produto, tecnologia, marketing, receita, finanças, operações, pessoas, ameaças, roadmap e plano de negócio | Sim, depois da auditoria |
| `skills/companify-*/` | Método, referências, scripts e metadados instalados | Não como parte do plano |

O caminho de saída é configurável em `.companify/config.yaml`, embora
`company/` seja o padrão esperado pelas skills. Uma mudança de diretório
precisa ser refletida nos comandos, links e relatórios.

## As dez categorias canônicas

Toda informação relevante do plano de negócio é classificada em uma das dez
categorias:

```text
FATO
COMPROVAÇÃO
DECLARAÇÃO DO USUÁRIO
CONTEXTO BRANDFY
INFERÊNCIA
HIPÓTESE
PREMISSA
RECOMENDAÇÃO
ESCOLHA
PENDÊNCIA
```

O plano final mostra cada item marcado como `HIPÓTESE` com essa marca, sem
tratá-lo como fato confirmado. Um número sem comprovação disponível vira
premissa explícita com três cenários (conservador, base e agressivo), em vez
de um valor único apresentado como certeza.

## Estágios da empresa

`.companify/config.yaml` registra o estágio atual: `idea`, `validation`,
`pre-revenue`, `early-revenue`, `growth`, `scale` ou `established`. O
estágio orienta a profundidade da entrevista, a arquitetura recomendada por
`$companify-cto` e o rigor exigido de cada gate: uma empresa em `idea`
precisa de mais tempo no Context Gate; uma empresa em `growth` já chega com
tração e pode avançar mais rápido pelas etapas de descoberta.

## O documento central: o Company Context

`.companify/company-context.md` oferece a todas as skills a mesma visão da
empresa. O arquivo reúne a empresa e os fundadores, o problema, a solução e o
cliente, a oferta, a receita, a tração e a aquisição, a operação e a
tecnologia, além dos objetivos, das restrições, do material do Brandfy, das
premissas e das pendências. Nenhuma skill mantém uma versão própria e
divergente da empresa; todas leem o mesmo arquivo antes de trabalhar.

## As quatro fases

O fluxo completo percorre diagnóstico da empresa, viabilidade, alinhamento
executivo e consolidação. Cada fase termina em um gate e produz uma fonte que a próxima
fase consegue ler; veja o percurso completo em
[primeiro plano de negócio](primeiro-plano.md).

## As skills como especialistas

`$companify-builder` coordena o percurso, mas não substitui as
especialidades. Ele encaminha a tarefa para a skill adequada e retoma o
plano depois que a etapa produz o artefato esperado. Uma chamada direta
continua válida quando o escopo é restrito, como revisar apenas o modelo
financeiro a partir de um modelo de negócio já aprovado.

Cada skill precisa informar a fonte consultada, o artefato alterado, a
comprovação usada e o que permaneceu como pendência. O resumo final deve
permitir que outro agente retome o trabalho sem inferir o estado anterior.
