# Instalação do Companify

## Requisitos

O repositório de destino precisa estar acessível ao agente e usar um arquivo
`AGENTS.md` que possa receber o bloco gerenciado do Companify. O script de
setup usa Node.js 22 ou posterior e depende somente de módulos nativos.

## Instale com o gerenciador de skills

Abra o terminal na raiz do projeto que receberá o plano de negócio e execute:

```bash
npx skills add promovaweb/companify
```

O comando instala o catálogo completo das 18 skills. O destino pode variar
conforme o agente escolhido, e a origem, o caminho e o hash de cada skill
ficam registrados em `skills-lock.json` do projeto consumidor.

Para listar o catálogo remoto antes de instalar, ou instalar apenas parte
dele:

```bash
npx skills add promovaweb/companify --list
npx skills add promovaweb/companify --agent codex --skill '*' -y --copy
```

## Prepare o projeto

Depois de instalar as skills, execute o setup na raiz do projeto consumidor:

```bash
node <caminho-da-skill-instalada>/companify-setup/scripts/setup.mjs --project .
```

O setup cria `.companify/`, prepara `company/` e inclui um bloco delimitado
por `<!-- companify:consumer:start -->` e `<!-- companify:consumer:end -->`
no `AGENTS.md`. O conteúdo que já existir fora desses marcadores permanece
intacto. O script cria somente arquivos e diretórios ausentes; ele nunca
sobrescreve `.companify/` ou `company/` já preenchidos.

Os arquivos criados são:

```text
.companify/
├── config.yaml
├── company-context.md
├── interview.md
├── assumptions.md
├── escolhas.md
├── comprovacoes.md
├── metrics.md
├── ameacas.md
└── reviews/

company/
└── README.md
```

Execute novamente em modo de conferência:

```bash
node <caminho-da-skill-instalada>/companify-setup/scripts/setup.mjs --project . --check
```

O segundo comando comprova a idempotência e informa qualquer arquivo ou
diretório obrigatório que esteja ausente, ou um bloco do `AGENTS.md`
desatualizado. Abra o diff do Git antes de avançar para confirmar que a
escrita ficou restrita aos caminhos previstos.

## Preencha a configuração

O arquivo `.companify/config.yaml` identifica a empresa, o país, o idioma, a
moeda e o estágio:

```yaml
version: 1

company:
  name: ""
  country: BR
  language: pt-BR
  currency: BRL
  stage: idea

paths:
  workspace: .companify
  output: company
  brand: brand
```

Os estágios possíveis são `idea`, `validation`, `pre-revenue`,
`early-revenue`, `growth`, `scale` e `established`. O estágio orienta
diretamente decisões técnicas de outras skills, como a profundidade da
entrevista em `$companify-interview` e a arquitetura recomendada por
`$companify-cto`.

## Escolha a entrada adequada

Quando o Company Context ainda tiver lacunas relevantes, comece com
`$companify-interview`. Quando o objetivo for construir o plano completo do
zero, use `$companify-builder`, que orquestra a esteira inteira e os quatro
gates. Um pedido de escopo menor pode chamar a especialidade correspondente
diretamente, por exemplo:

```text
Use $companify-cfo para modelar o financeiro a partir do modelo de negócio já
aprovado.
```

Quando a tarefa criar ou alterar uma marca, e não a empresa, use as skills
`brandfy-*` em vez do Companify. As duas bibliotecas compartilham contexto,
mas cada uma preserva os artefatos aprovados pela outra; veja
[relação com o Brandfy](relacao-com-brandfy.md).
