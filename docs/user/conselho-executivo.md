# O conselho executivo

O núcleo do Companify é composto por nove skills executivas. Elas
compartilham o mesmo Company Context, não possuem raciocínio independente
entre si e trabalham em paralelo depois do Viability Gate: nenhuma delas
depende sequencialmente da outra, mas cada uma lê os artefatos que as demais
já publicaram em `company/`.

Os cargos não existem para personificar respostas: existem para introduzir
funções de otimização diferentes. Cada skill mantém sua pergunta central
mesmo quando ela gera tensão com as demais.

| Skill | Pergunta central | Artefato |
| --- | --- | --- |
| `companify-ceo` | É nisso que devemos concentrar a empresa? | `company/strategy.md` |
| `companify-cpo` | Isso cria valor para o usuário? | `company/product.md` |
| `companify-cto` | Isso é tecnicamente sustentável? | `company/technology.md` |
| `companify-cmo` | O mercado entenderá e encontrará isso? | `company/marketing.md` |
| `companify-cro` | Isso pode ser transformado em receita? | `company/revenue.md` |
| `companify-cfo` | Isso é economicamente sustentável? | `company/finance.md` |
| `companify-coo` | Conseguimos entregar isso repetidamente? | `company/operations.md` |
| `companify-chro` | Temos capacidade humana para executar? | `company/people.md` |
| `companify-ameacas` | O que pode dar errado, e como saberíamos a tempo? | `company/ameacas.md` |

## CEO: tese e integração

`companify-ceo` responde por que a empresa deveria existir, para quem, como
pretende vencer, onde deve concentrar recursos e o que deliberadamente não
fará. Ele integra as análises já produzidas pelas demais oito skills,
identificando onde se reforçam e onde geram tensão. Tensões não resolvidas
pelo CEO vão para `$companify-board`.

## CPO: estratégia de produto

Antes de escrever qualquer seção do artefato, `companify-cpo` separa
necessidade de solução, feature de produto e experimento de aposta. O
roadmap liga cada item a uma suposição registrada ou a uma métrica, em vez de
"porque parece uma boa ideia".

## CTO: estratégia tecnológica

`companify-cto` trabalha no nível estratégico, não na especificação de
software: identifica o que é diferencial competitivo, o que é commodity, o
que deve ser construído ou comprado. Também avalia se a arquitetura atende o estágio
real da empresa registrado em `.companify/config.yaml`.

## CMO: marketing a partir da marca

`companify-cmo` lê `brand/strategy.md` e `brand/voice.md` e usa a marca para
levar a empresa ao mercado, sem redefini-la. Quando um canal de alta
conversão exige uma mensagem que contradiz o posicionamento aprovado, a
tensão é registrada em `.companify/escolhas.md` e encaminhada a
`brandfy-estrategia`.

## CRO: sistema de receita

`companify-cro` descreve o funil completo (lead → oportunidade → venda →
ativação → retenção → expansão) e lidera pricing com CFO, CPO e CMO
consultados, cruzando o CAC do canal com o CAC máximo sustentável definido
pelo CFO.

## CFO: consequências financeiras

`companify-cfo` classifica cada número como `REALIZADO`, `CONTRATADO`,
`ESTIMADO`, `PREMISSA` ou `CENÁRIO`. Quando há incerteza material, constrói
os três cenários (conservador, base e agressivo) e, quando o modelo permite,
calcula unit economics.

## COO: capacidade operacional

`companify-coo` mapeia como a empresa entrega sua promessa hoje, testando
cada processo contra o volume que CRO e CMO estão projetando, não contra o
volume atual.

## CHRO: arquitetura humana

`companify-chro` compara o quadro atual de pessoas com o quadro necessário para
executar `company/strategy.md`, prioriza papéis pela entrega real que fica
impedida sem eles e condiciona a sequência de contratação ao orçamento
disponível.

## Ameaças: exposição empresarial

`companify-ameacas` varre catorze categorias de ameaça, da estratégica e de
mercado à regulatória, de privacidade, de reputação e de concentração. Para cada ameaça registrada, ele exige o
sinal que mostra o problema começando a acontecer, a tempo de agir.

## Matriz de colaboração executiva

| Escolha | Lidera | Deve consultar |
| --- | --- | --- |
| Tese empresarial | CEO | todos |
| Estratégia de produto | CPO | CEO, CTO, CMO, CRO, CFO |
| Arquitetura | CTO | CPO, CFO, COO |
| Build vs. buy | CTO | CPO, CFO, COO |
| Posicionamento comercial | CMO | Brandfy, CEO, CRO |
| Aquisição | CMO | CRO, CFO |
| Pricing | CRO | CFO, CPO, CMO |
| Modelo financeiro | CFO | responsáveis pelas premissas |
| Orçamento | CFO | CEO, COO |
| Operação | COO | CTO, CPO, CFO |
| Contratação | CHRO | CEO, CFO, líder funcional |
| Roadmap empresarial | CEO | conselho |
| Plano de negócio | Board | todos |

Uma skill que escolhe sozinha uma linha fora da coluna "Lidera" está fora do
protocolo: deve recomendar e registrar a tensão, não escolher.
