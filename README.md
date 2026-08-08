# Companify

O Companify é uma biblioteca de skills para criar, estruturar, analisar e
evoluir a empresa por trás de uma marca, produto ou projeto. O Brandfy
responde pela construção e governança da **marca**; o Companify responde pela
construção e governança do **negócio**. Juntas, as duas bibliotecas conduzem
uma ideia, projeto, produto, startup ou empresa existente até um plano de
negócio vivo, sustentado por um conselho executivo virtual colaborativo: não
por prompts que apenas simulam cargos.

## Instalação

```bash
npx skills add promovaweb/companify
```

O comando instala as skills no gerenciador do agente. O destino pode variar
conforme o agente escolhido. `$companify-setup` prepara `.companify/`,
`company/` e o bloco de instruções no `AGENTS.md` do projeto consumidor.

## Fluxos principais

`$companify-builder` coordena a esteira completa: setup, contexto, entrevista,
mercado, modelo de negócio, conselho executivo, board, plano de negócio e
auditoria. Uma empresa existente pode pular etapas já suficientemente
documentadas, desde que a comprovação justifique o salto. As skills
especializadas também funcionam de forma direta: por exemplo, `$companify-cfo`
para revisar apenas as finanças ou `$companify-board` para debater uma escolha
complexa.

| Skill | Responsabilidade |
| --- | --- |
| `companify-setup` | Prepara `.companify/`, `company/` e as instruções do projeto. |
| `companify-interview` | Conduz a descoberta empresarial progressiva e alimenta o Company Context. |
| `companify-market` | Mercado, segmentos, ICP, concorrência e TAM/SAM/SOM. |
| `companify-business-model` | Lógica econômica: criação, entrega e captura de valor. |
| `companify-ceo` | Tese empresarial, direção estratégica e integração entre áreas. |
| `companify-cpo` | Estratégia de produto, discovery e roadmap de produto. |
| `companify-cto` | Estratégia tecnológica, arquitetura e build vs. buy. |
| `companify-cmo` | Geração de demanda, posicionamento comercial e go-to-market. |
| `companify-cro` | Monetização, vendas, pipeline e métricas de receita. |
| `companify-cfo` | Modelo financeiro, unit economics, cenários e viabilidade. |
| `companify-coo` | Capacidade operacional, processos críticos e execução. |
| `companify-chro` | Desenho organizacional, papéis críticos e sequência de contratação. |
| `companify-ameacas` | Ameaças empresariais por categoria, com mitigação e contingência. |
| `companify-board` | Conselho executivo: confronta análises, resolve conflitos e prioriza. |
| `companify-business-plan` | Consolida o plano de negócio como narrativa coerente. |
| `companify-audit` | Revisão final de consistência, comprovação e prontidão do plano. |
| `companify-builder` | Coordena a esteira completa e os quatro gates de qualidade. |

## Relação com o Brandfy

O Companify consome os artefatos já aprovados pelo Brandfy sempre que
disponíveis (`.brandfy/config.yaml`, `.brandfy/brief.md`, `brand/strategy.md`,
`brand/voice.md`, `brand/manual.md`) e nunca os reescreve silenciosamente.
Quando uma análise empresarial entra em conflito com uma escolha de marca
(por exemplo, uma hipótese de pricing que pressiona um posicionamento
premium), o Companify registra a tensão em `.companify/escolhas.md` e
encaminha a mudança à skill `brandfy-estrategia` correspondente, em vez de
resolver a questão sozinho.

## Identidade do projeto

A própria marca Companify vive em [`brand/`](brand/): símbolo de nove nós,
paleta `navy`/`amber`/`teal`, tokens CSS/JSON e o manual em
[`brand/README.md`](brand/README.md). É a identidade do produto Companify em
si, não de uma empresa criada por ele.

## Documentação

A documentação oficial separa o uso da biblioteca e a manutenção do
repositório:

- [`docs/user/`](docs/user/) acompanha instalação, conceitos, o primeiro
  plano de negócio, entrevista, conselho executivo, board, plano de negócio,
  auditoria, relação com o Brandfy e solução de problemas.
- [`docs/develop/`](docs/develop/) descreve arquitetura, o contrato das
  skills, os artefatos, os testes e a contribuição.

Os dois percursos, mais a especificação completa como apêndice, são
compilados em um PDF e um EPUB dentro de [`ebooks/`](ebooks/).

## Estado do projeto

Este repositório está na primeira versão publicada, com as 17 skills do MVP
descrito em `docs/specification.md`. Extensões futuras, como
`companify-fundraising`, `companify-saas` ou `companify-compliance`, devem
funcionar como especializações que consultam o mesmo Company Context, sem
substituir o conselho principal.

## Licença

[MIT](LICENSE).
