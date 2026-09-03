# HyperNatt — public audit notes

Proof of Process. Hashed public extracts cited by
https://hypernatt.com/audit

This repository is **public** and **separate** from the private
product repo. Files here are public extracts. Private research
notes are not rewritten: if a private note cannot be published
as-is, a **separate** public file is hashed instead.

## Verify

1. Open a figure on https://hypernatt.com/audit
2. Copy the sha256
3. Hash the matching file in `notes/`
4. The hashes must match

```
sha256sum notes/645_TRAIL_ADV_TRAIN.md
```

## Grep (anti-leak)

The denylist is frozen in the private spec F#229 / 658.
Run before every push:

```
node scripts/grep_secrets.mjs notes
```

A hit means: redact (new public file) or exclude. Never edit a
private source to make a hash "fit".

## Forward book

Starts 2026-09-03. n_fills begins at 0. The page updates when
the ledger advances, not by editing layout.

## License

Public documentation. No engine, no trading code.
