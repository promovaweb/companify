# Documentação do Companify

O Companify organiza a construção do plano de negócio em skills executivas
especializadas. A documentação possui dois percursos porque o uso da
biblioteca e a manutenção do repositório exigem informações diferentes.

| Percurso | Para que serve | Comece por |
| --- | --- | --- |
| Guia do usuário | Instalar as skills, preparar um projeto e produzir os artefatos do plano de negócio | [Guia completo do usuário](user/README.md) |
| Guia técnico | Entender a arquitetura, alterar skills, manter os testes e publicar uma versão | [Guia de desenvolvimento](develop/README.md) |

O [guia do usuário](user/README.md) acompanha uma empresa desde a instalação
até a auditoria do plano de negócio. Ele e o guia técnico compõem o PDF e o
EPUB publicados em [`ebooks/`](../ebooks/), conforme a ordem registrada em
`reading-order.txt`.

O [guia técnico](develop/README.md) explica o contrato de uma skill, os
diretórios gerenciados, os testes e a manutenção da biblioteca. Ele deve ser
usado junto com o código, que continua sendo a fonte executável do
comportamento.

## Fontes oficiais

As páginas descrevem quatro fontes que cumprem papéis diferentes:

- `skills/` implementa os 17 especialistas e contém scripts, referências e
  metadados instaláveis.
- `.companify/` registra configuração, entrevista, premissas, escolhas,
  comprovações, métricas, ameaças e revisões do trabalho em andamento.
- `company/` guarda os artefatos empresariais consolidados: estratégia,
  mercado, modelo de negócio, produto, tecnologia, marketing, receita,
  finanças, operações, pessoas, ameaças, roadmap e o plano de negócio.
- `tests/` comprova os contratos automatizados do repositório.

Quando a documentação divergir de uma interface executável, corrija a página
e o teste relacionado na mesma alteração.
