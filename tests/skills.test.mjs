import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import assert from "node:assert/strict";

const testsDir = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(testsDir, "..");
const skillsDir = path.join(repositoryRoot, "skills");

async function listSkillDirectories() {
  const entries = await readdir(skillsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("companify-"))
    .map((entry) => entry.name)
    .sort();
}

function parseFrontmatterField(source, field) {
  const match = source.match(new RegExp(`^${field}:\\s*(.+)$`, "m"));
  return match ? match[1].trim() : null;
}

test("expõe as 17 skills do MVP", async () => {
  const names = await listSkillDirectories();
  assert.equal(names.length, 17);
});

test("cada skill tem SKILL.md com frontmatter válido", async () => {
  const names = await listSkillDirectories();

  for (const name of names) {
    const skillPath = path.join(skillsDir, name, "SKILL.md");
    const source = await readFile(skillPath, "utf8");

    const frontmatterName = parseFrontmatterField(source, "name");
    assert.equal(frontmatterName, name, `${name}: campo name deveria ser ${name}`);

    const description = parseFrontmatterField(source, "description");
    assert.ok(description, `${name}: description ausente`);
    assert.ok(
      description.length >= 90 && description.length <= 160,
      `${name}: description com ${description.length} caracteres, esperado entre 90 e 160`,
    );
  }
});

test("cada skill tem agents/openai.yaml com interface completa", async () => {
  const names = await listSkillDirectories();

  for (const name of names) {
    const yamlPath = path.join(skillsDir, name, "agents", "openai.yaml");
    const source = await readFile(yamlPath, "utf8");

    for (const field of ["display_name", "short_description", "default_prompt"]) {
      assert.ok(source.includes(`${field}:`), `${name}: campo ${field} ausente em openai.yaml`);
    }

    const shortDescriptionMatch = source.match(/short_description:\s*"(.*)"/);
    assert.ok(shortDescriptionMatch, `${name}: short_description sem aspas`);
    const shortDescription = shortDescriptionMatch[1];
    assert.ok(
      shortDescription.length >= 25 && shortDescription.length <= 64,
      `${name}: short_description com ${shortDescription.length} caracteres, esperado entre 25 e 64`,
    );
  }
});

test("skills não estão agrupadas em subpastas companify/", async () => {
  const forbidden = path.join(skillsDir, "companify");
  const found = await stat(forbidden).catch(() => null);
  assert.equal(found, null, "skills/companify/ não deve existir; cada skill vive em skills/companify-*");
});
