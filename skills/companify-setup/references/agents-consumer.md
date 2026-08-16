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
