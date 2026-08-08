# Solução de problemas

## A skill não aparece

Liste a origem e procure o arquivo instalado:

```bash
npx skills add promovaweb/companify --list
find . -path '*/companify-setup/SKILL.md' -print
```

Quando o diretório não existe, repita a instalação na raiz do projeto.
Quando ele existe em outro prefixo, ajuste os comandos diretos e reinicie o
agente conforme a ferramenta em uso.

## O setup alteraria arquivos

Execute o modo de conferência:

```bash
node <caminho-da-skill-instalada>/companify-setup/scripts/setup.mjs --project . --check
```

Abra o `AGENTS.md` e procure os marcadores `<!-- companify:consumer:start -->`
e `<!-- companify:consumer:end -->`. Um bloco incompleto ou duplicado precisa
ser corrigido antes de outra execução. Preserve todo conteúdo autoral fora
dos marcadores.

## O Context Gate não fecha

Abra `.companify/company-context.md` e procure campos em branco nas seções
Problema, Solução e Cliente. Um campo vazio não é falha do setup: é a
entrevista ainda não ter chegado até essa dimensão. Use `$companify-interview`
para preencher apenas as lacunas relevantes ao estágio atual, sem completar
o campo com uma suposição plausível.

## Uma escolha ficou sem comprovação

Abra `.companify/escolhas.md` e localize a entrada `ESC-NNN`. Toda escolha
registrada precisa de alternativas, comprovações, premissas e condição de
revisão explícitas. Uma entrada incompleta deve voltar para
`$companify-board` em vez de ser marcada como aprovada.

## Um conflito com o Brandfy não foi resolvido

Confirme que a tensão está registrada em `.companify/escolhas.md` com status
`pendente` e que o encaminhamento cita a skill `brandfy-*` responsável
(tipicamente `brandfy-estrategia`). O Companify não aplica a mudança de
marca sozinho: a escolha final sobre `brand/strategy.md` pertence ao
Brandfy.

## Uma projeção financeira aparece sem premissa

Abra `company/finance.md` e confirme que cada número está classificado como
`REALIZADO`, `CONTRATADO`, `ESTIMADO`, `PREMISSA` ou `CENÁRIO`. Um número
sem rótulo reprova a seção na auditoria, mesmo que o valor pareça razoável.
Peça a `$companify-cfo` para reclassificar o número ou modelar os três
cenários (conservador, base, agressivo) quando a incerteza for material.

## A auditoria retornou `FAILED`

Abra `.companify/reviews/YYYY-MM-DD-audit.md` e relacione cada achado ao
artefato observado. Um achado classificado como impedimento de publicação
precisa ser corrigido pela skill responsável antes de nova auditoria. Não
edite o relatório para mudar o veredito; corrija o artefato e rode
`$companify-audit` novamente.

## Dados para um relato de falha

Inclua a versão do Node.js, o sistema operacional, o caminho da skill, o
comando executado, a mensagem completa e a lista dos arquivos esperados.
Remova tokens, informações financeiras sensíveis e comprovações que não
podem ser compartilhadas.
