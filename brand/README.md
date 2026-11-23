# Manual da marca do Companify

## Conceito visual

Sede de uma empresa com torre de escritórios, ala lateral e entrada em âmbar. A cor de identificação é `#C9922B`.

## Paleta essencial

`navy` (`#12213E`) carrega texto e ícone principal. `amber` (`#C9922B`) e
`teal` (`#0E7C7B`) são acentos decorativos, nunca cor de texto pequeno.
Detalhes e ramp completo em [`colors/README.md`](colors/README.md) e
[`colors/palette.json`](colors/palette.json).

## Arquivos oficiais

- [`logo/svg/`](logo/svg/): vetores fonte (`icon`, `icon-dark`, `icon-light`,
  `logo-dark`, `logo-light`).
- [`logo/png/`](logo/png/): exportações em `16w` a `2048w`, conforme o uso
  (favicon, avatar, cabeçalho).
- [`manifest.json`](manifest.json): hash de cada ativo exportado.
- [`global.css`](global.css) e [`tokens.json`](tokens.json): tokens de cor
  para uso em CSS e JSON.

## Tipografia e acessibilidade

Corpo em Inter, títulos em Manrope (mesmas webfonts OFL do kit global de PDF
do Hub, sem contratação nova). `navy` sobre `white` ou `fog` atende contraste
WCAG AA para texto normal e grande; `amber` e `teal` só aparecem como
preenchimento decorativo, nunca como cor de texto corrido pequeno.

## Estratégia e voz

Fonte completa em [`strategy.md`](strategy.md) e [`voice.md`](voice.md).

## Governança

Esta é a marca do próprio produto Companify, não de um cliente atendido pelo
Brandfy. Mudanças de cor, tipografia ou símbolo passam por este arquivo antes
de qualquer skill `companify-*` referenciar um novo valor. Origem e licenças
em [`legal.md`](legal.md).

## Regras para agentes

Ao gerar qualquer peça, tela ou documento oficial do Companify, use os tokens
de [`tokens.json`](tokens.json) ou [`global.css`](global.css), nunca um hex
digitado à mão. Prefira `logo-dark.svg`/`icon-dark.svg` sobre fundo escuro e
`logo-light.svg`/`icon-light.svg` sobre fundo claro. Não recolora o símbolo
fora da paleta definida aqui.
