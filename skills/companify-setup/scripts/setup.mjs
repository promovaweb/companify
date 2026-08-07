/**
 * Prepara a configuração do Companify em um projeto consumidor.
 *
 * O script cria somente arquivos e diretórios ausentes. O AGENTS.md recebe
 * um bloco delimitado que pode ser atualizado sem apagar as instruções do
 * projeto. Nunca sobrescreve `.companify/` ou `company/` já preenchidos.
 */

import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const skillDir = path.resolve(scriptDir, "..");
const repositoryRoot = path.resolve(skillDir, "../..");
const startMarker = "<!-- companify:consumer:start -->";
const endMarker = "<!-- companify:consumer:end -->";

const DEFAULT_CONFIG = `version: 1

company:
  name: ""
  country: BR
  language: pt-BR
  currency: BRL
  stage: idea

paths:
  workspace: .companify
  output: company
  brand: brand
`;

const DEFAULT_COMPANY_CONTEXT = `# Company Context

## Empresa

Nome:
Estágio:
País:
Mercado:
Tipo de negócio:

## Fundadores

Fundadores:
Experiência:
Competências:

## Problema

Problema:
Quem possui o problema:
Frequência:
Intensidade:
Evidências:

## Solução

Solução:
Produto:
Serviço:
Estado atual:

## Cliente

Público:
Segmentos:
ICP:
Usuários:
Compradores:

## Oferta

Oferta atual:
Preço:
Forma de cobrança:

## Receita

Modelo atual:
Receita atual:
Receita recorrente:
Clientes:

## Tração

Usuários:
Clientes:
Receita:
Crescimento:
Retenção:
Outras evidências:

## Aquisição

Canais atuais:
Conversão:
CAC conhecido:

## Operação

Equipe:
Parceiros:
Recursos:
Processos críticos:

## Tecnologia

Stack:
Infraestrutura:
Dependências:
Integrações:

## Objetivos

12 meses:
3 anos:
5 anos:

## Restrições

Capital:
Equipe:
Prazo:
Regulação:
Tecnologia:

## Brandfy

Propósito:
Missão:
Visão:
Valores:
Posicionamento:
Públicos:
Promessa:
Personalidade:

## Premissas

Pendente.

## Pendências

Pendente.
`;

const DEFAULT_INTERVIEW = `# Entrevista empresarial

Registre aqui as perguntas ainda abertas e as respostas confirmadas, por
dimensão. Não preencha uma dimensão inteira de uma vez; avance apenas nas
lacunas relevantes ao estágio atual da empresa.

## Lacunas abertas

Pendente.

## Respostas confirmadas

Pendente.
`;

const DEFAULT_ASSUMPTIONS = `# Premissas

Use o formato \`ASS-NNN\` descrito em
\`companify-interview/references/assumption-record.md\`. Nenhuma entrada
ainda registrada.
`;

const DEFAULT_DECISIONS = `# Decisões

Use o formato \`DEC-NNN\` descrito em
\`companify-board/references/decision-record.md\`. Nenhuma entrada ainda
registrada.
`;

const DEFAULT_EVIDENCE = `# Evidências

Registre fonte, data e o que a evidência sustenta. Nenhuma entrada ainda
registrada.
`;

const DEFAULT_METRICS = `# Métricas

Use a árvore descrita em \`companify-cfo/references/metrics-tree.md\`,
adaptada ao modelo de negócio real. Nenhuma métrica ainda registrada.
`;

const DEFAULT_RISKS = `# Riscos

Use as categorias e o formato descritos em \`companify-risk/SKILL.md\`.
Nenhum risco ainda registrado.
`;

const DEFAULT_COMPANY_README = `# Company

Este diretório reúne os artefatos empresariais consolidados pelo Companify.
Cada arquivo é produzido por uma skill \`companify-*\` específica; consulte
\`docs/specification.md\` no repositório do Companify para a tabela completa
de responsabilidades.

| Artefato | Status |
| --- | --- |
| strategy.md | pendente |
| market.md | pendente |
| business-model.md | pendente |
| product.md | pendente |
| technology.md | pendente |
| marketing.md | pendente |
| revenue.md | pendente |
| finance.md | pendente |
| operations.md | pendente |
| people.md | pendente |
| risks.md | pendente |
| roadmap.md | pendente |
| business-plan.md | pendente |
`;

const DIRECTORIES = [".companify/reviews", "company"];

const FILES = [
  [".companify/config.yaml", DEFAULT_CONFIG],
  [".companify/company-context.md", DEFAULT_COMPANY_CONTEXT],
  [".companify/interview.md", DEFAULT_INTERVIEW],
  [".companify/assumptions.md", DEFAULT_ASSUMPTIONS],
  [".companify/decisions.md", DEFAULT_DECISIONS],
  [".companify/evidence.md", DEFAULT_EVIDENCE],
  [".companify/metrics.md", DEFAULT_METRICS],
  [".companify/risks.md", DEFAULT_RISKS],
  ["company/README.md", DEFAULT_COMPANY_README],
];

function parseArguments(argv) {
  const options = { project: ".", check: false };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--check") {
      options.check = true;
    } else if (argument === "--project") {
      options.project = argv[index + 1];
      index += 1;
    } else {
      throw new Error(`Argumento desconhecido: ${argument}`);
    }
  }

  return options;
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function loadConsumerBlock() {
  const canonical = path.join(repositoryRoot, "AGENTS.md");
  const bundled = path.join(skillDir, "references", "agents-consumer.md");
  const source = await readFile((await exists(canonical)) ? canonical : bundled, "utf8");
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);

  if (start === -1 || end === -1 || end < start) {
    throw new Error("Bloco de instruções do consumidor não encontrado.");
  }

  return source.slice(start, end + endMarker.length);
}

function mergeAgents(existing, block) {
  const start = existing.indexOf(startMarker);
  const end = existing.indexOf(endMarker);

  if (start === -1 && end === -1) {
    return `${existing.trimEnd()}\n\n${block}\n`;
  }

  if (start === -1 || end === -1 || end < start) {
    throw new Error("O AGENTS.md contém marcadores Companify incompletos.");
  }

  return `${existing.slice(0, start)}${block}${existing.slice(end + endMarker.length)}`;
}

async function expectedChanges(projectRoot, block) {
  const missing = [];

  for (const directory of DIRECTORIES) {
    if (!(await exists(path.join(projectRoot, directory)))) {
      missing.push(`diretório ${directory}`);
    }
  }

  for (const [relativePath] of FILES) {
    if (!(await exists(path.join(projectRoot, relativePath)))) {
      missing.push(`arquivo ${relativePath}`);
    }
  }

  const agentsPath = path.join(projectRoot, "AGENTS.md");
  const agents = (await exists(agentsPath))
    ? await readFile(agentsPath, "utf8")
    : "# Instruções do projeto\n";

  if (mergeAgents(agents, block) !== agents) {
    missing.push("bloco Companify em AGENTS.md");
  }

  return { missing, agentsPath, agents };
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const projectRoot = path.resolve(options.project);
  const block = await loadConsumerBlock();
  const state = await expectedChanges(projectRoot, block);

  if (options.check) {
    if (state.missing.length > 0) {
      console.error(
        state.missing.map((item) => `- Ausente ou desatualizado: ${item}`).join("\n"),
      );
      process.exitCode = 1;
      return;
    }

    console.log("Configuração Companify conferida.");
    return;
  }

  for (const directory of DIRECTORIES) {
    await mkdir(path.join(projectRoot, directory), { recursive: true });
  }

  for (const [relativePath, content] of FILES) {
    const target = path.join(projectRoot, relativePath);
    if (!(await exists(target))) {
      await writeFile(target, content, "utf8");
    }
  }

  await writeFile(state.agentsPath, mergeAgents(state.agents, block), "utf8");
  console.log(`Companify configurado em ${projectRoot}.`);
}

await main();
