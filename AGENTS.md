# Agent Notes

## Current Repository State
- This repo currently contains planning docs only; there is no application source tree, no root manifest (`package.json`/`pyproject.toml`/`go.mod`), and no runnable build/test/lint commands to execute yet.
- Treat `README.md` and files under `project/docs/` as the current source of truth for scope until code is added.

## Authoritative Inputs For Implementation
- `project/docs/SESSIONS.md`: required landing-page sections include About, Services (with Kubernetes/Pipelines examples), Training (in-company), and Contact.
- `project/docs/SESSIONS.md`: contact flow is expected to send messages via WhatsApp and include an AI chat entry point.
- `project/docs/COLORS.md`: preferred palette direction is orange (creativity), blue (trust), and very light gray.
- `project/docs/DEPLOY.md`: deployment expectation is a Helm chart under `infra/`, intended for ArgoCD provisioning.

## Working Conventions For Future Sessions
- Do not invent framework-specific commands before adding a real toolchain; first create and commit the manifest/config that defines them.
- When implementing features, preserve Portuguese business context and service terminology from `README.md` unless explicitly asked to rewrite copy.
- If docs and future code/config disagree, follow executable config/scripts and then update docs to match.
