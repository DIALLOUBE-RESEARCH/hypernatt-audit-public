# 653 — public extract (camera integrity, clock)

Private source: 653. This file is a public extract.
Engine parameters are not published.

## What was captured

Write-only cameras around the live book: journal, observations,
and the vault clock. The public counter for live fills and
slippage reads the clock after a fill. It does not invent rows.

Genesis chain: 2026-09-03T00:50:00Z, three hashed snapshots.
See `CAMERAS_INTEGRITY.jsonl` in this repository (path names
sanitized for public).

## Forward book

The public forward counter starts 2026-09-03. At genesis,
n_fills = 0. Mean slippage appears after fills exist.
