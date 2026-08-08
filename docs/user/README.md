# Guia completo do usuário

Uma empresa costuma começar com raciocínio espalhado: uma tese de negócio na
cabeça do fundador, uma planilha financeira otimista, um roadmap de produto
sem hipótese registrada e nenhum lugar único que junte tudo isso. O Companify
reúne esse raciocínio, conduz um conselho executivo virtual pelas análises que
ainda faltam e grava um plano de negócio que pessoas e agentes conseguem
consultar antes de tomar a próxima escolha.

O Companify é uma biblioteca de skills para agentes. Ele não substitui a
conversa com sócios, investidores, contador ou advogado. As skills ajudam a
separar fato de hipótese, comparar alternativas, produzir artefatos
repetíveis e mostrar o que ainda depende de comprovação.

## Leia online ou como parte do ebook

Este percurso e a referência técnica são publicados no mesmo PDF e EPUB. Os
arquivos Markdown em `docs/` são a fonte editorial, por isso uma correção
feita aqui entra nas duas edições no próximo build.

- O PDF preserva a diagramação e funciona bem para leitura, compartilhamento e
  impressão.
- O EPUB permite ajustar a fonte e o tamanho em leitores digitais.

A [pasta dos ebooks](../../ebooks/) registra a edição vigente, os artefatos
publicados e os hashes em `build.json`.

## Percurso recomendado

Comece pela [instalação](instalacao.md) e confirme que as skills aparecem no
projeto. Depois, leia [os conceitos e a taxonomia](conceitos.md) antes de
executar o setup. Essa ordem evita confundir `.companify/` (processo) com a
pasta pública `company/` (resultado).

O trabalho completo segue esta sequência:

1. [Instale e confira as skills](instalacao.md).
2. [Entenda a taxonomia e as camadas de informação](conceitos.md).
3. [Construa o primeiro plano de negócio](primeiro-plano.md).
4. [Conduza a entrevista e preencha o Company Context](entrevista-e-contexto.md).
5. [Consulte o conselho executivo](conselho-executivo.md).
6. [Resolva conflitos com o Board](board-e-escolhas.md).
7. [Consolide o plano de negócio](plano-de-negocio.md).
8. [Audite o plano antes de publicar](auditoria.md).
9. [Confira a relação com o Brandfy](relacao-com-brandfy.md).
10. [Investigue falhas conhecidas](solucao-de-problemas.md).

Uma empresa existente pode pular etapas já suficientemente documentadas,
desde que a comprovação do que já existe justifique o salto. Uma ideia nova
precisa de entrevista antes de qualquer análise executiva, pois nenhuma skill
deve completar uma lacuna do Company Context com uma resposta apenas
plausível.

## O resultado no repositório

Ao final, o projeto consumidor mantém a origem do trabalho em `.companify/`
e os artefatos utilizáveis em `company/`. Um conjunto completo contém
estratégia, mercado, modelo de negócio, produto, tecnologia, marketing,
receita, finanças, operações, pessoas, ameaças, roadmap e o plano de negócio
consolidado.

O relatório `.companify/reviews/YYYY-MM-DD-audit.md` fecha o percurso ao
confrontar o plano com os artefatos produzidos. A aprovação automática não
dispensa a leitura do plano completo por um responsável humano.
