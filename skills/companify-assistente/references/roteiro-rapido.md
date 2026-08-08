# Roteiro rápido

O objetivo é sair com um primeiro plano de negócio simples em uma conversa
só, não em um processo de dias. Priorize profundidade nas áreas que mudam a
escolha do usuário agora; deixe o resto como "próximo passo opcional".

## Pacote mínimo (sempre rodar)

Nesta ordem, sem pular:

1. `companify-setup` (silencioso, nos bastidores).
2. `companify-interview`, mas só as perguntas do bloco "Perguntas rápidas"
   abaixo, não o roteiro completo da skill.
3. `companify-market`, versão curta: categoria, quem sente o problema, e
   quem mais já vende algo parecido.
4. `companify-business-model`, versão curta: como cobra e por que alguém
   pagaria.
5. `companify-ceo`, versão curta: por que essa empresa, por que agora, pra
   quem.
6. `companify-business-plan`, para consolidar mesmo que o plano fique
   enxuto.

## Perguntas rápidas (substituem o roteiro completo de `companify-interview`)

Faça uma de cada vez, em linguagem simples, sem despejar todas juntas:

1. Em uma frase, o que sua empresa faz ou vai fazer?
2. Quem tem esse problema hoje, e como essa pessoa resolve isso agora (nem
   que seja "do jeito manual" ou "não resolve")?
3. Você já tem alguma venda, cliente ou teste, ou ainda é só ideia?
4. Como você imagina cobrar por isso?
5. Você já tem sócio, equipe ou vai começar sozinho?
6. Tem algum prazo ou dinheiro disponível que eu deveria saber agora?

Pare de perguntar assim que tiver o suficiente para preencher essas seis
respostas; não insista em detalhe que o usuário claramente não sabe ainda.
Registre a lacuna como pendência e siga.

## Pacote de aprofundamento (oferecer, não impor)

Depois do plano enxuto, pergunte: "Quer que eu aprofunde em alguma área
específica agora, ou isso já te ajuda a começar?" Ofereça no máximo três
opções por vez, nunca a lista completa de 17 skills de uma vez:

- "Quer que eu entre mais fundo em vendas e preço?" → `companify-cro`
- "Quer que eu monte as contas com mais detalhe?" → `companify-cfo`
- "Quer que eu pense na parte técnica do produto?" → `companify-cto`
- "Quer que eu pense em quem contratar primeiro?" → `companify-chro`
- "Quer que eu liste o que pode dar errado e como se proteger?" → `companify-ameacas`
- "Quer que eu pense em como as pessoas vão te encontrar?" → `companify-cmo`
- "Quer uma auditoria final, conferindo se está tudo consistente?" → `companify-audit`

## Quando usar o Board

Só chame `companify-board` quando duas respostas do usuário (ou duas
skills) realmente se contradisserem de um jeito que o usuário precisa
decidir. Não chame o Board só porque existem opiniões diferentes possíveis;
chame quando o próprio usuário hesitar entre dois caminhos.

## Quando encerrar

Encerre a conversa rápida com três coisas, nunca menos e nunca uma lista
enorme:

1. Um resumo de três a cinco linhas do que foi definido.
2. As duas ou três pendências mais importantes (não todas).
3. Um próximo passo concreto para essa semana.
