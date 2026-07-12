# Handoff history

Detailed work records are stored by month.

- `Handoff.md` contains only the current repository state.
- `handoffs/YYYY-MM.md` contains detailed chronological work logs.
- New work should update both:
  1. the current-state summary in `Handoff.md`, when the current state changes;
  2. the current monthly archive with the detailed work record.

Do not use `Handoff.md` as an append-only archive.

## Operating rules

- Add newer records above older records within each monthly file.
- Each work record should include purpose, files created/updated/deleted, important implementation or editorial decisions, commands run, validation results, remaining limitations, and suggested next tasks.
- Do not rewrite past logs by default.
- Do not change the meaning of historical records except for typo fixes or link repairs.
- Create a new `YYYY-MM.md` file when the month changes.
- Keep `Handoff.md` concise and current; remove stale descriptions instead of preserving them there.
