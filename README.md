# Customer Demo Vibe Lab

Build a customer-specific, interactive conversation demo using GitHub Copilot
CLI, Copilot Agent mode, and VS Code in GitHub Codespaces.

## Workshop outcome

You will use this workflow:

**Describe → Generate → Run → Inspect → Refine → Share**

You will leave with:

- A completed customer brief
- Reusable customer-specific source content
- A standalone `customer-demo.html` file
- A repeatable workflow for creating future demos

## Prerequisites

- A GitHub account
- Access to GitHub Codespaces
- Access to GitHub Copilot
- A modern web browser

No local development environment is required.

## Start the lab

1. Select **Use this template**.
2. Create your own repository.
3. Open the new repository in a Codespace.
4. Wait for dependency installation to finish.
5. Open `CUSTOMIZE.md`.
6. Begin with **Checkpoint 1**.

## Demo structure

Every demo follows an MTT-led customer conversation:

1. What we heard
2. Future-state experience
3. Microsoft capabilities
4. Evidence and validation
5. Proof-of-concept discussion

Contoso Bank is selected by default. Fabrikam Manufacturing and Adatum Retail
are included as additional examples.

## Repository guide

| Path | Purpose |
| --- | --- |
| `CUSTOMIZE.md` | Complete participant instructions |
| `starter/customer-brief-template.md` | Blank customer brief |
| `starter/contoso-bank.md` | Sample banking brief |
| `starter/adatum-retail.md` | Sample retail brief |
| `.github/prompts/create-customer-demo.prompt.md` | Reusable Copilot generation prompt |
| `src/content/` | Customer-specific structured content |
| `src/content/demo.js` | Selects the active customer |
| `src/main.js` | Shared demo renderer |
| `src/styles.css` | Shared responsive presentation design |
| `vite.export.config.js` | Standalone HTML export configuration |

## Run the application

```bash
npm run dev
```

The application uses port `5173`.

## Build and export

Validate the production build:

```bash
npm run build
```

Create the standalone deliverable:

```bash
npm run export
```

The downloadable file is created at:

```text
output/customer-demo.html
```

The generated `output/` directory is intentionally excluded from Git.

## Customer-information guardrails

Use only fictional, sanitized, or customer-approved information.

Do not include confidential information, personal data, invented metrics,
unsupported product claims, fabricated quotations, or unverified source URLs.

Copilot output is a draft. Human review is required before customer use,
including review of customer information, Microsoft claims, evidence, privacy,
security, compliance, accessibility, and proposed outcomes.

## Continue

Follow the complete learner workflow in [`CUSTOMIZE.md`](CUSTOMIZE.md).