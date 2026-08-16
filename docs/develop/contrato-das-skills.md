# Contrato das skills

## Estrutura mínima

Cada diretório em `skills/` contém `SKILL.md` e `agents/openai.yaml`.
Scripts, referências e arquivos-base entram somente quando a especialidade
precisa deles.

`SKILL.md` começa com frontmatter que declara `name` e `description`. O
nome precisa corresponder ao diretório. A descrição deve ter entre 90 e 160
caracteres, informar a tarefa e a sinalização de uso com extensão
suficiente para o agente selecionar a skill entre as 18 disponíveis.

```yaml
---
name: companify-cfo
description: Transforma a estratégia em consequências financeiras. Use para estruturar company/finance.md com modelo financeiro, unit economics e cenários.
---
```

## Protocolo operacional

Toda skill documenta cinco partes: plano e progresso, fontes de verdade,
escopo e idempotência, validação e resumo final. Depois, ela explica o
fluxo próprio e o raciocínio do especialista.

A instrução precisa levar o agente a comparar alternativas e a fundamentar
uma recomendação com comprovação ou premissa explícita. Um adjetivo vago não
substitui a explicação: uma arquitetura descrita como "moderna" deve mostrar
a composição, o custo, a limitação e a relação com o estágio real da
empresa.

## Entrevista e progresso

Toda skill que precisa de resposta do usuário para preencher o próprio
artefato (`companify-interview`, `companify-market`,
`companify-business-model`, `companify-ceo`, `companify-cpo`,
`companify-cto`, `companify-cmo`, `companify-cro`, `companify-cfo`,
`companify-coo`, `companify-chro`, `companify-ameacas`, `companify-board`,
`companify-business-plan`, `companify-audit`) segue duas regras, seja
acionada sozinha ou dentro da esteira de `$companify-builder`:

1. **Pergunta simples, de escolha fácil.** O usuário só digita texto livre
   quando a informação for exclusiva da empresa dele e nenhuma outra
   pessoa poderia responder por ele: a ideia em uma frase, o nome da
   empresa, um número real que só ele sabe (preço já cobrado, receita
   atual). Para tudo o que a skill consegue gerar a partir do que já sabe
   sobre o negócio, mercado e categoria, ela gera de três a cinco
   alternativas concretas mais "outro (você escreve)" e pergunta qual se
   aplica, em vez de devolver a pergunta em branco para o usuário
   preencher. Uma pergunta técnica nunca aparece sem tradução para quem
   não conhece o vocabulário da área.
2. **Progresso salvo a cada resposta.** Ler e atualizar
   [`.companify/progresso.md`](../../skills/companify-setup/references/progresso-template.md)
   assim que o usuário responder, nunca só ao final da conversa: a skill
   grava a própria linha na tabela de perguntas e o status da própria área
   antes de fazer a pergunta seguinte. Ao ser retomada, a skill lê esse
   arquivo antes de perguntar qualquer coisa e continua da última linha
   pendente da própria área, sem repetir pergunta já respondida. Nenhuma
   skill mantém um arquivo de progresso paralelo e próprio; `.companify/progresso.md`
   é compartilhado por todas.

`$companify-builder` não faz perguntas genéricas por conta própria: ele
sequencia as skills especializadas conforme os gates e cada uma conduz a
própria entrevista de múltipla escolha. `$companify-setup` cria
`.companify/progresso.md` por padrão e também é responsável por adicionar
campos ausentes em arquivos já existentes quando um template evoluir, sem
sobrescrever o que o usuário já preencheu.

## Metadados para o agente

`agents/openai.yaml` mantém a interface mostrada pelo agente e um
`default_prompt` que cita a skill no formato `$companify-nome`:

```yaml
interface:
  display_name: "CFO Virtual"
  short_description: "Modelo financeiro, unit economics e cenários"
  default_prompt: "Use $companify-cfo para estruturar company/finance.md."
```

`short_description` precisa ter entre 25 e 64 caracteres. `tests/skills.test.mjs`
confere as duas faixas de caracteres, a correspondência entre `name` e o
diretório, e a presença dos três campos obrigatórios.

## Referências e templates

Uma referência contém parâmetros ou um template que a skill precisa
carregar para executar a tarefa; ela não repete regras gerais que já estão
no `SKILL.md`. Um template preenchível (worksheet, canvas ou checklist)
entra em `references/` quando ajuda um usuário a executar a etapa na
prática, não como enchimento redundante de uma instrução já clara.

## Vocabulário proibido

Nenhuma skill usa as famílias léxicas vetadas pelo Hub em
`PROHIBITED-TERMOS-ABSOLUTOS.md` como cola sintática ou substantivo
abstrato: `risco`, `decisão`, `evidência`, `critério`, `inventário`,
`atrito`, `bloqueio` e a construção `em que`. É por isso que o Companify
usa `ameaça`, `escolha` e `comprovação` em vez dos termos mais óbvios. Veja
[contribuição](contribuicao.md) para o validador que confere essa regra.
