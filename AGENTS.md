# Instruções do Companify

Este repositório mantém uma biblioteca pública de skills para criar,
estruturar, analisar e evoluir a empresa por trás de uma marca, produto ou
projeto. Responda, documente e comente código em Português do Brasil.
Preserve nomes técnicos em inglês quando eles forem a convenção da ferramenta,
do cargo executivo ou do formato (CAC, LTV, MRR, ICP, TAM/SAM/SOM).

O Companify é parte do ecossistema Brandfy: enquanto o Brandfy responde pela
marca, o Companify responde pelo negócio. As duas bibliotecas compartilham
contexto, mas cada uma preserva os artefatos aprovados da outra: nenhuma
skill `companify-*` reescreve silenciosamente um arquivo em `.brandfy/` ou
`brand/`.

## Organização do repositório

- `skills/` contém as skills instaláveis pelo gerenciador `skills add`, cada
  uma com prefixo `companify-`. Não agrupe as skills em subpastas como
  `skills/companify/ceo`; cada skill vive diretamente em `skills/companify-*`.
- Cada skill mantém seu `SKILL.md`, os metadados de `agents/openai.yaml` e
  somente os scripts, referências ou templates necessários ao próprio fluxo.
  Nem toda skill precisa de `scripts/` ou `assets/`.
- `.companify/` pertence ao projeto consumidor e representa o **processo**:
  configuração, entrevista, premissas, escolhas, comprovações, métricas,
  ameaças e revisões. Não salve dados de uma empresa cliente dentro deste
  repositório.
- `company/` é o destino padrão dos artefatos empresariais consolidados no
  projeto consumidor e representa o **resultado**.
- Os scripts precisam ser idempotentes e devem preservar arquivos que o
  usuário já mantém.

## Qualidade e fontes

- Atue como o especialista executivo da skill. Explique o raciocínio, exponha
  tensões entre áreas, compare alternativas e ligue cada recomendação a
  comprovação, premissa ou parâmetro verificável.
- Classifique toda informação relevante em uma das categorias canônicas: fato,
  comprovação, declaração do usuário, contexto Brandfy, inferência, hipótese,
  premissa, recomendação, escolha ou pendência. Uma hipótese nunca aparece no
  plano final como se fosse fato confirmado.
- Não invente pesquisas de mercado, estatísticas, concorrentes, faturamento,
  CAC, churn, salários, custos, impostos ou taxas de conversão. Quando um
  número não existir, modele como variável com cenários conservador, base e
  agressivo.
- Não escolha em nome do usuário sem registrar a escolha como recomendação,
  nem substitua aconselhamento jurídico, contábil ou financeiro profissional.
- Não redefina silenciosamente uma escolha de marca aprovada pelo Brandfy.
  Registre a tensão e encaminhe à skill `brandfy-*` correspondente.

## Alterações e validação

Crie um plano visível para trabalhos com mais de uma etapa. Leia os arquivos
existentes antes de editar, mantenha compatibilidade com `skills add` e rode
`npm test` ao alterar scripts, templates ou skills. Confira também cada skill
com o `quick_validate.py` do Skill Creator.

<!-- companify:consumer:start -->
## Companify no projeto

O diretório `.companify/` guarda o contexto, a entrevista, o progresso das
perguntas já feitas por qualquer skill (`progresso.md`), as premissas, as
escolhas, as comprovações, as métricas, as ameaças e as revisões da empresa
em construção. O diretório `company/` guarda os artefatos empresariais
consolidados.

Quando o usuário não conhecer o Companify ou pedir algo genérico como "me
ajuda a montar minha empresa", use `$companify-assistente` em vez de expor a
arquitetura completa: essa skill traduz os especialistas para linguagem
simples e prioriza um primeiro plano rápido.

Ao criar ou alterar o plano de negócio:

1. Leia `.companify/config.yaml`, `.companify/company-context.md` e os
   artefatos existentes em `company/`. Leia também `.brandfy/config.yaml`,
   `brand/strategy.md`, `brand/voice.md` e `brand/manual.md` quando existirem.
2. Use `$companify-interview` quando os dados necessários ainda não estiverem
   confirmados. A entrevista não é um questionário fixo; investigue apenas as
   lacunas relevantes ao estágio da empresa.
3. Preserve arquivos aprovados. Quando uma escolha mudar, registre a revisão
   em `.companify/escolhas.md`; não sobrescreva a escolha anterior.
4. Diferencie fato, comprovação, declaração do usuário, contexto Brandfy,
   inferência, hipótese, premissa, recomendação, escolha e pendência em todo
   texto produzido.
5. Atue como o executivo da área correspondente, explique parâmetros e
   apresente tensões antes de recomendar uma direção. Não escolha sozinho
   questões que a matriz de colaboração atribui a outra liderança.
6. Use as skills `companify-*` instaladas no projeto para a etapa
   correspondente. `$companify-builder` orquestra a esteira completa e os
   quatro gates (Context, Viability, Executive Alignment, Business Plan).
7. Quando uma análise empresarial entrar em conflito com uma escolha de marca
   aprovada, registre o conflito e encaminhe à skill `brandfy-*`
   correspondente em vez de resolvê-lo unilateralmente.
8. Não apresente projeção como fato. Toda fórmula financeira ou comercial
   deve expor as premissas usadas.
9. Consolide o plano com `$companify-business-plan` e valide com
   `$companify-audit` antes de considerar o pacote pronto. A auditoria não
   aprova pela simples presença de arquivos.
<!-- companify:consumer:end -->

## Status das tarefas no ClickUp

Após cada commit bem-sucedido, marque como `pronto` a tarefa ou subtarefa vinculada à entrega. Após o push bem-sucedido desse commit, marque-a como `publicado`. Registre repositório, SHA e destino do push na tarefa e confirme o status pelo ClickUpfy.

| Status | Quando usar |
| --- | --- |
| `nao iniciado` | Demanda registrada que ainda não foi priorizada. |
| `triagem` | Esclareça o pedido, confira duplicidades e identifique o responsável. |
| `proxima etapa` | Trabalho priorizado que já tem próxima ação e condição de aceite. |
| `em andamento` | Há alguém executando a tarefa, com plano e cronômetro. |
| `refazer` | A revisão pediu ajustes. Registre o que corrigir e retome em `em andamento` ao começar. |
| `revisar` | A entrega está disponível e validada para revisão. Registre como conferi-la. |
| `pronto` | O commit da entrega foi criado. Registre o repositório e o SHA. |
| `publicado` | O push do commit foi confirmado. Registre remoto, branch e versão ou release quando aplicável. |
| `concluido` | Encerramento por orientação do usuário após conferir a entrega em produção ou o aceite da entrega interna. |
