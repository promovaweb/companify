# Contrato das skills

## Estrutura mínima

Cada diretório em `skills/` contém `SKILL.md` e `agents/openai.yaml`.
Scripts, referências e arquivos-base entram somente quando a especialidade
precisa deles.

`SKILL.md` começa com frontmatter que declara `name` e `description`. O
nome precisa corresponder ao diretório. A descrição deve ter entre 90 e 160
caracteres, informar a tarefa e a sinalização de uso com extensão
suficiente para o agente selecionar a skill entre as 17 disponíveis.

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
