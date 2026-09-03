# 645 — public extract (TRAIL_ADV, lab TRAIN)

Private source: 645. This file is a public extract.
Engine parameters are not published.

Split: TRAIN (not a walk-forward holdout). Candidate = rejected.

## Book (TRAIN)

| | figure |
|---|---|
| n opens | 4782 |
| losses | 1541 (all TRAIL_ADV) |
| win rate | 67.8% |
| worst loss | -39.37 USD |
| mean TRAIL_ADV loss | -6.85 USD |
| liquidations | 0 |

TRAIL_ADV = adverse-trailing experiment. All 1541 of those exits
were losses. Unit loss was bounded (worst -39.37 USD, not ruin).

COST gate failed. The candidate is not promoted to live.

## What this is not

Not a live promise. Not the vault fill window (see 657).
Confirmed as the TRAIN coffer by public extract 649.
