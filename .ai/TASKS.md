# TASKS

## Critical Path

001 -> 002 -> 003 -> 011

## wave-1

Lock scope, assumptions, and engineering baseline.

### 001 Write project charter and architecture baseline

- Priority: P0
- Category: foundation
- Depends on: none
- Summary: Capture the product scope, users, constraints, architecture shape, and open questions.

### 002 Set up repository and delivery baseline

- Priority: P0
- Category: foundation
- Depends on: 001
- Summary: Create the repository structure, quality checks, and basic documentation needed for implementation.

## wave-2

Deliver the first critical capabilities and required controls.

### 003 Implement GitHub Actions API ingestion: store workflow runs + job steps + timing in PostgreSQL

- Priority: P0
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: GitHub Actions API ingestion: store workflow runs + job steps + timing in PostgreSQL.

### 004 Implement Fail rate per workflow/job over last 30/7/1 days

- Priority: P0
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Fail rate per workflow/job over last 30/7/1 days.

## wave-3

Expand feature coverage once the core path is in place.

### 005 Implement Build time P50/P95 per branch and job

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Build time P50/P95 per branch and job.

### 006 Implement Flaky job detection: jobs failing >20% of runs without code changes

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Flaky job detection: jobs failing >20% of runs without code changes.

### 007 Implement Historical context: was this pipeline already red before the current commit?

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Historical context: was this pipeline already red before the current commit?.

### 008 Implement Bottleneck identification: which job takes the longest on average

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Bottleneck identification: which job takes the longest on average.

### 009 Implement Per-repo and cross-repo aggregated view

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Per-repo and cross-repo aggregated view.

### 010 Implement Auto-sync: fetch latest runs on demand or via scheduled job

- Priority: P1
- Category: feature
- Depends on: 001, 002
- Summary: Design and implement the capability for: Auto-sync: fetch latest runs on demand or via scheduled job.

## wave-4

Harden, verify, and prepare the system for release.

### 011 Add integration and error-handling coverage

- Priority: P1
- Category: quality
- Depends on: 003, 004, 005, 006, 007, 008, 009, 010
- Summary: Verify the critical path, failure handling, and integration boundaries with tests.
