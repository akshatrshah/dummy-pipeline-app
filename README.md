# dummy-pipeline-app

A minimal Node.js app whose only purpose is to trigger GitHub Actions CI/CD runs that PipelineSync can observe.

## What's in here

```
dummy-pipeline-app/
├── index.js                        # Tiny HTTP server
├── package.json
└── .github/
    └── workflows/
        └── ci.yml                  # 6-stage CI/CD pipeline
```

## The Pipeline

The workflow in `ci.yml` runs these stages in order:

```
Lint ──┬── Unit Tests ──┬── Build ── Deploy Staging ── Deploy Production
       └── Security Scan ┘
```

| Job | Triggers |
|-----|----------|
| Lint | Every push / PR |
| Unit Tests | After Lint |
| Security Scan | After Lint (parallel) |
| Build | After Tests + Security |
| Deploy Staging | After Build, on `develop` or `workflow_dispatch` |
| Deploy Production | After Staging, on `main` only |

## Setup

1. Push this folder to a GitHub repo
2. GitHub Actions will run automatically on any push
3. Point PipelineSync at this repo (see main README)

## Triggering manually

In GitHub → Actions → CI/CD Pipeline → Run workflow
