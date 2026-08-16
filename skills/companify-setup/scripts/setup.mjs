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
const markdownFencePattern = /```markdown\n([\s\S]*?)\n```/;

async function loadTemplate(referenceFileName) {
  const templatePath = path.join(skillDir, "references", referenceFileName);
  const source = await readFile(templatePath, "utf8");
  const match = source.match(markdownFencePattern);

  if (!match) {
    throw new Error(`Bloco \`\`\`markdown ausente em ${referenceFileName}.`);
  }

  return `${match[1]}\n`;
}

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

const DEFAULT_ESCOLHAS = `# Escolhas

Use o formato \`ESC-NNN\` descrito em
\`companify-board/references/decision-record.md\`. Nenhuma entrada ainda
registrada.
`;

const DEFAULT_COMPROVACOES = `# Comprovações

Registre fonte, data e o que a comprovação sustenta. Nenhuma entrada ainda
registrada.
`;

const DEFAULT_METRICS = `# Métricas

Use a árvore descrita em \`companify-cfo/references/metrics-tree.md\`,
adaptada ao modelo de negócio real. Nenhuma métrica ainda registrada.
`;

const DEFAULT_AMEACAS = `# Ameaças

Use as categorias e o formato descritos em \`companify-ameacas/SKILL.md\`.
Nenhuma ameaça ainda registrada.
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
| ameacas.md | pendente |
| roadmap.md | pendente |
| business-plan.md | pendente |
`;

const DIRECTORIES = [".companify/reviews", "company"];

// Arquivos cujo conteúdo padrão vive na própria referência (fonte única,
// conferida por `syncTemplatedFiles`); os demais só têm conteúdo inicial
// fixo, sem seção que precise evoluir depois.
const TEMPLATED_FILES = [
  [".companify/company-context.md", "company-context-template.md"],
  [".companify/progresso.md", "progresso-template.md"],
];

async function buildFiles() {
  const templated = await Promise.all(
    TEMPLATED_FILES.map(async ([relativePath, referenceFileName]) => [
      relativePath,
      await loadTemplate(referenceFileName),
    ]),
  );

  return [
    [".companify/config.yaml", DEFAULT_CONFIG],
    ...templated,
    [".companify/interview.md", DEFAULT_INTERVIEW],
    [".companify/assumptions.md", DEFAULT_ASSUMPTIONS],
    [".companify/escolhas.md", DEFAULT_ESCOLHAS],
    [".companify/comprovacoes.md", DEFAULT_COMPROVACOES],
    [".companify/metrics.md", DEFAULT_METRICS],
    [".companify/ameacas.md", DEFAULT_AMEACAS],
    ["company/README.md", DEFAULT_COMPANY_README],
  ];
}

const sectionHeadingPattern = /^## .+$/gm;
// Uma linha "Rótulo:" de campo preenchível, não uma linha de tabela (`|`),
// de heading (`#`) ou em branco.
const fieldLinePattern = /^([^\s:#|][^:\n]{0,120}):(?:\s|$)/;

function sectionBody(content, heading) {
  const start = content.indexOf(heading);
  const rest = content.slice(start + heading.length);
  const nextHeading = rest.search(sectionHeadingPattern);
  const body = nextHeading === -1 ? rest : rest.slice(0, nextHeading);
  return `${heading}${body}`.trimEnd();
}

/**
 * Mapa heading (`## Título`) → corpo da seção (tudo até o próximo heading
 * ou o fim do texto), na ordem em que aparecem no documento.
 */
function sectionMap(content) {
  const headings = [...content.matchAll(sectionHeadingPattern)];
  const map = new Map();

  headings.forEach((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < headings.length ? headings[index + 1].index : content.length;
    map.set(match[0], content.slice(start, end));
  });

  return map;
}

function fieldLabels(sectionBodyText) {
  return sectionBodyText
    .split("\n")
    .map((line) => line.match(fieldLinePattern))
    .filter(Boolean)
    .map((match) => match[1].trim());
}

/**
 * Sincroniza um arquivo já existente com o template atual, em duas
 * granularidades: acrescenta ao fim uma seção `## ` inteira que o template
 * tem e o arquivo não tem, e acrescenta ao fim de uma seção já existente
 * (mas comum às duas versões) os campos `Rótulo:` que o template tem e a
 * seção do arquivo ainda não tem. Nunca remove, reordena ou reescreve uma
 * seção ou campo já preenchido pelo usuário.
 */
function syncTemplatedContent(existingContent, templateContent) {
  const templateSections = sectionMap(templateContent);
  const existingSections = sectionMap(existingContent);

  if (existingSections.size === 0) {
    return { content: existingContent, addedSections: [], addedFields: [] };
  }

  const firstHeadingIndex = existingContent.search(sectionHeadingPattern);
  const preamble = existingContent.slice(0, firstHeadingIndex);
  const addedFields = [];

  const rebuiltSections = [...existingSections.entries()].map(([heading, body]) => {
    const templateBody = templateSections.get(heading);
    if (!templateBody) {
      return `${heading}${body}`;
    }

    const existingLabels = new Set(fieldLabels(body));
    const linesToAdd = templateBody.split("\n").filter((line) => {
      const match = line.match(fieldLinePattern);
      return match && !existingLabels.has(match[1].trim());
    });

    if (linesToAdd.length === 0) {
      return `${heading}${body}`;
    }

    addedFields.push(
      ...linesToAdd.map((line) => `${heading.replace(/^## /, "")}: ${line.match(fieldLinePattern)[1].trim()}`),
    );

    return `${heading}${body.trimEnd()}\n${linesToAdd.join("\n")}\n`;
  });

  const missingHeadings = [...templateSections.keys()].filter(
    (heading) => !existingSections.has(heading),
  );

  let content = `${preamble}${rebuiltSections.join("")}`;

  if (missingHeadings.length > 0) {
    const appended = missingHeadings
      .map((heading) => sectionBody(templateContent, heading))
      .join("\n\n");
    content = `${content.trimEnd()}\n\n${appended}\n`;
  }

  return { content, addedSections: missingHeadings, addedFields };
}

async function syncTemplatedFiles(projectRoot, files) {
  const updates = [];

  for (const [relativePath, referenceFileName] of TEMPLATED_FILES) {
    const target = path.join(projectRoot, relativePath);
    if (!(await exists(target))) {
      continue;
    }

    const [, templateContent] = files.find(([entryPath]) => entryPath === relativePath);
    const existingContent = await readFile(target, "utf8");
    const { content, addedSections, addedFields } = syncTemplatedContent(
      existingContent,
      templateContent,
    );

    if (addedSections.length > 0 || addedFields.length > 0) {
      updates.push({
        target,
        content,
        relativePath,
        addedSections,
        addedFields,
        referenceFileName,
      });
    }
  }

  return updates;
}

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

async function expectedChanges(projectRoot, block, files) {
  const missing = [];

  for (const directory of DIRECTORIES) {
    if (!(await exists(path.join(projectRoot, directory)))) {
      missing.push(`diretório ${directory}`);
    }
  }

  for (const [relativePath] of files) {
    if (!(await exists(path.join(projectRoot, relativePath)))) {
      missing.push(`arquivo ${relativePath}`);
    }
  }

  for (const update of await syncTemplatedFiles(projectRoot, files)) {
    for (const heading of update.addedSections) {
      missing.push(`seção ${heading.replace(/^## /, "")} em ${update.relativePath}`);
    }
    for (const field of update.addedFields) {
      missing.push(`campo ${field} em ${update.relativePath}`);
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
  const files = await buildFiles();
  const state = await expectedChanges(projectRoot, block, files);

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

  for (const [relativePath, content] of files) {
    const target = path.join(projectRoot, relativePath);
    if (!(await exists(target))) {
      await writeFile(target, content, "utf8");
    }
  }

  for (const update of await syncTemplatedFiles(projectRoot, files)) {
    await writeFile(update.target, update.content, "utf8");
    console.log(
      `Atualizado ${update.relativePath}: ${update.addedSections.length} seção(ões) e ` +
        `${update.addedFields.length} campo(s) do template adicionado(s).`,
    );
  }

  await writeFile(state.agentsPath, mergeAgents(state.agents, block), "utf8");
  console.log(`Companify configurado em ${projectRoot}.`);
}

await main();
