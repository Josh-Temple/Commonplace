# Commonplace Project Source

## How to use this document

This document is the project-level source of truth for Commonplace and Lumen.

It defines the project purpose, architecture, content rules, Codex workflow, and templates.

It is not a factual source note for reader-facing knowledge pages. Do not use this document as evidence for claims inside `content/` pages, except for claims about the Commonplace/Lumen project itself.

The goal is to prevent this file from being confused with ordinary research notes under `sources/`.

## Project identity

Commonplace is the repository for Lumen, a Vercel-ready Next.js reading app for a personal knowledge base.

The repository is named **Commonplace**. The app is called **Lumen**.

Lumen is intended to present linked concepts, methods, protocols, rules, index pages, source notes, and reusable outputs in a mobile-first reading interface.

## Project purpose

The project exists to turn research notes, source summaries, personal learning structures, and public-facing methods into a stable, navigable knowledge base.

The reader-facing experience should be clear, lightweight, and practical on Android devices. It should prioritize concise sections, readable typography, internal links, and static rendering where possible.

## Architecture and directories

Use these directory meanings consistently:

```text
content/
  concepts/
  methods/
  protocols/
  rules/
  indexes/
  outputs/
sources/
  research-notes/
  source-summaries/
```

- `content/` contains reader-facing material intended for the Lumen UI.
- `content/outputs/` contains reusable reader-facing or semi-final artifacts such as article drafts, TTS scripts, NotebookLM prompts, structured summaries, or other reusable outputs.
- `sources/` contains research notes, source summaries, and other working notes. These are not final reader-facing pages.

Do not introduce a root-level `outputs/` directory unless there is a later explicit project decision to do so.

## Content rules

Content pages are Markdown files with YAML frontmatter.

Every content page should include:

- `id`
- `title`
- `type`
- `status`
- `summary`
- `tags`
- `confidence`
- `sources`
- `related`
- `next`
- `updated`

Internal links use `[[page-id]]` or `[[page-id|label]]` wikilink syntax.

Keep content concise and mobile-friendly. Prefer short sections, practical headings, and clear distinctions between facts, interpretation, speculation, and personal rules.

Do not invent citations, study details, statistics, source claims, or evidence strength.

## Source-note quality rule

ChatGPT-generated source notes are secondary working notes, not primary sources.

When a content page needs strong factual claims, prefer citing or summarizing the original source material listed inside the source note.

Do not make claims stronger than the source note supports. If the source note is weak, preliminary, or unreviewed, preserve that uncertainty in the reader-facing page.

## Public content standard

Because this repository is public, do not add:

- private diary entries
- personally identifying information
- sensitive personal reflections
- unreleased private business information
- credentials, tokens, API keys, or secrets
- copyrighted long-form text copied from third-party sources
- medical, legal, financial, or investment advice presented as personalized guidance

This project may contain public educational material, personal learning structures, general methods, and public-facing notes, but it should not contain private or sensitive personal content.

## Instruction priority

When instructions conflict, follow this order:

1. Direct user instruction in the current task
2. GitHub Issue acceptance criteria
3. `AGENTS.md`
4. `Handoff.md`
5. This project source document
6. Existing content conventions

The purpose is to make Codex behavior predictable when Issue instructions, handoff notes, and project documentation overlap.

## Codex workflow

For documentation and content tasks:

1. Read `README.md`, `Handoff.md`, and relevant content or source files before editing.
2. Check open GitHub Issues before selecting work, unless the user gives a direct instruction in the current chat.
3. Preserve the current project direction unless the current task explicitly changes it.
4. Prefer additive updates, draft pages, or proposals for major content changes.
5. Keep `content/` and `sources/` roles distinct.
6. Update `Handoff.md` with files changed, summary, validation status, and remaining questions.

For app-code changes, run the full repository validation command:

```bash
npm run validate
```

`npm run validate` runs typechecking, content validation, and the production build. For content-only checks, use:

```bash
npm run validate:content
```

## Templates

### Content page frontmatter

```yaml
id: page-id
title: Page Title
type: concept
status: draft
summary: One concise sentence describing the page.
tags:
  - example
confidence: medium
sources:
  - sources/research-notes/example.md
related: []
next: []
updated: 2026-06-23
```

### Handoff entry checklist

When updating `Handoff.md`, include:

- file or files changed
- short summary of the change
- commands run and whether they passed
- remaining documentation questions, inconsistencies, or limitations
