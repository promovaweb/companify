# Paleta do Companify

Duas cores de marca, mais neutros. O accent (`amber`) e o secundário (`teal`)
são decorativos (logo, divisores, destaque de bloco); texto e links usam o
`navy`, que garante contraste acessível sobre fundo claro. Nenhuma combinação
de texto usa `amber` ou `teal` como cor de fonte em corpo de texto.

| Token | Hex | Uso |
| --- | --- | --- |
| `companify-navy` | `#12213E` | Título, texto de corpo, link, ícone principal. |
| `companify-amber` | `#C9922B` | Destaque decorativo, logo, badge, divisor de seção. |
| `companify-teal` | `#0E7C7B` | Acento secundário, gráfico, estado de sucesso. |
| `companify-white` | `#FFFFFF` | Fundo claro padrão. |
| `companify-fog` | `#F5F5F0` | Fundo de bloco de código, tabela, cartão. |
| `companify-graphite` | `#1A1A1A` | Texto de alto contraste em fundo claro. |
| `companify-gray` | `#5B5F66` | Texto secundário, legenda, metadado. |
| `companify-border` | `#D9D9D2` | Borda de tabela, divisor fino. |

## Contraste

`navy` sobre `white` e sobre `fog` atende WCAG AA para texto normal e
grande. `amber` e `teal` só aparecem como preenchimento decorativo atrás de
texto `navy` ou `white`, nunca como cor de texto pequeno sobre fundo claro:
o contraste de `amber` sobre `white` fica abaixo do mínimo para leitura
confortável.

## Por que essas cores

`navy` referencia a mesa de conselho e a seriedade da análise financeira,
sem repetir o azul genérico do kit do Hub nem o rosa/teal do Brandfy. `amber`
marca o momento em que uma tensão vira escolha registrada, o mesmo papel que
o ouro tem em selos de aprovação. `teal` aparece só como segundo acento,
nunca como cor dominante, para a marca não competir com a paleta do Brandfy
quando os dois aparecerem lado a lado em um mesmo projeto.
