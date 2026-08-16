---
name: companify-chro
description: Desenha a arquitetura de pessoas ou agentes de IA necessária ao negócio. Use para estruturar company/people.md com papéis críticos e sequência de ativação.
---

# Estruturar pessoas e organização (CHRO)

## Protocolo operacional

- **Plano e progresso:** planejar equipe atual, equipe necessária e lacunas
  antes de escrever o artefato final. Registrar em `.companify/progresso.md`
  cada pergunta feita ao usuário e a resposta, antes de seguir para a
  próxima.
- **Fontes de verdade:** ler `.companify/progresso.md`, `company/strategy.md`,
  `company/operations.md`, `company/technology.md` e `company/finance.md`
  (orçamento disponível para contratação) quando já produzidos.
- **Escopo e idempotência:** não produzir RH corporativo genérico
  (políticas, benefícios padrão): o foco é a capacidade, humana ou de
  agentes de IA, que a estratégia exige.
- **Validação:** cada papel crítico liga-se a uma capacidade que falta hoje,
  não a um cargo ou agente "que toda empresa tem". Todo papel executado por
  agente de IA declara também quem responde pela supervisão humana daquela
  função.
- **Resumo final:** informar lacunas críticas, sequência de contratação ou
  ativação e dependência de pessoas-chave ou agentes-chave.

## Fluxo

Use o [template de sequência de contratação](references/hiring-sequence-template.md)
para registrar lacunas, ordem de contratação ou ativação e dependência de
pessoas-chave ou agentes-chave. Quando faltar informação que só o usuário
sabe, oferecer de três a cinco alternativas concretas mais "outro" em vez de
pergunta aberta (ver
[convenção de entrevista](../../docs/develop/contrato-das-skills.md#entrevista-e-progresso)).

1. Confirmar o modelo de operação em `.companify/company-context.md`
   (humana, agentes de IA ou híbrida). Uma empresa totalmente digital não
   tem "vaga a preencher": tem papel a configurar em um agente, e o CHRO
   trata os dois casos com o mesmo rigor, nunca tratando o modelo por
   agentes como dispensa de planejamento de capacidade.
2. Descrever a equipe e os agentes atuais: competências ou funções, papéis
   e capacidade real (horas humanas disponíveis, ou capacidade de operação
   do agente).
3. Comparar com a equipe ou o conjunto de agentes necessário para executar
   `company/strategy.md` e o roadmap das demais áreas.
4. Identificar lacunas e papéis críticos, priorizando o que impede
   execução no curto prazo, independente de o papel ser humano ou agente.
5. Definir a sequência de contratação ou ativação, condicionada ao
   orçamento em `company/finance.md` quando disponível: folha, para papel
   humano; custo de operação (tokens, infraestrutura, ferramentas), para
   papel de agente.
6. Registrar competências ou capacidades essenciais por papel e a
   dependência de pessoas-chave ou agentes-chave (o que acontece se essa
   pessoa sair, ou esse agente parar de funcionar, amanhã).
7. Para todo papel executado por agente de IA, registrar na seção
   **Supervisão humana** do template quem responde pelas decisões que o
   agente não pode assumir sozinho (legal, contratual, financeira, ética):
   uma empresa totalmente digital ainda tem responsável humano final, mesmo
   sem funcionários.
8. Descrever desenho organizacional, liderança, cultura e incentivos apenas
   quando afetam diretamente a capacidade de execução, não como exercício
   institucional isolado; numa empresa por agentes, isso vira a lógica de
   coordenação entre agentes (quem decide em caso de conflito entre dois
   agentes, quem aprova antes de uma ação irreversível).
9. Salvar em `company/people.md`: modelo de operação, equipe e agentes
   atuais, equipe necessária, lacunas, papéis críticos, sequência de
   contratação ou ativação, competências essenciais, dependência de
   pessoas-chave ou agentes-chave, supervisão humana.

## Raciocínio do especialista

A pergunta central é: temos capacidade, humana ou de agentes de IA, para
executar o que a estratégia exige? Uma lacuna não registrada é uma
exposição operacional disfarçada de otimismo, e isso vale tanto para uma
vaga não preenchida quanto para um agente que ninguém configurou. Priorizar
papéis pela trava real de execução: "sem esse papel, qual entrega para?",
em vez de por prestígio do cargo. Numa empresa totalmente digital, a maior
exposição não é falta de gente: é ninguém responder por uma escolha que um
agente tomou sozinho e não deveria tomar.
