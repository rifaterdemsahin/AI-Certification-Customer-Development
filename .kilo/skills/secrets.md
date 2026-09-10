# Secrets & Key Vault Skill

Load this skill when handling credentials, environment variables, or Azure Key Vault integration.

## Purpose
Manage secrets securely through the project's existing Azure Key Vault — never expose credentials in code, config, or git history.

## Key Vault (do not create a new one)
- **Vault name:** `dp-kv-deliverypilot`
- **Secrets path:** `/vaults/dp-kv-deliverypilot/secrets`
- This vault is shared across the founder's projects. Always read/write secrets here — never provision a second vault for this project.

## Key Files
- `.env.example` — Template for required environment variables (placeholders only, no real secrets)
- `2_Environment/setup_azure.md` — Azure Key Vault setup guide

## Secrets Map (this project is a static HTML/GitHub Pages site — no backend DB)
| Secret | Location | Purpose |
|--------|----------|---------|
| `ANTHROPIC-API-KEY` | `dp-kv-deliverypilot` | Claude API access for content/agent tooling |
| `AXIOM-TOKEN` | `dp-kv-deliverypilot` | Logging API token |
| `YOUTUBE-API-KEY` | `dp-kv-deliverypilot` | YouTube Data API for the video pipeline |
| `youtube-client-secret` / `youtube-token` | `dp-kv-deliverypilot` | YouTube OAuth for uploads |
| `canva-mcp-CANVA-CLIENT-ID` / `canva-mcp-CANVA-CLIENT-SECRET` | `dp-kv-deliverypilot` | Canva MCP asset pipeline |

## Rules
- Never store secrets in code, config files, or git history
- Use the existing `dp-kv-deliverypilot` Azure Key Vault (FIPS 140-2 HSMs, RBAC, audit logs) — **do not create a new vault for this or any sub-project**
- Load secrets at runtime via Azure SDK or GitHub Actions `Azure/get-keyvault-secrets`, e.g. `az keyvault secret show --vault-name dp-kv-deliverypilot --name <SECRET-NAME>`
- When adding a new secret, update `.env.example` with the placeholder variable name (no value)
- Run `az keyvault secret set --vault-name dp-kv-deliverypilot --name <SECRET-NAME> --value <value>` to store the actual value
