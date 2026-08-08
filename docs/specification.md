# Especificação do Companify

Este documento é a especificação mestre do Companify: visão geral, relação
com o Brandfy, princípio central, arquitetura das 17 skills do MVP, gates e
esteira completa. As implementações vivem em `skills/companify-*`; este
arquivo é a fonte de verdade quando uma skill precisar de contexto que não
caiba no próprio `SKILL.md`.

## Ajustes aplicados sobre a especificação original

A versão original recebida do usuário tinha três lacunas de propriedade de
artefato, corrigidas nesta versão:

1. **`company/strategy.md`** aparecia na árvore final (seção "Resultado
   esperado") sem skill responsável: as demais lideranças (CPO, CTO, CMO,
   CRO, CFO, COO, CHRO, Ameaças) tinham `Artefato:` explícito, mas o CEO não.
   Corrigido: `companify-ceo` é o responsável por `company/strategy.md`
   (tese, direção estratégica, prioridades e trade-offs).
2. **`company/roadmap.md`** aparecia na árvore final e na seção "Roadmap
   empresarial" sem skill responsável. Corrigido: `companify-business-plan`
   produz `company/roadmap.md` como artefato-irmão do `business-plan.md`,
   consolidando os roadmaps setoriais (produto, tecnologia, marketing,
   vendas, operação, pessoas, finanças) que cada C-level já registra na
   própria área.
3. **`company/README.md`** não tinha responsável. Corrigido:
   `companify-setup` cria o esqueleto inicial (índice dos artefatos
   esperados e status de cada um); `companify-business-plan` atualiza o
   índice na consolidação final.
4. **Taxonomia proibida pelo Hub.** A versão original usava `risco`,
   `decisão` e `evidência` como categorias nomeadas do sistema. O índice
   `PROHIBITED-TERMOS-ABSOLUTOS.md` do Hub veta essas famílias léxicas
   também em skill. Corrigido em todo o repositório: `risco`/`riscos` virou
   `ameaça`/`ameaças` (a skill `companify-risk` foi renomeada para
   `companify-ameacas` e `company/risks.md` para `company/ameacas.md`),
   `decisão`/`decisões` virou `escolha`/`escolhas` (`.companify/decisions.md`
   virou `.companify/escolhas.md` e o formato `DEC-NNN` virou `ESC-NNN`), e
   `evidência`/`evidências` virou `comprovação`/`comprovações`
   (`.companify/evidence.md` virou `.companify/comprovacoes.md`).

Também explicitado: `.companify/comprovacoes.md`, `.companify/assumptions.md`,
`.companify/escolhas.md` e `.companify/metrics.md` são registros
compartilhados, e qualquer skill pode adicionar uma entrada. Porém,
`companify-board` cura `escolhas.md` (conflitos e resoluções) e
`companify-cfo`/`companify-cro` curam `metrics.md` em conjunto. A árvore de
métricas de exemplo (seção "Métricas") é ilustrativa de um negócio SaaS; uma
skill não deve forçar esse formato em um modelo de negócio onde ele não se
aplica (marketplace, serviço, licenciamento).

---

## 1. Visão geral

O Companify é um submódulo do ecossistema Brandfy voltado à criação,
estruturação, análise e evolução da empresa por trás de uma marca, produto ou
projeto.

Enquanto o Brandfy responde pela construção e governança da marca, o
Companify responde pela construção e governança do **negócio**.

O objetivo é permitir que uma pessoa parta de uma ideia, projeto, produto,
startup, empresa existente ou marca criada pelo Brandfy e seja conduzida por
uma equipe virtual de especialistas executivos na criação de um plano
empresarial consistente.

O Companify deve funcionar como um **conselho executivo virtual
colaborativo**. Não é composto apenas por prompts que simulam cargos. Cada
skill possui responsabilidade própria, fontes de informação definidas,
limites de atuação, perguntas que deve responder, artefatos pelos quais é
responsável, dependências de outras skills, regras de validação, conflitos
que precisa detectar, métricas relacionadas à sua área, regras sobre o que
pode ou não assumir e protocolo de colaboração com os demais executivos.

O resultado final da esteira é um **Plano de Negócio vivo**, sustentado pelos
diferentes documentos empresariais produzidos ao longo do processo.

## 2. Relação entre Brandfy e Companify

Brandfy e Companify operam como módulos complementares. O Brandfy resolve a
marca (propósito, missão, visão, valores, público, posicionamento,
personalidade, voz, naming, identidade visual, aplicações); o Companify
resolve a empresa (estratégia empresarial, mercado, modelo de negócio,
produto, tecnologia, marketing, vendas, finanças, operações, pessoas, ameaças
e plano de negócio), consumindo o contexto de marca como entrada
compartilhada.

O Companify consome artefatos já aprovados pelo Brandfy sempre que
disponíveis: `.brandfy/config.yaml`, `.brandfy/brief.md`,
`.brandfy/interview-summary.md`, `brand/strategy.md`, `brand/voice.md`,
`brand/manual.md`. Esses documentos não são silenciosamente reescritos pelas
skills Companify.

Quando uma análise empresarial entra em conflito com uma escolha de marca, o
Companify registra o conflito:

```text
Contexto Brandfy:
Posicionamento premium.

Hipótese do CFO:
O mercado inicialmente acessível apresenta maior sensibilidade a preço.

Tensão:
Redução agressiva de preço pode enfraquecer o posicionamento aprovado.

Recomendação:
Avaliar uma oferta de entrada diferente, preservando o posicionamento da
oferta principal.

Status:
Escolha pendente.
```

Mudanças na estratégia de marca são encaminhadas às skills `brandfy-*`
correspondentes: o Companify nunca aplica a mudança diretamente em
`.brandfy/` ou `brand/`.

## 3. Princípio central

O Companify não deve simplesmente gerar um plano de negócio: deve construir o
raciocínio que sustenta o plano. Toda informação relevante é classificada em
uma das categorias canônicas:

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

Uma hipótese nunca aparece no plano final como se fosse fato confirmado.

## 4. Objetivos do Companify

Transformar uma ideia em tese empresarial; compreender o problema;
identificar mercado e segmentos; estruturar ICP e clientes prioritários;
analisar concorrentes e alternativas; definir produto ou serviço; criar
estratégia de produto; estruturar modelo de negócio; definir monetização;
estudar pricing; elaborar estratégia de marketing e de entrada no mercado;
estruturar vendas; definir operação; analisar estratégia tecnológica; estimar
recursos; estruturar equipe; construir modelo financeiro; calcular unit
economics quando aplicável; projetar cenários; identificar ameaças; definir
indicadores; construir roadmap empresarial; criar plano de execução; produzir
plano de negócio consolidado.

## 5. O que o Companify não deve fazer

Não inventar pesquisas de mercado, estatísticas, concorrentes, faturamento,
CAC, churn, salários, custos, impostos ou taxas de conversão. Não apresentar
projeção como fato. Não escolher em nome do usuário sem registrar a escolha
como recomendação. Não substituir aconselhamento jurídico, contábil ou
financeiro profissional. Não redefinir silenciosamente a marca criada pelo
Brandfy. Não produzir dezenas de documentos contraditórios entre si.

Quando um número não existir, modelar como variável:

```text
CAC = desconhecido

Cenário conservador: R$ 600
Cenário base: R$ 350
Cenário agressivo: R$ 200
```

## 6. Arquitetura das skills

```text
skills/
  companify-assistente/
  companify-builder/
  companify-setup/
  companify-interview/
  companify-market/
  companify-business-model/
  companify-ceo/
  companify-cpo/
  companify-cto/
  companify-cmo/
  companify-cro/
  companify-cfo/
  companify-coo/
  companify-chro/
  companify-ameacas/
  companify-board/
  companify-business-plan/
  companify-audit/
```

Não criar `skills/companify/ceo`, `skills/companify/cfo` etc. Cada skill
continua instalável e utilizável individualmente; o prefixo `companify-`
define a família.

## 7. Estrutura interna de cada skill

```text
skills/companify-ceo/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
├── scripts/
└── assets/
```

Nem todas precisam de todos os diretórios: criar somente o necessário.

## 8. Estrutura no projeto consumidor

Estado interno (`.companify/`, representa o processo):

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
```

Artefatos empresariais (`company/`, representa o resultado):

```text
company/
├── README.md            companify-setup cria; companify-business-plan atualiza
├── strategy.md           companify-ceo
├── market.md              companify-market
├── business-model.md      companify-business-model
├── product.md              companify-cpo
├── technology.md           companify-cto
├── marketing.md             companify-cmo
├── revenue.md                companify-cro
├── finance.md                  companify-cfo
├── operations.md               companify-coo
├── people.md                    companify-chro
├── ameacas.md                    companify-ameacas
├── roadmap.md                     companify-business-plan (consolida os setoriais)
└── business-plan.md                companify-business-plan
```

## 9. Company Context

`.companify/company-context.md` é o documento central: oferece a todas as
skills a mesma visão da empresa (empresa, fundadores, problema, solução,
cliente, oferta, receita, tração, aquisição, operação, tecnologia, objetivos,
restrições, contexto Brandfy, premissas e pendências). A estrutura mínima
completa está documentada em `skills/companify-setup/references/company-context-template.md`.

## 10–27, 30–31, 36–49. Demais seções

O conteúdo integral de cada skill (responsabilidades, artefatos, perguntas
fundamentais, protocolo, regras de validação), da matriz de colaboração
executiva, do registro de escolhas e premissas, dos gates, da esteira
completa, das integrações CEO/CMO ↔ Brandfy, da filosofia dos executivos
virtuais e das extensões futuras está implementado diretamente em cada
`skills/companify-*/SKILL.md` e nas referências que cada skill carrega: este
documento não duplica esse conteúdo para evitar duas fontes de verdade
divergentes. Use a tabela abaixo para localizar cada assunto.

| Assunto | Onde está |
| --- | --- |
| Matriz de colaboração executiva | `skills/companify-board/references/collaboration-matrix.md` |
| Registro de escolhas (`ESC-NNN`) | `skills/companify-board/references/decision-record.md` |
| Registro de premissas (`ASS-NNN`) | `skills/companify-interview/references/assumption-record.md` |
| Quatro gates (Context, Viability, Executive Alignment, Business Plan) | `skills/companify-builder/references/gates.md` |
| Esteira completa | `skills/companify-builder/SKILL.md` |
| Cenários e sensibilidade | `skills/companify-cfo/references/scenarios.md` |
| Métricas e árvore de indicadores | `skills/companify-cfo/references/metrics-tree.md` |
| Plano de 90 dias e roadmap | `skills/companify-business-plan/references/business-plan-outline.md` |
| Experimentos empresariais | `skills/companify-interview/references/assumption-record.md` |
| Comportamento analítico do Board | `skills/companify-board/SKILL.md` |
| Filosofia dos executivos virtuais | `skills/companify-board/references/collaboration-matrix.md` |

## 32. MVP e extensões futuras

As 17 skills listadas na seção 6 compõem o MVP. `companify-assistente` foi
adicionada depois como porta de entrada conversacional para usuários leigos:
traduz os especialistas para linguagem simples, roda `companify-setup` nos
bastidores e prioriza um primeiro plano enxuto em uma conversa só, em vez da
esteira completa. Ela não substitui `companify-builder`; encaminha para ele
quando o usuário pedir explicitamente a esteira completa. Extensões futuras,
como
`companify-investor`, `companify-fundraising`, `companify-mna`,
`companify-international`, `companify-franchise`, `companify-saas`,
`companify-marketplace`, `companify-ecommerce`, `companify-agency`,
`companify-partnerships`, `companify-procurement` e `companify-compliance`,
funcionam como especializações que consultam o mesmo Company Context, sem
substituir o conselho principal.

## 33. Resultado esperado

Ao final da esteira, um projeto possui:

```text
.brandfy/
brand/

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
├── README.md
├── strategy.md
├── market.md
├── business-model.md
├── product.md
├── technology.md
├── marketing.md
├── revenue.md
├── finance.md
├── operations.md
├── people.md
├── ameacas.md
├── roadmap.md
└── business-plan.md
```

Brandfy responde: "Que marca estamos construindo?"

Companify responde: "Que empresa estamos construindo, por que ela pode
funcionar e como vamos executá-la?"

O valor do Companify está principalmente na relação entre as duas camadas: uma
estratégia de marca deixa de existir isoladamente e passa a alimentar produto,
mercado, marketing e estratégia empresarial; comprovações encontradas durante
a construção da empresa podem revelar que hipóteses da marca precisam ser
revistas.
