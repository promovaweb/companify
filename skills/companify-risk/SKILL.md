---
name: companify-risk
description: Analisa riscos empresariais por categoria. Use para estruturar company/risks.md com probabilidade, impacto, mitigação e contingência.
---

# Analisar riscos empresariais

## Protocolo operacional

- **Plano e progresso:** planejar a varredura por categoria antes de
  detalhar cada risco individualmente.
- **Fontes de verdade:** ler todos os artefatos já produzidos em `company/`
  e `.companify/assumptions.md` — premissas críticas não validadas são
  candidatas naturais a risco.
- **Escopo e idempotência:** não substituir especialista jurídico, contábil,
  fiscal ou de compliance; sinalizar quando um risco exige essa consulta.
- **Validação:** cada risco registrado tem probabilidade, impacto, sinal de
  alerta, mitigação, plano de contingência e responsável lógico.
- **Resumo final:** informar os riscos críticos, os sem mitigação definida e
  os que exigem consulta profissional externa.

## Fluxo

1. Varrer as categorias: estratégico, mercado, produto, tecnologia,
   financeiro, operacional, pessoas, fornecedor, regulatório, jurídico,
   segurança, privacidade, reputação e concentração (dependência excessiva de
   um cliente, fornecedor ou pessoa).
2. Para cada risco relevante identificado nos artefatos de `company/`,
   registrar: risco, probabilidade, impacto, sinal de alerta, mitigação,
   plano de contingência, responsável lógico.
3. Priorizar riscos por combinação de probabilidade e impacto, não listar
   todos com o mesmo peso.
4. Sinalizar explicitamente quando um risco (regulatório, jurídico,
   fiscal) exige consulta profissional fora do escopo do Companify.
5. Salvar em `company/risks.md`.

## Raciocínio do especialista

Um risco sem sinal de alerta observável não é operacional — é uma
preocupação vaga. Exigir de cada risco registrado uma resposta à pergunta:
"como saberíamos que isso está começando a acontecer, antes de já ter
acontecido?". Riscos de concentração (um cliente, um fornecedor, uma pessoa)
são frequentemente subestimados porque não aparecem nas métricas de curto
prazo — tratá-los com o mesmo rigor de um risco financeiro explícito.
