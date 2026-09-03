#!/usr/bin/env node
/**
 * G3-8 / F#229 — grep anti-fuite (liste figee 658).
 * Usage: node scripts/grep_secrets.mjs [dir]
 * Default dir: notes/
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const FORBIDDEN = [
    /X_ATR/i,
    /\btau_slow\b/i,
    /\btau_fast\b/i,
    /(?<![a-z])tau(?![a-z])/i,
    /catalog_k/i,
    /detect_n/i,
    /detect_k_atr/i,
    /tp_leg1/i,
    /emp_opp/i,
    /sens_mode/i,
    /skip_first/i,
    /duree_max/i,
    /V2_/,
    /engine\.py/i,
    /tick\(\)/i,
    /legs_max/i,
    /0\.0075/,
    /k_atr/i,
    /\bf_max\b/i,
    /print_retest/i,
    /remora/i,
    /requin/i,
    /poisson/i,
    /market[\s_-]*maker/i,
];

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const target = process.argv[2] ? join(process.cwd(), process.argv[2]) : join(root, 'notes');

function walk(dir, acc = []) {
    for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) walk(p, acc);
        else acc.push(p);
    }
    return acc;
}

const files = walk(target);
const hits = [];
for (const f of files) {
    const raw = readFileSync(f, 'utf8');
    for (const re of FORBIDDEN) {
        if (re.test(raw)) hits.push(`${f}  matches  ${re}`);
    }
}

if (hits.length) {
    console.error('FAIL grep_secrets');
    for (const h of hits) console.error(h);
    process.exit(1);
}
console.log(`PASS grep_secrets n_files=${files.length}`);
