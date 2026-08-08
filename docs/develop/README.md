# Guia de desenvolvimento

Este percurso explica como o Companify organiza uma especialidade executiva
como skill instalável. Ele se destina a mantenedores do repositório,
revisores de contrato e responsáveis por uma publicação.

Leia a [arquitetura](arquitetura.md) antes de modificar uma skill. Depois,
consulte o [contrato das skills](contrato-das-skills.md), os
[artefatos](artefatos.md), os [testes](testes.md) e o
[processo de contribuição](contribuicao.md).

## Autoridades técnicas

| Fonte | Autoridade |
| --- | --- |
| `skills/*/SKILL.md` | Procedimento público de cada especialidade |
| `skills/*/scripts/` | Interface executável do setup |
| `skills/*/references/` | Parâmetros técnicos e templates carregados sob demanda |
| `tests/skills.test.mjs` | Comportamentos automatizados sobre a estrutura das skills |
| `docs/specification.md` | Documento mestre com o desenho completo do sistema |
| `AGENTS.md` | Regras do repositório e bloco canônico do consumidor |

Uma página desta pasta explica o código, mas não cria uma interface nova.
Toda mudança de comando precisa começar na implementação e terminar com
teste e documentação equivalentes.

## Validação rápida

Na raiz do Companify:

```bash
npm test
```

O comando confere que as 17 skills existem, que cada `SKILL.md` tem
frontmatter válido com descrição entre 90 e 160 caracteres, e que cada
`agents/openai.yaml` tem interface completa. Alterações documentais também
precisam passar pelo build do ebook quando atingirem `docs/`.
